import _ from 'lodash';

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        port: 3000,
        address: process.env.IP || 'localhost',
        seedDB: false,
        expiration: process.env.TOKEN_EXPIRATION || 60 * 60 * 24,
        masterKey: 'softnew',
        jwtSecret: 'softnew',
        // redis: {
        //     host: process.env.REDIS_HOST || '127.0.0.1',
        //     port: process.env.REDIS_PORT || 6379,
        //     options: {

        //     }
        // },
        // mongo: {
        //     options: {
        //         db: { safe: true }
        //     }
        // },
    },
    test: {
        mongo: {
            uri: 'mongodb://localhost/code-challenge-test',
            options: {
                debug: false
            }
        }
    },
    development: {
        mongo: {
            uri: 'mongodb://localhost/code-challenge',
            options: {
                debug: false
            }
        }
    },
};


module.exports = _.merge(config.all, config[config.all.env]);
export default module.exports;

