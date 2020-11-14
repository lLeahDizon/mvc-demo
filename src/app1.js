import "./app1.css";
import $ from "jquery";

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n");
$number.text(n || 100);

$button1.on("click", () => {});
