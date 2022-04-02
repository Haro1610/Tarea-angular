const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const socketIo = require('socket.io');
//const MongoClient = require('mongodb').MongoClient; importar monogodb
//const {MongoClient} = require('mongodb'); //importar mongodb

dotenv.config();

const Database = require('./src/core/Database/database.js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const apiRoutes = require('./src/routes');


const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api',apiRoutes);



const swaggerOptions ={
    swaggerDefinition:{
        swagger: '2.0',
        info:{
            title: 'ITESO Chat API',
            description: 'A live chat web application',
            version: '1.0.0',
            servers: ['http://localhost:'+port]
        }
    },
    apis:['./src/modules/**/*.routes.js']

}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/assets',express.static(path.join(__dirname,'public')));// el metodo use remplaza la ruta de public por la express
// para el usuario final evitando que vea de forma directa la estructura directa de como esta construido el proyecto esto se hacer por razones de seguridad




app.use('/',(req,res,next)=>{
    console.log('paso por aquí')
    next();
})
// cada vez que se haga una solidictud de informacion este metodo imprime en la consola que se realizo un consulta
// y le permite al la solicitud seguir su camino

app.get('/',(res,req)=>{

    const indexPath = path.join(__dirname,'src','index.html');
    
    req.sendFile(indexPath); 

})
// el metodo cosntruye la ruta de los archivos, demanera automatica indicando solamente los arhvios que se deven mostrar y
//la estructura de carpetas que se esta utilizando, el metodo se acopla al sistema operativo para construir la ruta para evitar posbiles errores

app.get('/test',(req,res)=>{
    //console.log(__dirname);// ruta relativa 
    //const indexPath = path.join(__dirname,'src','index.html','public','app.css');
    const indexPath = path.join(__dirname,'src','index.html');
    //res.sendFile(__dirname + '/src/index.html'); armar la ruta de forma manual para que el index se capaz de llamar lso arhivos necesarios 
    //console.log('api works');
    //res.send('api works! ');
    res.sendFile(indexPath); // esta línea permite retornar el archivo que esta espesficado en la ruta de arriba
})


Database.connect().then(() =>{
    const server = app.listen(port, function () {
        console.log(`app is running in ${port} ...`)
    });
    //un mensaje que nos permite saber que el servidor esta funcionado de forma correcta
    const io = socketIo(server,{
        cors:{
            origin: 'http://localhost:4200',
            methods: ['GET','POST','PUT','DELETE'],
            allowHeaders:['Authorization'],
            credentials: true
        }
    });

    io.on('connection',socket =>{
        console.log('Alguien se coneceto!');
        socket.on('newMessage',data =>{
            console.log('Hay nuevo mensaje: ',data.message);
            socket.broadcast.emit('receiveMessages', data);

        })
    })

});



