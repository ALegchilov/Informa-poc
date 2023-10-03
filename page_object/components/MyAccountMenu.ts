import {$, Component} from '@qavajs/po-playwright';

export default class MyAccountMenu extends Component {
   LogOutButton = $('[data-testid="logged-in-dropdown-menu-logout"]');
}


