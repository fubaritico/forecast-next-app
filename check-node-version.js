const semver = require('semver')
const project = require('./package.json')

console.log('project', project.engines)

const version = project.engines.node
if (!semver.satisfies(process.version, version)) {
  console.log(
    `Required node version ${version} not satisfied with current version ${process.version}.`
  )
  process.exit(1)
}
