import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  if (isNaN(number) || number <= 0) {
    console.log('Lütfen geçerli bir sayı girin.');
    return;
  }
  try {
    const existingContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const allContacts = [...existingContacts, ...newContacts];
    await writeContacts(allContacts);

    console.log(
      `${number} adet yeni kişi başarıyla eklendi. Toplam kişi sayısı: ${allContacts.length}`,
    );
  } catch (error) {
    console.error('Kişiler oluşturulurken bir hata oluştu:', error);
  }
};

generateContacts(5);
