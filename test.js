const fs = require('fs')
const test = require('tape')

const argv = require('minimist')(process.argv.slice(2))
const config = JSON.parse(fs.readFileSync(argv.config, { encoding: 'utf8' }))

console.log('Testing...')
console.log(`- domain: ${argv.domain}`)
console.log(`- port: ${argv.port}`)
console.log(`- config: ${argv.config}`)

test('running some test', t => {
	t.ok(true, 'with passing tests')
	t.end()
})
