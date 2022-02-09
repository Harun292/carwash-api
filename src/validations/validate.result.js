import { validationResult } from 'express-validator';
import { HttpError } from '../utils/error.js';
import { ErrorTypes } from '../config/constants.js';

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError(
      422,
      errors.array({ onlyFirstError: true })[0].msg,
      ErrorTypes.VALIDATION_ERROR,
      {
        errors: errors.array({ onlyFirstError: true }),
      }
    );
  }

  return next();
};