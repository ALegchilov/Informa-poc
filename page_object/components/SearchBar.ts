import {$, Component} from '@qavajs/po-playwright';

export default class SearchBar extends Component {
  ClearButton = $('[data-testid="closeButton"]');
  SearchInput = $('[data-testid="input"]');
  SearchButton = $('[data-testid="searchButton"]');
}
