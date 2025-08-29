import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');

    const contacts = JSON.parse(fileContent);

    return contacts;
  } catch (error) {
    console.log('Dosya okunurken veya işlenirken bir hata oluştu:', error);
    return [];
  }
};
