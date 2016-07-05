const fs = require('fs')
const request = require('request')
const test = require('tape')

const argv = require('minimist')(process.argv.slice(2))
const config = JSON.parse(fs.readFileSync(argv.config, { encoding: 'utf8' }))

console.log('Making sure server is running...')
console.log(`- domain: ${argv.domain}`)
console.log(`- port: ${argv.port}`)
console.log(`- config: ${argv.config}`)
console.log(`- configurable parameter: ${config.configurableParameter}`)

test('that the server is running', t => {
	t.plan(1)
	request(`http://localhost:${argv.port}/`, (err, response) => {
		t.equal(response.statusCode, 200, 'the page exists')
		t.end()
	})
})
