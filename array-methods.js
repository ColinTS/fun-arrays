var dataset = require('./dataset.json').bankBalances;
/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
function bigMoney(balance){
  return parseFloat(balance.amount) > 100000;
}
var hundredThousandairs = dataset.filter(bigMoney);

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/

function addRoundedBalance(balance){
  var roundedNumber = Math.round(parseFloat(balance.amount));
  // balance.rounded = roundedNumber;
  return {
    amount: balance.amount,
    state: balance.state,
    rounded: roundedNumber
  };
}
var roundedDollar = dataset.map(addRoundedBalance);

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
function roundCents(balance){
  var roundedCents = Math.round(parseFloat(balance.amount) * 10) / 10;
  // console.log(roundedCents);

  return {
    amount: balance.amount,
    state: balance.state,
    roundedDime: roundedCents
  };
}

var roundedDime = dataset.map(roundCents);

// set sumOfBankBalances to the sum of all amounts in bankBalances
var sumOfBankBalances = dataset.reduce(function(prev,balance){
  prev += parseFloat(balance.amount);
  return (Math.round(parseFloat(prev)*100))/100;
},0);

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */

 //------chain: filter and reduce

 //filter out the states
function getStates(account){
  if (account.state === 'GA' || account.state === 'WI' || account.state === 'IL' ||
    account.state === 'WY' || account.state === 'OH' || account.state === 'DE'){
    return account;
  }
}

function sumOfInterest(prev, account){
  prev += parseFloat(account.amount)* 0.189;
  return (Math.round(parseFloat(prev)*100))/100;
}



var sumOfInterests = dataset.filter(getStates).reduce(sumOfInterest, 0);
console.log(sumOfInterests);

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
