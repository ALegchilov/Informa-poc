import {$, Component} from '@qavajs/po-playwright';

export default class CookieBanner extends Component {
    PrivacyPolicyLink = $('[id="onetrust-group-container"] a');
    AcceptButton = $('[id="onetrust-accept-btn-handler"]');
    CloseButton = $('[id="onetrust-close-btn-container"]');
}