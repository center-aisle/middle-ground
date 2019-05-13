const crypto = require("crypto"),
    express = require("express"),
    expressSession = require("express-session"),
    http = require("http"),
    path = require("path"),
    querystring = require("querystring"),
    rs = require("connect-redis")(expressSession),
    extend = require("extend"),
    // logger = require("morgan"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    errorHandler = require("errorhandler"),
    methodOverride = require("method-override");
let test = {
    status: "new"
};

const app = express();

const options = {
    login_url: "/login",
    consent_url: "/consent",
    scopes: {
        foo: "Access to foo special resource",
        bar: "Access to bar special resource"
    },
    //when this line is enabled, user email appears in tokens sub field. By default, id is used as sub.
    models: {
        user: { 
            attributes: {
                sub: function() {
                    return this.email;
                }
            }
        }
    },
    app: app
};
const oidc = require("../index").oidc(options);


// all environments
app.set("port", process.env.PORT || 3001);
// app.use(logger("dev"));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser("Some Secret!!!"));
app.use(expressSession({ 
    store: new rs({ 
        host: "127.0.0.1", port: 6379
    }), secret: "Some Secret!!!"
}));
// app.use(app.router);

//redirect to login
app.get("/", (req, res) => {
    res.redirect("/user/login");
});

//Login form (I use email as user name)
app.get("/user/login", (req, res, next) => {
    const head = "<head><title>Login</title></head>";
    const inputs = "<input type='text' name='email' placeholder='Enter Email'/><input type='password' name='password' placeholder='Enter Password'/>";
    const error = req.session.error ? "<div>" + req.session.error + "</div>" : "";
    const body = "<body><h1>Login</h1><form method='POST'>" + inputs + "<input type='submit'/></form>" + error;
    res.send("<html>" + head + body + "</html>");
});

const validateUser = (req, next) => {
    delete req.session.error;
    req.model.user.findOne({
        email: req.body.email
    }, (err, user) => {
        if (!err && user && user.samePassword(req.body.password)) {
            return next(null, user);
        } else {
            const error = new Error("Username or password incorrect");
            return next(error);
        }
    });
};

const afterLogin = (req, res, next) => {
    res.redirect(req.param("return_url") || "/user");
};

const loginError = (err, req, res, next) => {
    req.session.error = err.message;
    res.redirect(req.path);
};

app.post("/user/login", oidc.login(validateUser), afterLogin, loginError);

app.all("/user/logout", oidc.removetokens(), (req, res, next) => {
    req.session.destroy();
    res.redirect("/user/login");
});

//authorization endpoint
app.get("/user/authorize", oidc.auth());

//token endpoint
app.post("/user/token", oidc.token());

//user consent form
app.get("/user/consent", (req, res, next) => {
    const head = "<head><title>Consent</title></head>";
    let lis = [];
    for (let i in req.session.scopes) {
        lis.push("<li><strong>" + i + "</strong>: " + req.session.scopes[i].explain + "</li>");
    }
    const ul = "<ul>" + lis.join("") + "</ul>";
    const error = req.session.error ? "<div>" + req.session.error + "</div>" : "";
    const body = "<body><h1>Consent</h1><form method='POST'>" + ul + "<input type='submit' name='accept' value='Accept'/><input type='submit' name='cancel' value='Cancel'/></form>" + error;
    res.send("<html>" + head + body + "</html>");
});

//process user consent form
app.post("/user/consent", oidc.consent());

//user creation form
app.get("/user/create", (req, res, next) => {
    const head = "<head><title>Sign in</title></head>";
    let inputs = "";
    //var fields = mkFields(oidc.model("user").attributes);
    const fields = {
            first_name: {
                label: "First Name",
                type: "text"
            },
            last_name: {
                label: "Last Name",
                type: "text"
            },
            email: {
                label: "Email",
                type: "email"
            },
            password: {
                label: "Password",
                type: "password"
            },
            passConfirm: {
                label: "Confirm Password",
                type: "password"
            }
    };
    for (let i in fields) {
        inputs += "<div><label for='" + i + "'>" + fields[i].label + "</label><input type='" + fields[i].type + "' placeholder= '" + fields[i].label + "' id='" + i + "' name='" + i + "'/></div>";
    }
    const error = req.session.error ? "<div>" + req.session.error + "</div>" : "";
    const body = "<body><h1>Sign in</h1><form method='POST'>" + inputs + "<input type='submit'/></form>" + error;
    res.send("<html>" + head + body + "</html>");
});

