
const cashOut = require('../services/cashOutProcess')

module.exports = {

    async balance(request, response, next){
        
        try {           
            const list = await cashOut.balance()
            return response.json({data: list})
        }
        catch(error){
            next(error)
        }
    },

    async getAll(request, response, next){        
        try {           
            const list = await cashOut.getAll()
            return response.json({data: list})
        }
        catch(error){
            next(error)
        }
    },

    async filter(request, response, next){
        const { status, type } = request.query

        let list = {}

        if(status){
            list = await cashOut.filterStatus(status)
        }

        

        return response.json({data: list})
    }
    



}