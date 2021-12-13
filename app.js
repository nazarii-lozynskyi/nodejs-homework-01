const contactsOperations = require('./db');

const fs = require('fs/promises');
// const fs = require("fs").promises;

//const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'getAll':
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;

    case 'getById':
      const contact = await contactsOperations.getById(id);
      console.log(contact);
      break;

    case 'add':
      const newContact = await contactsOperations.add({ name, email, phone });
      console.log(newContact);
      break;

    case 'updateById':
      const updateContact = await contactsOperations.updateById({
        id,
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    case 'removeById':
      const removeById = await contactsOperations.removeById(id);
      console.log(removeById);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

//const id = '5';
//const data = {
//  name: 'Nazarii Lozynskyi',
//  email: 'nazarko.l.m@gmail.com',
//  phone: '+48 502-503-172',
//};
//const updateId = '09d56270-5baa-11ec-bbec-eb95ad181429';
//const updateData = {
//  name: 'Kristina Mateichuk',
//  email: 'kristina@gmail.com',
//  phone: '+48 257-787-192',
//};
const removeId = '03b0a940-5baa-11ec-b146-5dd5f058058d';

//invokeAction({ action: 'getAll' });
//invokeAction({ action: 'getById', id });
//invokeAction({ action: 'add', ...data });
//invokeAction({ action: 'updateById', ...updateData, id: updateId });
invokeAction({ action: 'removeById', id: removeId });
