import {Component, $} from "@qavajs/po-playwright";
import IirisBox from "../components/IirisBox";
import MegaMenu from "../components/MegaMenu";
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";
import MyAccountMenu from "../components/MyAccountMenu";

export default class HomePage extends Component {
    MyAccountButton = $('[data-testid="navBase"] [data-module="logged-in"]');
    MyAccountMenu = $(new MyAccountMenu('[data-testid="logged-in-dropdown-menu"]'));
    logOut = '[data-testid="logged-in-dropdown-menu-logout"]'
    SignInButton = $('[data-testid="signInButton"]');
    MegaMenuButton = $('[data-testid="navBase-megaMenuButton"]');
    MegaMenu = $(new MegaMenu('[data-module="mega-menu"]'));
    IirisBox = $(new IirisBox('[class="iiris-box"]'));
    CookieBanner = $(new CookieBanner('[aria-label="Cookie banner"]'));
    Footer = $(new Footer('[data-module="footer"]'), {ignoreHierarchy: true});
}