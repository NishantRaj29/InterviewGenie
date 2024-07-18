/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview_owner:UjbpaY0hS6Cx@ep-icy-dream-a54mlk1e.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
  };