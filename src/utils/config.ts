import * as dotenv from 'dotenv';

dotenv.config();

export const APP_URL = process.env.APP_URL ?? 'https://default-url.com';
