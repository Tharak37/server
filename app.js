// _dirname path of file
// _filename filename
// require - function to use modules (commonJS) 
// module  - info about current module
// process - info about env
const orders = require('./orderController')
const users = require('./userController')
const express = require('express');
// const db = require('./db');

var app = express();

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

app.listen(3000, () => {
   console.log('server port running in 3000');
});


