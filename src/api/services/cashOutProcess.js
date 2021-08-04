const knex = require('../database')

module.exports = {

    balance: async function() {
        const received = await knex('transaction')
            .join('financials', 'transaction.id', '=', 'financials.transaction_id')
            .where({'financials.status': 'RECEIVED'})
            .sum('transaction.value')
         
        const expected = await knex('transaction')
            .join('financials', 'transaction.id', '=', 'financials.transaction_id')
            .where({'financials.status': 'EXPECTED'})
            .sum('transaction.value')
                    
        return  {avaiable:parseFloat(received[0].sum).toFixed(2), expected:parseFloat(expected[0].sum).toFixed(2) }
    },

    getAll: async function(){
        const received = await knex('financials').select('*')
        return received
    },

    filterStatus: async function( status ){
        const obj = await knex('transaction')
        .join('card', 'transaction.card_id', '=', 'card.id')
        .select('transaction.*', 'card.number', 'card.expiry', 'card.cvv', 'card.holder')
        
        let resultado= obj

        let resultsPromise = obj.map(async item => {
        let atributo2 = await knex('financials')
                .where({'financials.status': status})
                .where({'financials.transaction_id': item.id})               
                .distinct()

            item.atributo2 = atributo2
        return item
        })

      resultado = await Promise.all(resultsPromise)
          
      return resultado.filter(a => a.atributo2.length >= 1)

    },

    filterType: async function( type ){
        const obj = await knex('transaction')
        .join('card', 'transaction.card_id', '=', 'card.id')
        .where({'transaction.type': type})
        .select('transaction.*', 'card.number', 'card.expiry', 'card.cvv', 'card.holder')
        
        let resultado= obj

        let resultsPromise = obj.map(async item => {
        let atributo2 = await knex('financials')
                .where({'financials.transaction_id': item.id})               
                .distinct()

            item.atributo2 = atributo2
        return item
        })

      resultado = await Promise.all(resultsPromise)
          
      return resultado.filter(a => a.atributo2.length >= 1)

    }
}





