const { Issuer } = require("openid-client");
const { generators } = require('openid-client');


Issuer.discover("https://accounts.google.com") // => Promise
    .then(function (googleIssuer) {
        console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);

        const client = new googleIssuer.Client({
            client_id: "zELcpfANLqY7Oqas",
            client_secret: "TQV5U29k1gHibH5bx1layBo0OSAvAbRT3UYW3EWrSYBB5swxjVfWUa1BS8lqzxG/0v9wruMcrGadany3",
            redirect_uris: ["http://localhost:3000/cb"],
            response_types: ["code"],
            // id_token_signed_response_alg (default "RS256")
            // token_endpoint_auth_method (default "client_secret_basic")
        });

        // authorization
        const code_verifier = generators.codeVerifier();        
        const code_challenge = generators.codeChallenge(verifier);

        client.authorizationUrl({
            scope: 'openid email profile',
            resource: 'https://my.api.example.com/resource/32178',
            code_challenge,
            code_challenge_method: 'S256',
        });
    });