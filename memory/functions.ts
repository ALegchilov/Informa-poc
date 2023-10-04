import Account from "../interfaces/Account";
import params from "./../support/executionParams"
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
const getAutomationUser = ()=> <Account>accounts.find(user => user.email === 'automation@testing.com');

export default { number, boolean, getUserByState, getUserByCountry, getAutomationUser };
