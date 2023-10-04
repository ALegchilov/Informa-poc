import {Component, $} from "@qavajs/po-playwright";


export default class HomePage extends Component {
    ArticleTitle = $('[data-testid="article-title"]');
}