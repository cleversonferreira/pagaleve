import { Router } from 'express';
import { createCustomerController } from './useCases/CreateCustomer';
import { listCustomerController } from './useCases/ListCustomers';
import { updateCustomerController } from './useCases/UpdateCustomers';
import { deleteCustomerController } from './useCases/DeleteCustomers';
import { searchCustomerController } from './useCases/SearchCustomers';

const router = Router();

router.get('/', (_req, res) => {
  return res.send('PagaLeve API');
});

router.post('/customers', (req, res) => {
  return createCustomerController.handle(req, res);
});

router.get('/customers', (req, res) => {
  return listCustomerController.handle(req, res);
});

router.get('/customers/search', (req, res) => {
  return searchCustomerController.handle(req, res);
});

router.put('/customers/:uuid', (req, res) => {
  return updateCustomerController.handle(req, res);
});

router.delete('/customers/:uuid', (req, res) => {
  return deleteCustomerController.handle(req, res);
});

export { router };
