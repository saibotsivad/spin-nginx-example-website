const fs = require('fs')
const express = require('express')

const argv = require('minimist')(process.argv.slice(2))
const config = JSON.parse(fs.readFileSync(argv.config, { encoding: 'utf8' }))

console.log('Serving...')
console.log(`- domain: ${argv.domain}`)
console.log(`- port: ${argv.port}`)
console.log(`- config: ${argv.config}`)

const app = express()
app.use(express.static('./public'))
app.listen(parseInt(argv.port, 10))
