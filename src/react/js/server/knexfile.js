import { config as dotenvConfig } from "dotenv";
dotenvConfig();

export default {
  client: "pg",
  connection: {
    connectionString: process.env.DB_URL,
    port: parseInt(process.env.DB_PORT, 10),
  }
};
