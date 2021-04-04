import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webpacConfig from '../webpack.config';

//inicializar paquetes
const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));


//routes
app.get('/', (req,res) => {
    res.send('Hello World')
});

app.get('/api',(req,res) =>{
    res.send("works")
});

//start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})