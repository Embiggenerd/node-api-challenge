const express = require('express')

const projectRoutes = require('./routes/projectRoutes')
const actionRoutes = require('./routes/actionRoutes')

const app = express()

app.use(express.json())
app.use('/projects', projectRoutes)
app.use('/actions', actionRoutes)

app.get('/', (req, res) => {
    res.json({ ok: true })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.httpStatusCode || 500).json({
        message: err.message
    })
})

const port = process.env.PORT || 5000

app.listen(
    port, 
    () => console.log(`\n*** Listening On Port ${port} *** \n`)
)