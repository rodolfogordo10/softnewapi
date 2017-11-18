import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import helmet from 'helmet';
import config from './config';
import routes from '../routes';
// import authenticationConfig from './authentication-config';

const SixMonths = 15778476000;

export const initMiddlewareAndExpressConfigs = (app) => {
    // Showing stack errors
    app.set('showStackError', true);
    // Enable jsonp
    app.enable('jsonp callback');
    if (config.env === 'development' || config.env === 'test') {
        // Enable logger (morgan)
        app.use(morgan('dev'));
        app.use(compression());
        // Disable views cache
    }

    // Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
};

// export const initConfigAuthentication = (app) => {
//     authenticationConfig(app);
// }

export const initHelmetHeaders = (app) => {
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.use(helmet.ieNoOpen());
    app.use(helmet.hsts({
        maxAge: SixMonths,
        includeSubdomains: true,
        force: true
    }));
    app.disable('x-powered-by');
};

export const initCrossDomain = (app) => {
    app.use(cors());
    app.use((req, res, next) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
        next();
    });
};

export const initRoutes = (app) => {
    app.use('/api', routes);
};
