import express from 'express';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import { db } from './config/mysql_config';
import { redisClient } from './config/redis_config';

// Load env
dotenv.config();


// Express app
const app = express();

app.use(express.json());

app.get('/', async (_, res) => {
  res.send(`🕓 Server time is ${dayjs().format()}`);
});

const port = process.env.PORT || 3000;

(async () => {
  try {
    // await redisClient.connect();
    // await db.getConnection();

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
})();
