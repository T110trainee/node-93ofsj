enum ProfitType {
  monthly = 'month',
  quarterly = 'quarter',
  semianually = 'semester',
  yearly = 'annual',
}

function calculateBankProfit(
  accountNumber: string,
  accountHolderName: string,
  amountInAccount: number,
  profittype: ProfitType
) {
  let profitRate: number = 0;
  let amountOfProfit: number;
  let totalAmountWithProfit: number;
  let amountDetails: string;

  switch (profittype as ProfitType) {
    case ProfitType.monthly:
      profitRate = 4;
      break;
    case ProfitType.quarterly:
      profitRate = 6;
      break;
    case ProfitType.semianually:
      profitRate = 8;
      break;
    case ProfitType.yearly:
      profitRate = 4;
      break;
  }
  amountOfProfit = (amountInAccount * profitRate) / 100;
  totalAmountWithProfit = amountInAccount + amountOfProfit;

  amountDetails = `${accountHolderName} gets ${amountOfProfit}with the 
rate of${profitRate}% for the first ${profittype}and the amt in the bank is
${totalAmountWithProfit}.`;
  console.log(amountDetails);
}

let accountHolderName: string;
let accountNumber: string;
let amountInAccount: number;
let profittype: ProfitType;

accountNumber = 'ICI0001';
accountHolderName = 'sunitha';
amountInAccount = 200_000;
profittype = ProfitType.yearly;

calculateBankProfit(
  accountNumber,
  accountHolderName,
  amountInAccount,
  profittype
);
