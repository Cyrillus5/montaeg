const taeg = {
    loan : 300000, // amount borrowed in euros
    loanPeriod : 240, // term of the loan in months
    nominalFee : 1.7, // nominal rate in percent
    guaranteeFees : 1500, // guarantee fees in euros
    fileBrokerageFees : 500, // file and brokerage fees in euros
    insuranceRate : 0.3, // insurance rate in percent

    // cost of insurance
    getInsuranceCost : function () {
        let result = ((taeg.insuranceRate * taeg.loan)/100 * taeg.loanPeriod) / 12;
        return result;
    },

    // calculation of monthly payments without insurance
    getMonthlyPaymentAmount : function () {
        let rate = taeg.nominalFee / 100;
        let power = -12 * (taeg.loanPeriod/12);
        let result = ( 
            (taeg.loan * (rate / 12))
            / 
            (1 - Math.pow((1 + (rate/12)), power
            ))
        );
        return Math.round(result);
    },

    // interest costs
    getInterestsCost : function () {
        // InterestsCost = 12 * (number of monthly payments / 12) * monthly payment amount - loan amount
        let result = 12 * (taeg.loanPeriod/12) * taeg.getMonthlyPaymentAmount() - taeg.loan;
        return result;
    },   

    // taeg calculation
    getTaeg : function () {
        // calculation of overall monthly payments
        let totalMonthlyPaymentAmount = (taeg.loan + taeg.guaranteeFees + taeg.fileBrokerageFees + taeg.getInsuranceCost() + taeg.getInterestsCost()) / taeg.loanPeriod;
        // Check the monthly payments
        console.log('Mensualité = ' + totalMonthlyPaymentAmount);
        // Use for to find taeg
        for (let i = 0; i < 5; i= i + 0.01){
            let rate = i / 100;
            let power = -12 * (taeg.loanPeriod/12);
            let result = ( 
            (taeg.loan * (rate / 12))
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

console.log("Coût de l'assurance = " + taeg.getInsuranceCost() + ' euros');
console.log("Montant des mensualités = " + taeg.getMonthlyPaymentAmount() + ' euros');
console.log("Montant des interets = " + taeg.getInterestsCost() + ' euros');
console.log("TAEG = " + taeg.getTaeg() + ' %');