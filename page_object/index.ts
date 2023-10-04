import { $ } from '@qavajs/po-playwright';
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LatestContentPage from "./pages/LatestContentPage";
import ArticlePage from "./pages/ArticlePage";

export default class Informa {
  HomePage = $(new HomePage('//*[@data-template="home-page"]/ancestor::body'));
  SearchPage = $(new SearchPage('//*[@data-template="search"]/ancestor::body'));
  LatestContentPage = $(new LatestContentPage('//*[@data-template="content-format-list"]/ancestor::body'));
  ArticlePage = $(new ArticlePage('//*[@data-template="article"]/ancestor::body'))
}
