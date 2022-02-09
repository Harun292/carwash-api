import { knexSnakeCaseMappers } from 'objection';
import { dbHost,dbName,dbUser,dbPass } from './config/vars.js';
import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config = {
  development: {
    client: 'pg',
    connection: {
        host : dbHost,
        database: dbName,
        user: dbUser,
        password: dbPass
      },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/database/migrations',
      tableName: 'knex_migrations',
      extension: 'js',
    },
    seeds: {
      directory: __dirname + '/database/seeds',
      extension: 'js',
    },
    ...knexSnakeCaseMappers(),
  }}
  export default config;