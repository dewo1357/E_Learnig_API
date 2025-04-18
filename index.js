/* eslint-disable no-undef */
const Hapi = require("@hapi/hapi")
const { routes } = require("./routes")
const jwt = require("@hapi/jwt")

const SECRET_ACCESS_TOKEN = 'access_secret_key';

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: "0.0.0.0",
        routes: {
            cors: {
                origin: ['*']
            }
        }

    });

    await server.register(jwt)
    server.auth.strategy('jwt-access', 'jwt',
        {
            keys: SECRET_ACCESS_TOKEN,
            verify: {
                aud: false,
                iss: false,
                sub: false,
                maxAgeSec: 7 * 24 * 60 * 60
            },
            validate : (artifacts) => {
                return { isValid: true,credentials : artifacts.decoded.payload }

            }
        });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();