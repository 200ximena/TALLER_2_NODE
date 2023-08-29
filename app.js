const express = require ('express');

const app = express()

const {infoCursos} = require('./datos/cursos.js');


// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express.');        
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

//PUERTO
//si no esta definido se le asigan el puerto 3000
const PUERTO = process.env.PORT || 3000;


//mostramos mensaje 
app.listen(PUERTO, () => {
    console.log('El servidor esta escuchando en el puerto 3000....');
});
