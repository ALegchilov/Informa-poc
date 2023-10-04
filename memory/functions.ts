import Account from "../interfaces/Account";
import params from "./../support/executionParams"
import {HYPHEN, WHITESPACES_REGEX} from "../support/constants";

const accounts: Array<Account> = params.ACCOUNTS;

const number = (numberLike: string): number => parseFloat(numberLike);
const boolean = (booleanLike: string): boolean => {
    if (booleanLike === 'true') return true;
    if (booleanLike === 'false') return false;
    throw Error('Passed value is not boolean-like');
};
const getUserByState = (state: string): Account => {
    return <Account>accounts.find(user => user.state === state);
}
const getUserByCountry = (country: string): Account => {
    return <Account>accounts.find(user => user.country === country);
}
const getAutomationUser = () => <Account>accounts.find(user => user.email === 'automation@testing.com');
const toLowerCase = (text: string) => text.toLowerCase();

const toLowerKebabCase = (text: string) => text.replace(WHITESPACES_REGEX, HYPHEN).toLowerCase();
export default {number, boolean, getUserByState, getUserByCountry, getAutomationUser, toLowerKebabCase, toLowerCase};
