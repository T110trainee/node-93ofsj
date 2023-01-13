var ProfitType;
(function (ProfitType) {
    ProfitType["monthly"] = "month";
    ProfitType["quarterly"] = "quarter";
    ProfitType["semianually"] = "semester";
    ProfitType["yearly"] = "annual";
})(ProfitType || (ProfitType = {}));
function calculateBankProfit(accountNumber, accountHolderName, amountInAccount, profittype) {
    var profitRate = 0;
    var amountOfProfit;
    var totalAmountWithProfit;
    var amountDetails;
    switch (profittype) {
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
    amountDetails = "".concat(accountHolderName, " gets ").concat(amountOfProfit, "with the \nrate of").concat(profitRate, "% for the first ").concat(profittype, "and the amt in the bank is\n").concat(totalAmountWithProfit, ".");
    console.log(amountDetails);
}
var accountHolderName;
var accountNumber;
var amountInAccount;
var profittype;
accountNumber = 'ICI0001';
accountHolderName = 'sunitha';
amountInAccount = 200000;
profittype = ProfitType.yearly;
calculateBankProfit(accountNumber, accountHolderName, amountInAccount, profittype);
