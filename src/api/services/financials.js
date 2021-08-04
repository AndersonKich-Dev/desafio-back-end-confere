const knex = require('../database')
const formatDate = require('../../helpers/formatData')



module.exports = {

    createReceived: async function(transactionType, installments, idTransaction) {
        if(transactionType === 'DEBIT'){
            await knex('financials').insert({
                status: 'RECEIVED',
                received_date: formatDate(installments),
                transaction_id: idTransaction
            })
        }
        else if(transactionType === 'CREDIT'){
            await knex('financials').insert({
                status: 'EXPECTED',
                received_date: formatDate(installments),
                transaction_id: idTransaction
            })
        }
        else if(transactionType === 'INSTALLMENT_CREDIT'){
            for(let i = 1; i <= installments; i++){
                await knex('financials').insert({
                    status: 'EXPECTED',
                    received_date: formatDate(i),
                    transaction_id: idTransaction
                })
            }
        }
        
    },  
    
}



