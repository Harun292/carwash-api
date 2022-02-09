import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getCustomersController,
  addCustomerController,
  deleteCustomerController,
  editCustomerController,
} from '../controllers/customer.contoller.js';
import {
  addCustomerValidator,
  editCustomerValidator,
} from '../validations/customer.validations.js';

const router = Router();
router.use(authenticate);
router.get('/', getCustomersController);
router.post('/', addCustomerValidator, addCustomerController);
router.delete('/:id', deleteCustomerController);
router.patch('/:id', editCustomerValidator, editCustomerController);

export default router;
