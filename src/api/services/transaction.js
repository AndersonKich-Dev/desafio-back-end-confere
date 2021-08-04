const knex = require('../database')
const generateId = require('../../helpers/createId');
const see = require('../../helpers/see')

module.exports =  {

    create: async function(data){
        const { value, description, type, installments, card:{number, exipiry, cvv, holder}} = data
        const idCard = generateId();
        const idTransaction = generateId()
        const updatedValue = see.discountRate(value, type, installments)

        const cardFronDb = await knex('card')
            .where({holder: holder}).first()
            
        
        if(!cardFronDb){
            await knex('card').insert({
                id: idCard,
                number: number.slice(-4),
                exipiry,
                cvv,
                holder
            })  

                await knex('transaction').insert({
                id: idTransaction,
                card_id: idCard,
                value: updatedValue,
                description,
                type,
                installments,
            })  
        }else{
                await knex('transaction').insert({
                id: idTransaction,
                card_id: cardFronDb.id,
                value: updatedValue,
                description,
                type,
                installments,
            })  
        }

        return idTransaction
        },

        list: async function(){
        return  await knex('transaction').select('*') 
        },

        filterHolder: async function(holder){
                const obj = await knex('transaction')
                    .join('card', 'transaction.card_id', '=', 'card.id')
                    .where({'card.holder': holder})
                    .select('*')
            return obj
        },

        filterType: async function(type){
            const obj = await knex('transaction')
                .join('card', 'transaction.card_id', '=', 'card.id')
                .where({'transaction.type': type})
                .select('*')
            return obj
        },

        filterHighestValue: async function(value){
            const obj = await knex('transaction')
            .join('card', 'transaction.card_id', '=', 'card.id')
            .where('transaction.value', '>', value)
            .select('*')
        return obj
        },

        filterLowerValue: async function(value){
            const obj = await knex('transaction')
            .join('card', 'transaction.card_id', '=', 'card.id')
            .where('transaction.value', '<', value)
            .select('*')
        return obj
        }
        
    
}

