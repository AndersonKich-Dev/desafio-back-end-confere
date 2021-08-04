const { 
    RATE_CREDIT,
    RATE_DEBIT,
    RATE_INSTALLMENT_LARGER,
    RATE_INSTALLMENT_SMALLER
} = require('../constants/taxas')

module.exports = {

    discountRate: function(value, type, installments) {
        
        if(type === 'DEBIT'){
            const rate = value * RATE_DEBIT / 100
            return parseFloat((value - rate).toFixed(2))
        }
        else if(type === 'CREDIT'){
            const rate = value * RATE_CREDIT / 100
            return parseFloat((value - rate).toFixed(2))
        }
        else if(type === 'INSTALLMENT_CREDIT' && installments >= 2){
            if(installments <= 6){
                const rate = value * RATE_INSTALLMENT_SMALLER / 100
                return parseFloat((value - rate).toFixed(2))
            }
            else if(installments <= 12){
                const rate = value * RATE_INSTALLMENT_LARGER / 100
                return parseFloat((value - rate).toFixed(2))
            }
        }
    },
}