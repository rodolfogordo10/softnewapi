import express from 'express';
import {
    initMiddlewareAndExpressConfigs,
    initHelmetHeaders,
    initCrossDomain,
    initRoutes,
} from './config/express';

const app = express();

export default async () => {
    await initMiddlewareAndExpressConfigs(app);
    await initHelmetHeaders(app);
    await initCrossDomain(app);
    await initRoutes(app);
    return app;
};

