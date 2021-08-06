# desafio-back-end-confere

## 🔨 Tools

- [Node](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/docs/)

## 🚀 Running the Back End (server)


## Crie a tabela no postgres.
## A configuração de acesso ao  banco esta no arquivo knexfile.js na raiz do projeto.

## Instale as dependências, usando yarn.
```bash
 $ yarn
 $ npx knex migrate:latest
 $ npm install nodemon -D
 $ yarn start

 ```
 
 # Acessando as rota da aplicação!!!

$ Efetuar transaction, rota POST => http://localhost:3000/transaction

## Estrutura do post
$ No campo type a informação tem que ser passada com letra maiuscula poi criei esta informação em forma de ENUM

```bash
{
	"value": 100.00, // Valor da transação
	"description": "Bicicleta ZXY Aro 21", // Descrição da transação
	"type": "DEBIT", // Tipo de transação (`debit`, `credit`, `installment_credit`)
	"installments": null, // Número de parcelas, caso seja debito, passar `null`
	"card": {
		"number": "5200555500001234", // Número do cartão
		"expiry": "20/21", // Validade do cartão
		"cvv": "123", // Código de verificação do cartão
		"holder": "Fulano de tal" // Nome do portador do cartão
	}
}
 ```
 
 $ Recuperar transações rota => GET http://localhost:3000/transaction
 
 $ Recuperar transações rota => GET http://localhost:3000/transaction/filter
 
 $ Esta rota aceita filtros individuais:
 * holder       => nome do titular do cartão
 * type         => tipo de transação DEBIT, CREDIT ou INSTALLMENT_CREDIT
 * maior_que	=> lista em ordem do maior para menor valor de compra
 * menor_que	=> lista em ordem do menor para maior valor de compra

$ Recuperar lista os recebiveis rota => GET http://localhost:3000/cash_out/get

$ Recuperar transações rota => GET http://localhost:3000/cash_out/filter

$ Esta rota aceita filtros individuais, anbos devem ser passados em  letra MAIÚSCULA:
* type		=> tipo de transação DEBIT, CREDIT ou INSTALLMENT_CREDIT
* status	=> status EXPECTED, RECEIVED

$ Recupera o saldo do cliente rota => GET http://localhost:3000/cash_out

