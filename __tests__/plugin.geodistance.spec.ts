import Watchbox, { WatchboxInstance } from '../src/main'
import GeodistancePlugin from '../plugins/geodistance'

describe('geodistance test', () => {

  let watchBox : WatchboxInstance

  it('creates a new instance', () => {
    watchBox = new Watchbox()
  })

  it('adds geodistance native plugin', () => {
    watchBox.use(GeodistancePlugin)
  })

  it('adds a new check', () => {
    watchBox.addCheck('test', async (data : Array<Array<number>>) => {
      return watchBox.plugins["geodistance"](data)
    })
  })

  it('checks', () => {
    watchBox.check('test', [ [37.773972, -122.431297], [40.730610, -73.935242] ]).then(result => console.log("Distance between San Francisco and New York: "+result+"km"))
  })
})
