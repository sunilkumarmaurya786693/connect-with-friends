const express= require('express')
const app = express();

const PORT= 5000


//middleware are those who execute before any incoming request and can modify it before reaches to actual route handler.
const customerMiddleware= (req,res,next) => {
    console.log('middleware executed');
    next();
}

// app.use(customerMiddleware); //it will use for all routes. and this is a middleware

app.get('/', (req,res) => {
    res.send('hello world');
})

app.get('/about',customerMiddleware, (req,res) => {  //middleware execute only for /abour routes
    res.send('this is about page');
})


app.listen(PORT, (req,res) => {
    console.log(`server is running on ${PORT}`);
});