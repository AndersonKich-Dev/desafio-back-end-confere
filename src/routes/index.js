const express = require('express')

const CashInController = require('../api/controllers/cashInController')
const CashOutController = require('../api/controllers/cashOutController')

const routes = express.Router()

routes.post('/transaction', CashInController.create)
routes.get('/transaction', CashInController.getAll)
routes.get('/transaction/filter', CashInController.filter)


routes.get('/cash_out', CashOutController.balance)
routes.get('/cash_out/get', CashOutController.getAll)
routes.get('/cash_out/filter', CashOutController.filter)





module.exports = routes