import {
    getCustomers,
    addCustomer,
    deleteCustomer,
    editCustomer,
  } from '../services/customer.service.js';
  import { HttpError } from '../utils/error.js';
  
  export const getCustomersController = async (req, res, next) => {
    try {
      const customers = await getCustomers();
      res.status(200).send({ customers: customers });
    } catch (error) {
      next(error);
    }
  };
  
  export const addCustomerController = async (req, res, next) => {
    try {
      const addedCustomer = await addCustomer(
        req.body.email,
        req.body.firstName,
        req.body.lastName,
        req.body.visits
      );
      res.status(201).send({
        message: 'Customer ' + addedCustomer.firstName +" "+ addedCustomer.lastName + ' successfully added',
        customer: addedCustomer,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteCustomerController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const numDeleted = await deleteCustomer(id);
      if (numDeleted != 1)
        throw new HttpError(422, 'Error while trying to delete customer');
      res.status(200).send('Customer successfully deleted');
    } catch (error) {
      next(error);
    }
  };
  
  export const editCustomerController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editedCustomer = await editCustomer(id, req.body.customer);
      if (!editCustomer)
        throw new HttpError(422, 'Error while trying to update customer');
      res.status(200).send({
        customer: editedCustomer,
      });
    } catch (error) {
      next(error);
    }
  };
  