const contactsOperations = require("./db");

const fs = require("fs/promises");
// const fs = require("fs").promises;

//const argv = require("yargs").argv;

const invokeAction = async (action, id, name, email, phone) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction("getAll");
