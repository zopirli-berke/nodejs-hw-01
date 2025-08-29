import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    const countContacts = allContacts.length;
    console.log('Veritabanındaki kişi sayısı:', countContacts);
  } catch (error) {
    console.error('Veritabanındaki kişi sayısı alınırken hata oluştu:', error);
  }
};

countContacts();
