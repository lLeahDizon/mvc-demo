/**
 * @Author LemonYang
 * @Date 2020/11/24
 * @Description
 */
import EventBus from "./EventBus";

class Model extends EventBus {
  constructor(options) {
    super()
    const keys = ['data', 'create', 'update', 'delete', 'get']
    keys.forEach(key => this[key] = options[key])
  }

  create() {
    console?.error?.('你还没有实现 create')
  }

  update() {
    console?.error?.('你还没有实现 update')
  }

  delete() {
    console?.error?.('你还没有实现 delete')
  }

  get() {
    console?.error?.('你还没有实现 get')
  }
}

export default Model
