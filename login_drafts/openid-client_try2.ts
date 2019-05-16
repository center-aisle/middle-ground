const { Issuer, generators, Strategy } = require("openid-client");

const code_verifier = generators.codeVerifier();


Issuer.discover("https://accounts.google.com")
    .then(googleIssuer => {
        console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);

        const client = new googleIssuer.Client({
            client_id: this.client_id,
            // client_secret: this.client_secret,
            redirect_uris: ["/user"],
            response_types: ["id_token"],
            // id_token_signed_response_alg (default "RS256")
            // token_endpoint_auth_method (default "client_secret_basic")
        });

        const nonce = generators.nonce();

        client.authorizationUrl({
            scope: "openid email profile",
            response_mode: "form_post",
            nonce,
        });

        // assumes req.body is populated from your web framework's body parser
        const params = client.callbackParams(req);
        client.callback("https://client.example.com/callback", params, { nonce })
            .then(tokenSet => {
                console.log("received and validated tokens %j", tokenSet);
                console.log("validated ID Token claims %j", tokenSet.claims());
            });
        
        
        const passport = new Strategy ({
            client,
            params
        }).then((tokenSet, userInfo, done) => {
            console.log("received and validated tokens %j", tokenSet);
        });

        // authentication
        // const code_challenge = generators.codeChallenge(code_verifier);

        // client.authorizationUrl({
        //     scope: "openid email profile",
        //     resource: "https://my.api.example.com/resource/32178",
        //     code_challenge,
        //     code_challenge_method: "S256",
        // });


        // const params = client.callbackParams(req);
        // client.callback("https://client.example.com/callback", params, { code_verifier })
        //     .then(tokenSet => {
        //         console.log('received and validated tokens %j', tokenSet);
        //         console.log('validated ID Token claims %j', tokenSet.claims());
        //     });

        // client.userinfo(access_token)
        //     .then(userinfo => {
        //         console.log("userinfo %j", userinfo);
        //     });




    });