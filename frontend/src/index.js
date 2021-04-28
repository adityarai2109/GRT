import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// $(function () {
//   $(".intro").addClass("go");
//   $(".reload").click(function () {
//     $(".intro")
//       .removeClass("go")
//       .delay(200)
//       .queue(function (next) {
//         $(".intro").addClass("go");
//         next();
//       });
//   });
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
