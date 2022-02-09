import BaseModel from '../models/baseModel.js'
import Bill from './bill.js';
import { Model } from 'objection';
export default class Customer extends BaseModel{
    static get tableName() {
      return 'customers';
    }
    static get idColumn() {
      return 'id';
    }
    static get jsonSchema() {
      return {
        type: 'object',
        required: ['email', 'firstName', 'lastName','visits',],
        properties: {
          id: { type: 'integer' },
          email: { type: 'string', minLength: 1, maxLength: 64 },
          firstName: { type: 'string', minLength: 1, maxLength: 20 },
          lastName: { type: 'string', minLength: 1, maxLength: 30 },
          visits:{type:'integer'}
        },
      };
    }
    static get relationMappings() {

      return {
        bills: {
          relation: Model.HasManyRelation,
          modelClass: Bill,
          join: {
            from: 'customers.id',
            to: 'bills.customer_id',
          },
        },
      };
    }
  }
  