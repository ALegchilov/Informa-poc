import { $ } from '@qavajs/po-playwright';
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

export default class Informa {
  HomePage = $(new HomePage('//*[@data-template="home-page"]/ancestor::body'));
  SearchPage = $(new SearchPage('//*[@data-template="search"]/ancestor::body'));
}
