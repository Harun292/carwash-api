import BaseModel from '../models/baseModel.js'
export default class User extends BaseModel {
    static get tableName() {
      return 'users';
    }
    static get idColumn() {
      return 'id';
    }
    static get jsonSchema() {
      return {
        type: 'object',
        required: ['email', 'password', 'firstName', 'lastName'],
        properties: {
          id: { type: 'integer' },
          email: { type: 'string', minLength: 1, maxLength: 64 },
          password: { type: 'string', minLength: 6, maxLength: 255 },
          firstName: { type: 'string', minLength: 1, maxLength: 20 },
          lastName: { type: 'string', minLength: 1, maxLength: 30 },
        },
      };
    }
    

  }
