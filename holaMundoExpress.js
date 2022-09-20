const express = require('express')  // en git Bash -> npm install --save express para instalar la dependencia
const verInfo = require('./middlewares/verInfo')
const hbs = require('hbs')
const getRazas = require('./perros/getDatosPerros')
const app = express()
const port = 3000

const mostrarBuscador = async () => {
    const razas = await getRazas();
    console.log(razas)
    app.get('/buscar',(req, res) => {
        res.render('vistaBuscador.hbs', {razas})
      })    
} 

app.use(express.static('public'));

app.set('view engine' , 'hbs')
hbs.registerPartials('./views/partials')

app.use(verInfo)

app.get('/',(req, res) => {
  res.render('home.hbs')
})

mostrarBuscador()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

