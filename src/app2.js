import "./app2.css";
import $ from "jquery";
import Model from "./base/Model";
import View from "./base/View";

const localKey = "app2.index";

const m = new Model({
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0,
  },
  update: function (data) {
    Object.assign(m.data, data)
    m.trigger('m:updated')
    localStorage.setItem(localKey, `${m.data.index}`)
  },
})

const init = (el) => {
  new View({
    el: el,
    data: m.data,
    html(index) {
      return `
    <div>
      <ol class="tab-bar">
        <li class="${index === 0 ? 'selected' : ''}" data-index="0"><span>1111</span></li>
        <li class="${index === 1 ? 'selected' : ''}" data-index="1"><span>2222</span></li>
      </ol>
      <ol class="tab-content">
        <li class="${index === 0 ? 'active' : ''}">内容1</li>
        <li class="${index === 1 ? 'active' : ''}">内容2</li>
      </ol>
    </div>
`
    },
    events: {
      'click .tab-bar li': 'x',
    },
    render(data) {
      const index = data.index
      if (this.el.children.length !== 0) this.el.empty()
      $(this.html(index)).appendTo(this.el)
    },
    x(e) {
      m.update({index: parseInt(e.currentTarget.dataset.index)})
    },
  })
}

export default init
