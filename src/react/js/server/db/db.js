import knex from "knex";
import config from "../knexfile.js";

const db = knex(config);

const query = (table) => db(table);

export default query;