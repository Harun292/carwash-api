import { Router } from 'express';
import customerRoutes from './customer.routes.js';
import loginRoutes from './login.routes.js';
import billRoutes from './bills.routes.js'

const router = Router();

// Test
router.get('/test', () => {
  console.log('test');
});

// User routes
router.use('/customers', customerRoutes);
router.use('/bills', billRoutes);

router.use('/login', loginRoutes);

//api v1 main router
export default router.use('/api/v1', router);
