const express = require('express')
const adminRoutes = require('./routes/admin')
const errController = require('./controller/err')
const app = express();
const path = require('path')


app.set('view engine', 'ejs')
app.use(express.static(path.dirname('public')))

app.use(adminRoutes)
app.use(errController.getErr)
app.listen(3000)