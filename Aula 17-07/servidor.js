const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
    
result = ""
app.get('/conta', (request, response) => {
   response.render ('rayane')
})

app.get('/soma', (request, response) => {
   soma = parseFloat(request.query.v1) + parseFloat(request.query.v2)
   response.render('rayane', {somaresult: soma})
})

app.get('/sub', (request, response) => {
   sub = parseFloat(request.query.v1) - parseFloat(request.query.v2)
   response.render('rayane', {subresult: sub})
})

app.get('/mult', (request, response) => {
   mult = parseFloat(request.query.v1) * parseFloat(request.query.v2)
   response.render('rayane', {multresult: mult}) 
})

app.get('/div', (request, response) => {
   div = parseFloat(request.query.v1) / parseFloat(request.query.v2)
   response.render('rayane', {divresult: div})
})
app.listen(8080)
    console.log('Servidor rodando em https://http://localhost:8080')
