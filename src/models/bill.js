import BaseModel from '../models/baseModel.js'
export default class Bill extends BaseModel{
    static get tableName() {
      return 'bills';
    }
    static get idColumn() {
      return 'id';
    }
    static get jsonSchema() {
      return {
        type: 'object',
        required: ['programs','price',],
        properties: {
          id: { type: 'integer' },
          programs: {type:'string'},
          price:{type:'number'}
        },
      };
    }
  }
  