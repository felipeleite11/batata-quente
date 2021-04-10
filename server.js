const express = require('express')
const { exec } = require('child_process')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }))

const port = 3002

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))

exec(`start chrome http://localhost:${port}`, (error, _, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`)
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`)
    }
    console.log("Abrindo no Chrome...")
})