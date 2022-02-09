import { Router } from 'express';
import {addBillController } from '../controllers/bills.controller.js';
const router = Router();
router.post('/',addBillController)

export default router;