import {$$, Component} from "@qavajs/po-playwright";

export default class HomePage extends Component {
    PreviewContentTitles = $$('[data-testid="preview-default-title"]:visible');
    PreviewRightBarTitles= $$('[data-variant="card-vertical"] [data-testid="preview-default-title"]');
    Breadcrumbs = $$('[data-testid="breadcrumb-link"]');
}
