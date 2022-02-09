import { param, body } from 'express-validator';

import { validateResult } from '././validate.result.js';

export const addCustomerValidator = [
  body('email').exists().isEmail(),
  body('firstName').exists(),
  body('lastName').exists(),
  body('visits').isNumeric(),
  validateResult,
];

export const editCustomerValidator = [
  param('id').exists(),
  body('customer').exists(),
  body('customer.email').optional().isEmail(),
  body('customer.firstName')
    .optional()
    .exists(),
  body('customer.lastName')
    .optional()
    .exists(),
  body('customer.visits').optional().isNumeric(),
  validateResult,
];
