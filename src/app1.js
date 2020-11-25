import "./app1.css";
import Vue from "vue";

const init = (el) => {
  new Vue({
    el: el,
    data: {n: parseFloat(localStorage.getItem("n"))},
    methods: {
      add() {
        this.n += 1
      },
      minus() {
        this.n -= 1
      },
      mul() {
        this.n *= 2
      },
      div() {
        this.n /= 2
      },
    },
    watch: {
      n: function () {
        localStorage.setItem('n', this.n)
      }
    },
    template: `
      <section>
      <div class="output">
        <div id="number">{{ n }}</div>
      </div>
      <div class="actions">
        <button @click="add">+1</button>
        <button @click="minus">-1</button>
        <button @click="mul">*2</button>
        <button @click="div">÷2</button>
      </div>
      </section>
    `
  })
}


export default init
