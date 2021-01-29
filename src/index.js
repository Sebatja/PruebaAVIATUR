const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port' ,app.get('port'));
}

// setiings
app.set('port',4000);
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs');

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//Routes
app.use(require('./routes/index'));
//statis files
app.use(express.static(path.join(__dirname,'public')))
// listening the server
app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'))
})