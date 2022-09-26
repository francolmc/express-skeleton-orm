import dotenv from 'dotenv';

dotenv.config();

export const consts: Consts = {
    PORT: process.env.PORT,
    DATABASE_NAME: process.env.DATABASE_NAME || ''
};

export interface Consts {
    PORT: string | undefined;
    DATABASE_NAME: string;
};