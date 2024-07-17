const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    
result = ""
 response.render("rayane",{result})
})
 app.post('/resultado',(request,response) =>{
    response.render('rayane',{result})
    console.log(`${result}`)
 })
     
app.listen(8081)