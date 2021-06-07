const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// console.log(listContacts());
// console.log(getContactById(1));
// console.log(removeContact(5));
// console.log(addContact("Mango", "mango@gmailffffffff.com", "033-456-56"));

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
