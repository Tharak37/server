// _dirname path of file
// _filename filename
// require - function to use modules (commonJS) 
// module  - info about current module
// process - info about env
const orders = require('./orderController')
const users = require('./userController')
const express = require('express');
const PORT = process.env.PORT || 3030;
// const db = require('./db');
var bodyParser = require('body-parser')
// // create application/json parser
// var jsonParser = bodyParser.json()
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors());    
app.use(cookieParser());
app.use("/orders", orders)
app.use("/users", users)

app.get("/", (req, res) => {
   res.send(`<h2>Welcome AHS DataBase</h2>
    <ul>
       <li>
    <a href="/users">Users</a>
    </li>
       <li>
    <a href="/orders">Orders</a>
    </li>
       <li>
    <a href="/users/id:1">Users With ID</a>
    </li>
       <li>
    <a href="/orders/id:1">Orders With ID</a>
    </li>
    </ul>
    `);
})

// console.log(__dirname, __filename);
// console.log(users, orders);

app.listen(PORT, () => {
   console.log(`server port running in: ${PORT}`);
});


