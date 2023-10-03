import {$, Component} from '@qavajs/po-playwright';

export default class MegaMenu extends Component {
    SignInButton = $('[data-testid="signInButton"]:visible');
    LogOutButton = $('[data-testid="logged-in-mega-menu-logout"]:visible');
}