require("dotenv/config");
const { defineConfig } = require("drizzle-kit");

const config = defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./drizzle/schema.js",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

module.exports = config;
