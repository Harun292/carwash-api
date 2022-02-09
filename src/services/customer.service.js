import Customer from '../models/customers.js';

export const getCustomers = async() => {
  const customers = await Customer.query().withGraphJoined('bills')
  return customers;
};

export const addCustomer = async (email,firstName,lastName,visits ) => {
  const customer = await Customer.query().insert({
    email:email,
    firstName: firstName,
    lastName: lastName,
    visits:visits
  });

  return customer;
};

export const deleteCustomer = async id => {
  const numDeleted = await Customer.query().deleteById(id);
  return numDeleted;
};

export const editCustomer = async (id, fieldsForEdit) => {
  const updatedCustomer = await Customer.query().patchAndFetchById(id, {
    email: fieldsForEdit.email,
    firstName: fieldsForEdit.firstName,
    lastName: fieldsForEdit.lastName,
    visits: fieldsForEdit.visits,
  });
  return updatedCustomer;
};

