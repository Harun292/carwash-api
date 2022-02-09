import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { httpLogger } from './middlewares/logger.js';
import router from './routes/index.js';
import {port} from './config/vars.js';
import logger from './config/logger.js';
import { errorHandler, errorConverter, notFound } from './middlewares/errors.js';
import { corsOptions } from './config/cors.js';


const app = express();
// registered middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(httpLogger);

// main router middleware
app.use('/', router);

// page not found handler
app.use(notFound);

// error converter
app.use(errorConverter);

// error handler
app.use(errorHandler);

// serve app here
const server = app.listen(port, function () {
  logger.info(`Carwash api is listening on port ${port}`);
});

export { server, app };
