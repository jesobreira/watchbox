import Watchbox, { WatchboxInstance, WatchboxPlugin } from '../src/main'

describe('watchbox test', () => {

  let watchBox : WatchboxInstance

  it('creates a new instance', () => {
    watchBox = new Watchbox()
  })

  it('adds a plugin', () => {
    let plugin : WatchboxPlugin = {
      name: "TextSize",
      cb: (data: string) => {
        return data.length >= 3
      }
    }
    watchBox.use(plugin)
  })

  it('adds a new check', () => {
    watchBox.addCheck('test', async (data : string) => {
      return watchBox.plugins["TextSize"](data)
    })
  })

  it('checks', () => {
    watchBox.check('test', 'hello world').then(result => console.log("Result for 'hello world': "+result))
    watchBox.check('test', 'hi').then(result => console.log("Result for 'hi': "+result))
  })

})
