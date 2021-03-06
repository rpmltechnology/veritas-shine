import os from 'os'
import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import config from 'config'

function getDataFolder() {
  const {HOME, APPDATA} = process.env
  return APPDATA || (process.platform === 'darwin' ? `${HOME}/Library/TQC` : `${HOME}/.TQC`)
}

function getPeersPath() {
  const filePath = getDataFolder()
  return path.join(filePath, '/peers.json')
}

function getPeersBlacklist() {
  const filePath = getDataFolder()
  const f = path.join(filePath, '/blacklist.json')
  try {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f)
      if (content.length > 0) {
        return JSON.stringify(content)
      }
    }
  } catch (e) {
    console.log(e)
  }
  return []
}

function saveBlacklistPeers(peers) {
  const filePath = getDataFolder()
  const f = path.join(filePath, '/blacklist.json')
  return fs.writeFileSync(f, JSON.stringify(peers))
}

/**
 * read peers from file
 * @return {Array}
 */
function readPeers() {
  const file = getPeersPath()
  try {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file)
      if (content.length > 0) {
        return JSON.parse(content)
      }
    }
  } catch (e) {
    console.log(e)
  }
  return []
}

/**
 * save peers into file (JSON format)
 * @param peers {Array}
 */
function savePeers(peers) {
  const file = getPeersPath()
  fs.writeFileSync(file, JSON.stringify(peers))
}

function getDBPath() {
  let folder = getDataFolder()
  folder = path.join(folder, '/data')
  if (!fs.existsSync(folder)) {
    if (!mkdirp.sync(folder)) {
      console.log('fail to make folder', folder)
    }
  }
  return folder
}

function getWalletPath() {
  let folder = getDataFolder()
  folder = path.join(folder, '/wallet')
  if (!fs.existsSync(folder)) {
    if (!mkdirp.sync(folder)) {
      console.log('fail to make folder', folder)
    }
  }
  return folder
}

function getWalletFiles() {
  const folder = getWalletPath()
  const result = []
  fs.readdirSync(folder)
    .forEach(name => {
      if (path.extname(name) === config.wallet.fileExtension) {
        const filePath = path.join(folder, name)
        result.push(filePath)
      }
    })
  return result
}

function createWalletFile(name, data) {
  if (name && data) {
    name = `wallet_${name}${config.wallet.fileExtension}`
    const folder = getWalletPath()
    const filePath = path.join(folder, name)
    return fs.writeFileSync(filePath, data)
  }
  return false
}

export default {
  getDBPath,
  getWalletPath,
  getPeersPath,
  readPeers,
  savePeers,
  saveBlacklistPeers,
  getWalletFiles,
  createWalletFile
}
