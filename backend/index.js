const express= require("express");
const app= express();
const mongoose= require('mongoose');
const core = require('cors');
//******************************************Routers***********************************************************************
const productRoute = require('./routes/Product');
const userRoute=require('./routes/User')
const storeManagerRoute =require('./routes/StoreManager');
const productCategory=require('./routes/ProductCategory');


app.use(core());
app.use(express.static('public'));
app.use('/uploads',express.static('./uploads'));
app.use('/public', express.static('./Files'));

app.use('/product',productRoute);
app.use('/User',userRoute);
app.use('/storeManager',storeManagerRoute);
app.use('/productCategory',productCategory);
/*************************************************************************************************************************/


//*********************************************Connect to Db**************************************************************
var uri = process.env.DB_URL;
mongoose.connect(uri, {useNewUrlParser: true});
const mydb = mongoose.connection;
mydb.on('error', error => console.log(error));
mydb.once('open', () => {
    console.log("Db connected");
});

//************************************************************************************************************************



app.get('/',function (req,res) {
    res.send('hello');



});












app.listen(3001,function () {
    console.log("server is running");
});


