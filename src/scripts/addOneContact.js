import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);
    console.log('Yeni kişi başarıyla eklendi');
    console.log('Yeni kişi detayları:', newContact);
  } catch (error) {
    console.error('Kişi eklenirken hata oluştu:', error);
  }
};

addOneContact();
