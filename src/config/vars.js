import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export let env = process.env.NODE_ENV;
export let port = process.env.PORT;
export let dbHost = process.env.DB_HOST;
export let dbName= process.env.DB_NAME;
export let dbUser= process.env.DB_USER;
export let dbPass= process.env.DB_PASS;
export let JWT_KEY= process.env.JWT_KEY;
export let corsWhitelist= process.env.CORS_WHITELIST.split(' ');

