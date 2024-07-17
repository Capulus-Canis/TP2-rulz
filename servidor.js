const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    
result = ""
 response.render("formula",{result})
})
 app.post('/resultado',(request,response) =>{
    let x = parseFloat(request.body.x)
    let y = parseFloat(request.body.y)
    let result = x/y
    
    response.render('formula',{result})
    console.log(`${result}`)

     
app.listen(8080)
console.log('Servidor rodando em https://http://localhost:8080')
