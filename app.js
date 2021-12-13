const contactsOperations = require('./db');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

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

invokeAction(argv);
