const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    

 response.render("index")
})
app.listen(11037)
console.log('Servidor rodando em https://http://localhost:8080')