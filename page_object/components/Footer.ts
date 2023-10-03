import {$, Component} from '@qavajs/po-playwright';

export default class Footer extends Component {
    CopyrightText = $('[data-testid="copyrightText"]');
    Logo = $('[data-testid="logo"] a');
}


