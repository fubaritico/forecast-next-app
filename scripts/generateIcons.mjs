import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Handlebars from 'handlebars'

/* eslint-disable @typescript-eslint/naming-convention,no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { log, error } = console
const defaultRootName = 'unsorted'
const baseFolder = 'src/svg'
const generatedIconGroupFileSuffix = 'Icons.ts'
const allIconsFileName = 'allIcons.ts'

const removeExtension = (ext, str) => str.replace(`.${ext}`, '')
const removeString = (toBeRemoved, str) => str.replace(`${toBeRemoved}`, '')

const lowerFirstLetter = (str) => str.charAt(0).toLowerCase() + str.substring(1)

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.substring(1)

const getTemplate = (templateFile) =>
  fs.readFileSync(path.resolve(templateFile), {
    encoding: 'utf-8',
  })

Handlebars.registerHelper('toUpperCase', (str) => str.toUpperCase())

Handlebars.registerHelper('capitalizeFirstLetter', capitalizeFirstLetter)

Handlebars.registerHelper('removeExtension', removeExtension)

Handlebars.registerHelper('removeString', removeString)

Handlebars.registerHelper('removeUnderscores', (str) => str.replace('_', ''))

const generateIconsGroup = (icons, currentPath) => {
  const parsedName =
    currentPath !== ''
      ? currentPath.split('/').map((node) => capitalizeFirstLetter(node))
      : defaultRootName
  const iconGroupName =
    parsedName !== defaultRootName ? parsedName.join('_') : parsedName
  const iconGroupFile =
    parsedName !== defaultRootName ? parsedName.join('') : parsedName

  const template = getTemplate('scripts/iconsGroup.template.txt')
  const compiledTemplate = Handlebars.compile(template)
  const contents = compiledTemplate({ icons, path: currentPath, iconGroupName })

  fs.writeFile(
    `${baseFolder}/${lowerFirstLetter(
      iconGroupFile
    )}${generatedIconGroupFileSuffix}`,
    contents,
    (err) => {
      if (err) {
        return error(`Failed to store template: ${err.message}.`)
      }

      return log(`${lowerFirstLetter(iconGroupFile)}Icons.ts file generated!`)
    }
  )
}

const browseDirectories = (pathToDirectory) => {
  const projectPath = `${path.resolve(__dirname, '../')}/${baseFolder}/`
  const dirents = fs.readdirSync(pathToDirectory, { withFileTypes: true })
  const resolvedPath = path.resolve(pathToDirectory)

  const iconList = []

  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) {
      browseDirectories(path.resolve(pathToDirectory, dirent.name))
      return
    }

    const { name } = dirent

    if (name === '.DS_Store') {
      fs.rmSync(path.resolve(pathToDirectory, dirent.name))
      return
    }

    if (name.includes('.svg')) {
      iconList.push(name)
    }
  })

  const relativePath = resolvedPath.includes(projectPath)
    ? resolvedPath.replace(projectPath, '')
    : ''

  if (iconList.length > 0) generateIconsGroup(iconList, relativePath)
}

const getGeneratedIconsGroupFiles = () =>
  fs
    .readdirSync(baseFolder, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isFile() && dirent.name.includes(generatedIconGroupFileSuffix)
    )
    .map((dirent) => dirent.name)
    .filter((name) => name !== allIconsFileName)

const generateGetIconsFile = () => {
  const files = getGeneratedIconsGroupFiles()
  log('generateGetIconsFile - files: ', files)

  const template = getTemplate('scripts/iconsGroups.template.txt')
  const compiledTemplate = Handlebars.compile(template)
  const contents = compiledTemplate({ files })

  fs.writeFile(`${baseFolder}/${allIconsFileName}`, contents, (err) => {
    if (err) {
      return error(`Failed to store template: ${err.message}.`)
    }

    return log(`${allIconsFileName} file generated!`)
  })
}

browseDirectories(baseFolder)

generateGetIconsFile()
