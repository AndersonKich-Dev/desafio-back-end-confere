const knex = require('../database')
const formatDate = require('../../helpers/formatData')


module.exports = async(transactionType, installments, idTransaction) => {

    if(transactionType === 'DEBIT'){
        await knex('received').insert({
            status: 'RECEIVED',
            received_date: formatDate(installments),
            transaction_id: idTransaction
        })
    }
    else if(transactionType === 'CREDIT'){
        await knex('received').insert({
            status: 'EXPECTED',
            received_date: formatDate(installments),
            transaction_id: idTransaction
        })
    }
    else if(transactionType === 'INSTALLMENT_CREDIT'){
        for(let i = 1; i <= installments; i++){
            await knex('received').insert({
                status: 'EXPECTED',
                received_date: formatDate(i),
                transaction_id: idTransaction
            })
        }
    }
    
}



