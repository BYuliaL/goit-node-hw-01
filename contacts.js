const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    console.log("List of contacts: ");
    console.table(contacts);
  } catch (error) {
    return console.error(error.message);
  }

  // fs.readFile(contactsPath, (error, data) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   const contacts = JSON.parse(data);
  //   console.log("List of contacts: ");
  //   console.table(contacts);
  // });
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((contact) => {
      if (contact.id === contactId) {
        console.log(`Get contact by ID=${contactId}:`);
        console.table(contact);
      }
    });
  } catch (error) {
    console.error(error.message);
  }

  // fs.readFile(contactsPath, (error, data) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   const contacts = JSON.parse(data);

  //   const contact = contacts.find((contact) => {
  //     if (contact.id === contactId) {
  //       console.log(`Get contact by ID=${contactId}:`);
  //       console.table(contact);
  //       return contact;
  //     }
  //   });

  //   if (contact == null) {
  //     console.log(`Contact with ID="${contactId}" not found!`);
  //   }
  // });
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const newContact = contacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(
      contactsPath,
      JSON.stringify(newContact, null, 2),
      "utf-8"
    );

    console.log("Contact deleted successfully! New list of contacts: ");
    console.table(newContact);
  } catch (error) {
    console.error(error.message);
  }

  // fs.readFile(contactsPath, (error, data) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   const contacts = JSON.parse(data);
  //   const newContact = contacts.filter((contact) => contact.id !== contactId);

  //   if (newContact.length === contacts.length) {
  //     console.log(
  //       `Contact with ID="${contactId}" don't removed! ID="${contactId}" not found!`
  //     );
  //     return;
  //   }

  //   console.log("Contact deleted successfully! New list of contacts: ");
  //   console.table(newContact);

  //   fs.writeFile(contactsPath, JSON.stringify(newContact), (error) => {
  //     if (error) {
  //       return console.log("error :", error);
  //     }
  //   });
  // });
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);

    contacts.push({
      id: contacts.length + 1,
      name,
      email,
      phone,
    });
    console.log("Contacts added successfully! New lists of contacts: ");
    console.table(contacts);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(contacts, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error(error.message);
  }

  // fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  // });

  // fs.readFile(contactsPath, (error, data) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   const contacts = JSON.parse(data);

  //   contacts.push({
  //     id: contacts.length + 1,
  //     name,
  //     email,
  //     phone,
  //   });

  //   console.log("Contacts added successfully! New lists of contacts: ");
  //   console.table(contacts);

  //   fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //   });
  // });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
