// server.js

import setupApp from './src/app';
import serverConfig from './src/config/config';

const { port, address, env } = serverConfig;

setupApp()
    .then(app => app.listen(port, address, () => console.log(`App in ${env} mode runing on ${address}:${port}`)))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });

