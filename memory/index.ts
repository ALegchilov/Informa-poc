import process from 'process';
import secureEnv from 'secure-env-ts';
import functions from './functions';
import url from './url';
import constants from './constants';
import params from '../support/executionParams';

// const decrypted = secureEnv({ secret: process.env.AUTOMATION_SECRET as string });

export default {
  ...constants,
  ...functions,
  ...url,
};
