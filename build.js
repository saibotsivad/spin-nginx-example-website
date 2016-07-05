const fs = require('fs')

const argv = require('minimist')(process.argv.slice(2))
const config = JSON.parse(fs.readFileSync(argv.config, { encoding: 'utf8' }))

console.log('Building...')
console.log(`- domain: ${argv.domain}`)
console.log(`- port: ${argv.port}`)
console.log(`- config: ${argv.config}`)
console.log(`- configurable parameter: ${config.configurableParameter}`)


const nginxConfiguration = `
server {
	listen 80;
	server_name ${argv.domain};
	location / {
		proxy_pass http://127.0.0.1:${argv.port};
	}
}
`

console.log('Writing file: .nginx.conf')
fs.writeFileSync('.nginx.conf', nginxConfiguration, { encoding: 'utf8' })
