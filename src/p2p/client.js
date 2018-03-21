import grpc from 'grpc'
import path from 'path'
import config from '../config'

const {peer, network} = config
const protoPath = path.resolve(__dirname, './chain.proto')
const peerProto = grpc.load(protoPath).peer
const kClients = {}

export function isConnectedToPeer(ip, port) {
  const address = `${ip}:${port}`
  return !!kClients[address]
}

// remove a peer (i.e. when con't connect to the peer
export function removePeer(ip, port) {
  const address = `${ip}:${port}`
  const client = kClients[address]
  if (client) {
    client.close()
    delete kClients[address]
  }
}

// add a peer by ip & port
export async function connectPeer(ip, port) {
  return new Promise((resolve, reject) => {
    const address = `${ip}:${port}`
    console.log('will connect to peer: ', address)
    let client = kClients[address]
    if (!client) {
      // not added yet, so create the client and connect to server
      client = new peerProto.BlockChain(address, grpc.credentials.createInsecure())
      client.connect({ ip: peer.ip, port: peer.port, network }, (error, response) => {
        if (error) {
          console.error(error)
          client.close()
          reject(error)
        } else {
          console.log(response)
          kClients[address] = client
          resolve(client)
        }
      })
    } else {
      resolve(client)
    }
  })
}

export async function addPeer(node) {
  await connectPeer(node.ip, node.port)
}
