import express from 'express';
import * as dotenv from 'dotenv';

import { Router } from './routes';

dotenv.config({ path: 'variables.env' });

const app = express();

// Routing
app.use('/', Router());

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on PORT: ${process.env.PORT}`);
});
