import * as dotenv from 'dotenv';
import isCI from 'is-ci';
import SecretVariables from "../support/secretVariables";
SecretVariables.init();
dotenv.config();

export default {
    BROWSER: process.env.BROWSER || 'chromium',
    HEADLESS: isCI ? true : process.env.HEADLESS === 'true' || false,
    PAGE_TIMEOUT: 10000,
    VISIBLE_TIMEOUT: 10000,
    STEP_TIMEOUT: 200000,
    DATA_CLEANUP_TIMEOUT: 20000,
    RP_ENABLE: isCI,
    TEST_BRAND: process.env.TEST_BRAND || 'farmprogress',
    TEST_ENV: process.env.TEST_ENV || 'staging',
    TAGS: process.env.TAGS,
    PARALLEL: Number(process.env.PARALLEL) || 1,
    DEBUG_LOGS: process.env.DEBUG_LOGS === 'true',
    ACCOUNTS: JSON.parse(process.env.ACCOUNTS as string)
};
