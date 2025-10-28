import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envVarsSchema = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required(),
})
.unknown(true);

const { error, value } = envVarsSchema.validate(process.env);

if( error ) {
  throw new Error(`Config validation error: ${error.message}`);
}

const enVars: EnvVars = value;

export const  envs ={
    PORT: enVars.PORT,
    DATABASE_URL: enVars.DATABASE_URL,
}