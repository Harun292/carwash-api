import logger from '../config/logger.js';

export function httpLogger(request, response, next) {
    logger.info(`${request.method} ${request.path}`);
    next();
  }
  