//process user creation
app.post("/user/create", oidc.use({
    policies: {
        loggedIn: false
    }, models: "user"
}), (req, res, next) => {
    delete req.session.error;
    req.model.user.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            req.session.error=err;
        } else if (user) {
            req.session.error="User already exists";
        };
        if (req.session.error) {
            res.redirect(req.path);
        } else {
            req.body.name = req.body.first_name + " " + req.body.last_name;
            req.model.user.create(req.body, (err, user) => {
                if (err || !user) {
                    req.session.error = err ? err : "User could not be created";
                    res.redirect(req.path);
                } else {
                    req.session.user = user.id;
                    res.redirect("/user");
                }
            });
        }
    });
});

app.get("/user", oidc.check(), (req, res, next) => {
    res.send("<h1>User Page</h1><div><a href='/user/client'>See registered clients of user</a></div>");
});

//User Info Endpoint
app.get("/api/user", oidc.userInfo());

app.get("/user/foo", oidc.check("foo"), (req, res, next) => {
    res.send("<h1>Page Restricted by 'foo' scope</h1>");
});

app.get("/user/bar", oidc.check("bar"), (req, res, next) => {
    res.send("<h1>Page restricted by 'bar' scope</h1>");
});

app.get("/user/and", oidc.check("bar", "foo"), (req, res, next) => {
    res.send("<h1>Page restricted by 'bar and foo' scopes</h1>");
});

app.get("/user/or", oidc.check(/bar|foo/), (req, res, next) => {
    res.send("<h1>Page restricted by 'bar or foo' scopes</h1>");
});

// Client register form
app.get("/client/register", oidc.use("client"), (req, res, next) => {
    const mkId = () => {
        const key = crypto.createHash("md5").update(req.session.user+"-"+Math.random()).digest("hex");
        req.model.client.findOne({key: key}, function(err, client) {
            if(!err && !client) {
                const secret = crypto.createHash("md5").update(key+req.session.user+Math.random()).digest("hex");
                req.session.register_client = {};
                req.session.register_client.key = key;
                req.session.register_client.secret = secret;
                const head = "<head><title>Register Client</title></head>";
                let inputs = "";
                const fields = {
                    name: {
                        label: "Client name",
                        html: "<input type='text' id='name' name='name' placeholder='Client name'/>"
                    },
                    redirect_uris: {
                        label: "Redirect uri",
                        html: "<input type='text' id='redirect_uris' name='redirect_uris' placeholder='Redirect uri'/>"
                    },
                    key: {
                        label: "Client key",
                        html: "<span>" + key + "</span>"
                    },
                    secret: {
                        label: "Client secret",
                        html: "<span>" + secret + "</span>"
                    }
                };
                for (let i in fields) {
                    inputs += "<div><label for='" + i + "'>" + fields[i].label + "</label> " + fields[i].html + "</div>";
                }
                const error = req.session.error ? "<div>" + req.session.error + "</div>" : "";
                const body = "<body><h1>Register Client</h1><form method='POST'>" + inputs + "<input type='submit'/></form>" + error;
                res.send("<html>" + head + body + "</html>");
            } else if (!err) {
                mkId();
            } else {
                next(err);
            }
        });
    };
    mkId();
});

//process client register
app.post("/client/register", oidc.use("client"), (req, res, next) => {
    delete req.session.error;
    req.body.key = req.session.register_client.key;
    req.body.secret = req.session.register_client.secret;
    req.body.user = req.session.user;
    req.body.redirect_uris = req.body.redirect_uris.split(/[, ]+/);
    req.model.client.create(req.body, (err, client) => {
        if (!err && client) {
            res.redirect("/client/" + client.id);
        } else {
            next(err);
        }
    });
});

app.get("/client", oidc.use("client"), (req, res, next) => {
    const head ="<h1>Client's Page</h1><div><a href='/client/register'/>Register new client</a></div>";
    req.model.client.find({
        user: req.session.user
    }, (err, clients) => {
        const body = ["<ul>"];
        clients.forEach(client => {
            body.push("<li><a href='client/" + client.id + "'>" + client.name + "</li>");
        });
        body.push("</ul>");
        res.send(head + body.join(""));
    });
});

