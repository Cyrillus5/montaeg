const taeg = {
    // amount : 300000, amount borrowed in euros
    // loanPeriod : 240, term of the loan in months
    // nominalFee : 1.7, nominal rate in percent
    // guaranteeFees : 1500, guarantee fees in euros
    // fileBrokerageFees : 500, file and brokerage fees in euros
    // insuranceRate : 0.3, insurance rate in percent

    // cost of insurance
    getInsuranceCost : function (insuranceRate, amount, loanPeriod) {
        let result = ((insuranceRate * amount)/100 * loanPeriod) / 12;
        return result;
    },

    // calculation of monthly payments without insurance
    getMonthlyPaymentAmount : function (nominalFee, loanPeriod, amount) {
        let rate = nominalFee / 100;
        let power = -12 * (loanPeriod/12);
        let result = ( 
            (amount * (rate / 12))
            / 
            (1 - Math.pow((1 + (rate/12)), power
            ))
        );
        return Math.round(result);
    },

    // interest costs
    getInterestsCost : function (loanPeriod, amount, monthlyPaymentAmount) {
        // InterestsCost = 12 * (number of monthly payments / 12) * monthly payment amount - loan amount
        let result = 12 * (loanPeriod/12) * monthlyPaymentAmount - amount;
        return result;
    },   

    getTotalMonthlyPaymentAmount : function (amount, guaranteeFees, fileBrokerageFees, insuranceCost, interestsCost, loanPeriod){
        // calculation of overall monthly payments
        let totalMonthlyPaymentAmount = (amount + guaranteeFees + fileBrokerageFees + insuranceCost + interestsCost) / loanPeriod;
        return totalMonthlyPaymentAmount;
    },

    // taeg calculation
    getTaeg : function (loanPeriod, amount, totalMonthlyPaymentAmount) {
        // Use for to find taeg
        for (let i = 0; i < 5; i= i + 0.01){
            let rate = i / 100;
            let power = -12 * (loanPeriod/12);
            let result = ( 
            (amount * (rate / 12))
            / 
            (1 - Math.pow((1 + (rate/12)), power
            ))
            );
            // check if result is similar to totalMonthlyPaymentAmount
            console.log(result);
           if (result >= (totalMonthlyPaymentAmount)){
            return Math.round(i * 100) / 100;
           }
        };
    }

};

export default taeg;