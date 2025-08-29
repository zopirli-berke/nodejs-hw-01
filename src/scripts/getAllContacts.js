import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Veritabanındaki tüm kişiler:', contacts);
  } catch (error) {
    console.error('Veritabanındaki kişiler alınırken hata oluştu:', error);
  }
};

console.log(await getAllContacts());
