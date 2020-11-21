import "./app1.css";
import $ from "jquery";

const m = {
  data: {
    n: parseInt(localStorage.getItem("n"))
  }
}

const v = {
  el: null,
  html: `
  <div>
    <div class="output">
      <div id="number">{{n}}</div>
    </div>
    <div class="actions">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="mul2">*2</button>
      <button id="divide2">÷2</button>
    </div>
  </div>
`,
  init(container) {
    v.container = $(container)
    v.render()
  },
  render() {
    if (v.el === null) {
      v.el = $(v.html.replace('{{n}}', m.data.n)).appendTo(v.container)
    } else {
      const newEl = $(v.html.replace('{{n}}', m.data.n))
      v.el.replaceWith(newEl)
      v.el = newEl
    }
  }
}

const c = {
  init(container) {
    v.init(container)
    c.ui = {
      button1: $("#add1"),
      button2: $("#minus1"),
      button3: $("#mul2"),
      button4: $("#divide2"),
      number: $("#number")
    }
    c.bindEvents()
  },
  bindEvents() {
    v.container.on('click', '#add1', () => {
      m.data.n += 1
      v.render()
    })
    v.container.on('click', '#minus1', () => {
      m.data.n -= 1
      v.render()
    })
    v.container.on('click', '#mul2', () => {
      m.data.n *= 2
      v.render()
    })
    v.container.on('click', '#divide2', () => {
      m.data.n /= 2
      v.render()
    })
  }
}

export default c
