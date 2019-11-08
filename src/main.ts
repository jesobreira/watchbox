interface AddCheckCallback {
  (data : any): Promise<number>
}

interface WatchboxPlugin {
  name: string
  cb: (data: any) => any
}

interface WatchboxInstance {
  use (plugin: WatchboxPlugin): void
  addCheck (name: string, cb: AddCheckCallback) : void
  check(name: string, data: any) : Promise<number>,
  plugins: object
}

class Watchbox implements WatchboxInstance {

  plugins : object = {}
  checks : object = {}

  constructor() {

  }

  use(plugin) : void {
    this.plugins[plugin.name] = plugin.cb
  }

  addCheck(name, cb) : void {
    this.checks[name] = cb
  }

  check(name, data) : Promise<any> {
    return this.checks[name](data)
  }
}

export default Watchbox
export { AddCheckCallback, WatchboxInstance, WatchboxPlugin }