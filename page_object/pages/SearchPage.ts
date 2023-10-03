import {$, $$, Component} from '@qavajs/po-playwright';
import SearchBar from "../components/SearchBar";

export default class SearchPage extends Component {
  SearchBoxTitle = $('[data-testid="searchResultsTitle"]');
  SearchBar = $(new SearchBar('[data-component="search-bar"]'));
  SearchResultSummary = $('[data-testid="searchSummaryResults-desktop-text"]');
  Pagination = $('[data-component="pagination"]');
  SearchResultTitles = $$('.ListPreview [data-testid="preview-default-title"]');
}
