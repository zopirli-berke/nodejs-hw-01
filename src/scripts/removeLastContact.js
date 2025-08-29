import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Veritabanı zaten boş silinecek kişi yok');
      return;
    }
    const removedContact = contacts.pop();
    console.log('silinen son kişi:', removedContact);

    await writeContacts(contacts);
    console.log('Veritabanından son kişi başarıyla silindi');
  } catch (error) {
    console.log('İşlem sırasında bir hata oluştu:', error);
  }
};

removeLastContact();
