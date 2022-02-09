
  import errors from'objection';
  import {env} from '../config/vars.js';
  import { HttpError } from '../utils/error.js';
  import logger from '../config/logger.js';
  import { ErrorTypes } from '../config/constants.js';
  
  export const errorHandler = (err, req, res, next) => {
    const response = {
      message: err.message,
      data: err.data,
      type: err.type,
      stack: err.stack,
    };
  
    if (env !== 'development') {
      delete response.stack;
    }
  
    logger.error(err);
  
    res.status(err.status).send({ error: response });
  };
  
  export const errorConverter = (err, req, res, next) => {
    let convertedError = err;
  
    if (err instanceof errors.ValidationError) {
      convertedError = new HttpError(
        err.statusCode,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        err.data || {}
      );
    } else if (err instanceof errors.NotFoundError) {
      convertedError = new HttpError(
        err.statusCode,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        env === 'development' ? err.data || {} : {}
      );
    } else if (err instanceof errors.UniqueViolationError) {
      convertedError = new HttpError(
        409,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        env === 'development'
          ? {
              table: err.table,
              column: err.columns,
              constraint: err.constraint,
            }
          : {}
      );
    } else if (err instanceof errors.NotNullViolationError) {
      convertedError = new HttpError(
        400,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        env === 'development'
          ? {
              table: err.table,
              column: err.column,
            }
          : {}
      );
    } else if (err instanceof errors.ForeignKeyViolationError) {
      convertedError = new HttpError(
        409,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        env === 'development'
          ? {
              table: err.table,
              constraint: err.constraint,
            }
          : {}
      );
    } else if (err instanceof errors.DataError) {
      convertedError = new HttpError(
        400,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR
      );
    } else if (err instanceof errors.CheckViolationError) {
      convertedError = new HttpError(
        400,
        env === 'development' ? err.message : err.name,
        ErrorTypes.DB_ERROR,
        env === 'development'
          ? {
              table: err.table,
              constraint: err.constraint,
            }
          : {}
      );
    } else if (!(err instanceof HttpError)) {
      convertedError = new HttpError(
        500,
        err.message,
        ErrorTypes.INTERNAL_SERVER_ERROR
      );
    }
  
    next(convertedError);
  };
  
  export const notFound = (req, res, next) => {
    const err = new HttpError(404, 'Page does not exist', ErrorTypes.NOT_FOUND);
  
    next(err);
  };
  