import Model from '../database/index.js';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default class BaseModel extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate(opt, context) {
    this.updatedAt = new Date().toISOString();
  }
}