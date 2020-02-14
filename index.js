const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ ok: true })
})

const port = process.env.PORT || 5000

app.listen(
    port, 
    () => console.log(`\n*** Listening On Port ${port} *** \n`)
)