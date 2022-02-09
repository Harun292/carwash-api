import Knex  from 'knex';
import { Model } from 'objection';
import config from '../knexfile.js';

export const devDatabase = Knex(config.development);


// Give the knex instance to objection.
Model.knex(devDatabase);

export default Model;
