import jwt from 'jsonwebtoken';
import { HttpError } from '../utils/error.js';
import { JWT_KEY } from '../config/vars.js';
import { ErrorTypes } from '../config/constants.js';

export const authenticate = (req, res, next) => {
  var token = req.headers['authorization'];
  if (!token)
    throw new HttpError(401, 'No token provided', ErrorTypes.UNAUTHORIZED);

  jwt.verify(token, JWT_KEY, function (err, decoded) {
    if (err)
      throw new HttpError(
        401,
        'Failed to authenticate token',
        ErrorTypes.UNAUTHORIZED
      );
    req.id = decoded.user.id;
    next();
  });
};
