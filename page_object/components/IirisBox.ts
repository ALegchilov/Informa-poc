import {$, Component} from '@qavajs/po-playwright';

export default class IirisBox extends Component {
    EmailInput = $('input[type="email"]');
    PasswordInput = $('input[name="password"]');
    LoginWithEmailButton = $('button:has-text("Log in with email")');
}