app.get("/client/:id", oidc.use("client"), (req, res, next) => {
    req.model.client.findOne({
        user: req.session.user, id: req.params.id
    }, (err, client) => {
        if (err) {
            next(err);
        } else if (client) {
            let html = "<h1>Client " + client.name + " Page</h1><div><a href='/client'>Go back</a></div><ul><li>Key: " + client.key + "</li><li>Secret: " + client.secret + "</li><li>Redirect Uris: <ul>";
            client.redirect_uris.forEach(uri => {
                html += "<li>" + uri + "</li>";
            });
            html += "</ul></li></ul>";
            res.send(html);
        } else {
            res.send("<h1>No Client Found!</h1><div><a href='/client'>Go back</a></div>");
        }
    });
});

app.get("/test/clear", (req, res, next) => {
    test = {
        status: "new"
    };
    res.redirect("/test");
});

app.get("/test", oidc.use({
    policies: {
        loggedIn: false
    }, models: "client"
}), (req, res, next) => {
    let html = "<h1>Test Auth Flows</h1>";
    const resOps = {
        "/user/foo": "Restricted by foo scope",
        "/user/bar": "Restricted by bar scope",
        "/user/and": "Restricted by 'bar and foo' scopes",
        "/user/or": "Restricted by 'bar or foo' scopes",
        "/api/user": "User Info Endpoint"
    };
    const mkinputs = (name, desc, type, value, options) => {
        let inp = "";
        switch (type) {
        case "select":
            inp = "<select id=" + name + " name=" + name + ">";
            for (let i in options) {
                inp += "<option value='" + i + "'" + (value&&value==i ? " selected" : "" ) + ">" + options[i] + "</option>";
            }
            inp += "</select>";
            inp = "<div><label for='" + name + "'>" + (desc || name) + "</label>" + inp + "</div>";
            break;
        default:
            if (options) {
                for (let i in options) {
                    inp +=  "<div>" + "<label for='" + name + "_" + i + "'>" + options[i] + "</label>" + "<input id='" + name + "_" + i + " name='" + name + "' type='" + (type || "radio") + "' value='" + i + "'" + (value&&value==i ? " checked" : "") + ">" + "</div>";
                }
            } else {
                inp = "<input type='" + (type || "text" ) + "' id='" + name + "' name='" + name + "' value='" + (value || "") + "'>";
                if (type != "hidden") {
                    inp = "<div><label for='" + name + "'>" + (desc || name) + "</label>" + inp + "</div>";
                }
            }
        }
        return inp;
    };
    switch (test.status) {
    case "new":
        req.model.client.find().populate("user").exec(function(err, clients){
            const inputs = [];
            inputs.push(mkinputs("response_type", "Auth Flow", "select", null, {
                code: "Auth Code", "id_token token": "Implicit"
            }));
            const options = {};
            clients.forEach(client => {
                options[client.key + ":" + client.secret] = client.user.id + " " + client.user.email + " " + client.key + " (" + client.redirect_uris.join(", ") + ")";
            });
            inputs.push(mkinputs("client_id", "Client Key", "select", null, options));
            //inputs.push(mkinputs("secret", "Client Secret", "text"));
            inputs.push(mkinputs("scope", "Scopes", "text"));
            inputs.push(mkinputs("nonce", "Nonce", "text", "N-"+Math.random()));
            test.status = "1";
            res.send(html + "<form method='GET'>" + inputs.join("") + "<input type='submit'/></form>");
        });
        break;
    case "1":
        req.query.redirect_uri = req.protocol + "://" + req.headers.host+req.path;
        extend(test, req.query);
        req.query.client_id = req.query.client_id.split(":")[0];
        test.status = "2";
        res.redirect("/user/authorize?" + querystring.stringify(req.query));
        break;
    case "2":
        extend(test, req.query);
        if (test.response_type === "code") {
            test.status = "3";
            const inputs = [];
            //var c = test.client_id.split(":");
            inputs.push(mkinputs("code", "Code", "text", req.query.code));
            /*inputs.push(mkinputs("grant_type", null, "hidden", "authorization_code"));
            inputs.push(mkinputs("client_id", null, "hidden", c[0]));
            inputs.push(mkinputs("client_secret", null, "hidden", c[1]));
            inputs.push(mkinputs("redirect_uri", null, "hidden", test.redirect_uri));*/
            res.send(html+"<form method='GET'>" + inputs.join("") + "<input type='submit' value='Get token'/></form>");
        } else {
            test.status = "4";
            html += "Got: <div id='data'></div>";
            const inputs = [];
            //var c = test.client_id.split(":");
            inputs.push(mkinputs("access_token", "Access Token", "text"));
            inputs.push(mkinputs("page", "Resource to access", "select", null, resOps));

            const after =
                "<script>" +
                    "document.getElementById('data').innerHTML = window.location.hash; " +
                    "const h = window.location.hash.split('&'); " +
                    "for (let i = 0; i < h.length; i++) { " +
                        "var p = h[i].split('='); " +
                        "if (p[0]==='access_token') { " +
                            "document.getElementById('access_token').value = p[1]; " +
                            "break; " +
                        "} " +
                    "}" +
                "</script>";
            /*inputs.push(mkinputs("grant_type", null, "hidden", "authorization_code"));
            inputs.push(mkinputs("client_id", null, "hidden", c[0]));
            inputs.push(mkinputs("client_secret", null, "hidden", c[1]));
            inputs.push(mkinputs("redirect_uri", null, "hidden", test.redirect_uri));*/
            res.send(html + "<form method='GET'>" + inputs.join("") + "<input type='submit' value='Get resource'/></form>" + after);
        }
        break;
    case "3":
        test.status = "4";
        test.code = req.query.code;
        var query = {
            grant_type: "authorization_code",
            code: test.code,
            redirect_uri: test.redirect_uri
        };
        const post_data = querystring.stringify(query);
        const post_options = {
            port: app.get("port"),
            path: "/user/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": post_data.length,
                "Authorization": "Basic " + Buffer(test.client_id, "utf8").toString("base64"),
                "Cookie": req.headers.cookie
            }
        };

        // Set up the request
        var post_req = http.request(post_options, pres => {
            pres.setEncoding("utf8");
            let data = "";
            pres.on("data", chunk => {
                data += chunk;
                console.log("Response: " + chunk);
            });
            pres.on("end", () => {
                console.log(data);
                try {
                    data = JSON.parse(data);
                    html += "Got: <pre>" + JSON.stringify(data) + "</pre>";
                    const inputs = [];
                    //var c = test.client_id.split(":");
                    inputs.push(mkinputs("access_token", "Access Token", "text", data.access_token));
                    inputs.push(mkinputs("page", "Resource to access", "select", null, resOps));
                    /*inputs.push(mkinputs("grant_type", null, "hidden", "authorization_code"));
                    inputs.push(mkinputs("client_id", null, "hidden", c[0]));
                    inputs.push(mkinputs("client_secret", null, "hidden", c[1]));
                    inputs.push(mkinputs("redirect_uri", null, "hidden", test.redirect_uri));*/
                    res.send(html + "<form method='GET'>"+inputs.join("") + "<input type='submit' value='Get Resource'/></form>");
                } catch(e) {
                    res.send("<div>" + data + "</div>");
                }
            });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
        break;
//res.redirect("/user/token?"+querystring.stringify(query));
    case "4":
        test = {
            status: "new"
        };
        res.redirect(req.query.page + "?access_token=" + req.query.access_token);
    }
});



// development only
if ("development" === app.get("env")) {
    app.use(errorHandler());
}

const mkFields = params => {
    const fields = {};
    for (let i in params) {
        if (params[i].html) {
            fields[i] = {};
            fields[i].label = params[i].label || (i.charAt(0).toUpperCase()+i.slice(1)).replace(/_/g, " ");
            switch(params[i].html) {
                case "password":
                    fields[i].html = "<input class='form-control' type='password' id='" + i + "' name='" + i + "' placeholder='" + fields[i].label+ "'" + (params[i].mandatory? " required" : "") +"/>";
                    break;
                case "date":
                    fields[i].html = "<input class='form-control' type='date' id='" + i + "' name='" + i + "'" + (params[i].mandatory ? " required" : "") + "/>";
                    break;
                case "hidden":
                    fields[i].html = "<input class='form-control' type='hidden' id='" + i + "' name='" + i + "'/>";
                    fields[i].label = false;
                    break;
                case "fixed":
                    fields[i].html = "<span class='form-control'>" + params[i].value + "</span>";
                    break;
                case "radio":
                    fields[i].html = "";
                    for (let j=0; j<params[i].ops; j++) {
                        fields[i].html += "<input class='form-control' type='radio' id='" + i + "_" + j + "' name='" + i + "' " + (params[i].mandatory ? " required" : "") + "/> " + params[i].ops[j];
                    }
                    break;
                default:
                    fields[i].html = "<input class='form-control' type='text' id='" + i + "' name='" + i + "' placeholder='" + fields[i].label + "'" + (params[i].mandatory ? " required" : "") + "/>";
                    break;
            }
        }
    }
    return fields;
}

const clearErrors = (req, res, next) => {
    delete req.session.error;
    next();
};

http.createServer(app).listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
});