/* eslint-disable */
import { Browser, Page, BrowserContext } from '@playwright/test';

declare global {
  var browser: Browser;
  var driver: Browser;
  var context: BrowserContext;
  var page: Page;
  var config: any;
}

import { Before } from '@cucumber/cucumber';

//Before()
