import path from 'node:path';

const projectRoot = process.cwd();

export const PATH_DB = path.join(projectRoot, 'src', 'db', 'db.json');
