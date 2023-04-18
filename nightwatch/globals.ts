// @ts-nocheck
const waitOn = require('wait-on')
const { spawn } = require('child_process')

let serverPid = null
const serverPort = '5173'

module.exports = {
  before(done) {
    serverPid = spawn('npm', ['run', 'dev', '--', '--host'], {
      cwd: process.cwd(),
      stdio: 'inherit'
    }).pid

    waitOn({
      resources: [`http-get://localhost:${serverPort}`],
      verbose: true,
      headers: {
        accept: 'text/html'
      }
    }).then(() => {
      done()
    })
  },

  after() {
    if (serverPid) {
      process.kill(serverPid)
    }
  }
}
