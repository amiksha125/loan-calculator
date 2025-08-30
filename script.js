function calculateLoan(){
  loanAmount = document.getElementById('loan-amount').value;
//   console.log(loanAmount);
  interestRateValue = document.getElementById("interest-rate").value;
  monthsToPayValue = document.getElementById('months-to-pay').value
  //all aboveare implicitely declared global variable

  interest = (loanAmount * (interestRateValue * 0.01)) / monthsToPayValue;

  monthlyPayment = (loanAmount / monthsToPayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
    
}