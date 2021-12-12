const fs = require("fs/promises");

const getAll = async () => {
  const contacts = await fs.readFile("contacts.json");
  return contacts;
};

module.exports = getAll;
