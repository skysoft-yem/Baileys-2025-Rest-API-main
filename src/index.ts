import makeWASocket from './Socket'

export * from '../WAProto'
export * from './utils'
export * from './types'
export * from './Defaults'
export * from './WABinary'
export * from './WAM'
export * from './WAUSync'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
