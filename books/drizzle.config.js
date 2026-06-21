const dotenv = require("dotenv");
const { defineConfig } = require("drizzle-kit");
dotenv.config();

const config = defineConfig({
  out: "./drizzle",
  schema: "./models/index.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

module.exports = config;
