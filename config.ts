import Memory from './memory';
import params from './support/executionParams';
import {GITHUB_ACTIONS_RUNS_URL, REPORT_PORTAL_DATA} from './support/constants';
import Informa from "./page_object";

export default {
    paths: ['features/**'],
    require: [
        'node_modules/@qavajs/steps-playwright/index.js',
        'node_modules/@qavajs/steps-memory/index.js',
        'node_modules/@qavajs/steps-api/index.js',
        'stepDefinitions/hooks.ts',
        'stepDefinitions/!(*Stubs).ts',
    ],
    requireModule: ['@qavajs/template', '@qavajs/soft-assertion'],
    templates: ['templates/*.feature'],
    browser: {
        trace: {
            event: ['onFail'], // Events to save trace. Possible value onFail or afterScenario
            attach: true,
        },
        timeout: {
            page: params.PAGE_TIMEOUT,
            visible: params.VISIBLE_TIMEOUT,
        },
        capabilities: {
            viewport: {width: 1920, height: 1080},
            browserName: params.BROWSER,
            headless: params.HEADLESS,
            ignoreHTTPSErrors: true,
            trace: {
                event: 'onFail',
                attach: true,
            },
        },
    },
    format: [
        'json:report/report.json',
        '@qavajs/html-formatter:report/report.html',
        '@qavajs/console-formatter',
        '@qavajs/xunit-formatter:report/report.xml',
        '@qavajs/format-report-portal:report/rp.out',
    ],
    formatOptions: {
        console: {
            showLogs: params.DEBUG_LOGS,
        },
        rpConfig: {
            enable: params.RP_ENABLE,
            apiKey: '89d84085-6eb4-4ebc-8d5a-48462587fd05',
            endpoint: REPORT_PORTAL_DATA.ENDPOINT,
            description: GITHUB_ACTIONS_RUNS_URL + process.env.GITHUB_RUN_ID,
            project: 'infl-002',
            launch: `INFORMA POC on ${params.TEST_BRAND}`,
            mode: 'DEFAULT',
            retry: 3,
            ignoreErrors: true,
        },
    },
    retry: 2,
    retryTagFilter: '@flaky',
    memory: Memory,
    pageObject: new Informa(),
    parallel: params.PARALLEL,
    tags: params.TAGS,
    defaultTimeout: params.STEP_TIMEOUT,
    publishQuiet: false,
    screenshot: 'onFail',
    // service: [dataCleanup],
};
