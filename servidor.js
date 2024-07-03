const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    
alert("YOU LOSE")
alert("CONTINUE?")
for (var i = 10; i>=1 ; i=i-1) {
  alert(i);
  if (i==1) {
    alert("GAME OVER")   
  }
}

 response.send('Goodbye World!')
})
app.listen(8080)
