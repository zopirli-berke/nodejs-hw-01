import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);

    console.log('İletişim bilgileri veritabanından başarıyla silindi');
  } catch (error) {
    console.error('İletişim bilgileri veritabanından silinemedi:', error);
  }
};

removeAllContacts();
