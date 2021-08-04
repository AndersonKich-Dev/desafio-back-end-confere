const financials = require('../services/financials')
const transaction = require('../services/transaction')

module.exports = {
    async create(request, response, next){
        const data = request.body

        try {           
            const transactionId =  await transaction.create(data)
            financials.createReceived(data.type, data.installments, transactionId)
    
            return response.status(201).send()
        }
        catch(error){
            next(error)
        }
    },

    async filter(request, response, next){
        const { holder, type, maior_que, menor_que } = request.query

        let list = {}

        if(holder){
             list = await transaction.filterHolder(holder)
            return response.json({data:list})
        }
        if(type){
            list = await transaction.filterType(type)
        }

        if(maior_que){
            list = await transaction.filterHighestValue(maior_que)
        }
        if(menor_que){
            list = await transaction.filterLowerValue(menor_que)
        }
        
        return response.json({data:list})
    },

    async getAll(request, response, next){ 
        const list = await transaction.list()  
        return response.json({data:list})
    },



}















   

    





