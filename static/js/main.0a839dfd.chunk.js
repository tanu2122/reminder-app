(this["webpackJsonptask-reminder"]=this["webpackJsonptask-reminder"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(5),i=n.n(a),o=(n(18),n(3)),r=(n(19),n(12)),u=n(2),l=(n(8),n(1));u.a.configure();var d=function(e){var t=e.inputText,n=e.setInputText,s=e.inputTime,c=e.setInputTime,a=e.todos,i=e.setTodos;e.currentTime,e.time,e.task;setInterval((function(){(function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),s=e.getSeconds();return 1===t.toString().length&&(t="0"+t),1===n.toString().length&&(n="0"+n),1===s.toString().length&&(s="0"+s),t+":"+n+":"+s})()===s&&Object(u.a)("You have late taks! If done set as completed...",{type:"warning",autoClose:3e4,pauseOnHover:!1})}),1e3);return Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"next",children:Object(l.jsx)("input",{value:t,onChange:function(e){n(e.target.value)},type:"text",className:"todo-input",placeholder:"Task Name"})}),Object(l.jsx)("div",{className:"next",children:Object(l.jsx)("input",{value:s,onChange:function(e){c(e.target.value)},id:"appt-time",type:"time",name:"appt-time",step:"2",className:"todo-input"})}),Object(l.jsx)("div",{className:"next",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),i([].concat(Object(r.a)(a),[{text:t,Time:s,completed:!1,id:1e3*Math.random()}])),n(""),c(""),s=""},className:"todo-button",type:"submit",children:Object(l.jsx)("i",{className:"fas fa-plus-square"})})})]})};u.a.configure();var j=function(e){var t=e.text,n=e.Time,s=e.task,c=e.todos,a=e.setTodos;return Object(l.jsxs)("div",{className:"task",children:[Object(l.jsx)("li",{className:"task-item",children:t}),Object(l.jsx)("li",{className:"task-item",children:n}),Object(l.jsx)("button",{onClick:function(){a(c.filter((function(e){return e.id!==s.id}))),Object(u.a)("Task has been completed Successfully!",{type:"success",autoClose:3e4,pauseOnHover:!1})},className:"complete-btn",children:Object(l.jsx)("i",{className:"fas fa-check"})}),Object(l.jsx)("button",{onClick:function(){a(c.filter((function(e){return e.id!==s.id}))),Object(u.a)("Task has been deleted Successfully!",{type:"error",autoClose:3e4,pauseOnHover:!1})},className:"trash-btn",children:Object(l.jsx)("i",{className:"fas fa-trash"})})]})},m=function(e){var t=e.todos,n=e.setTodos,s=e.filterTodos;return Object(l.jsx)("div",{className:"task-container",children:Object(l.jsx)("ul",{className:"task-list",children:s.map((function(e){return Object(l.jsx)(j,{setTodos:n,todos:t,task:e,text:e.text,Time:e.Time},e.id)}))})})},b=n(9),f=n(10),O=n(13),p=n(11);u.a.configure();var h=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={currentTime:""},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.Set_Current_Time()}),1e3)}},{key:"Set_Current_Time",value:function(){this.setState({currentTime:(new Date).toLocaleTimeString("en-US",{hour12:!1})})}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{className:"currentTime",children:["Current Time: ",this.state.currentTime]})})}}]),n}(c.a.Component);var x=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],u=i[1],j=Object(s.useState)([]),b=Object(o.a)(j,2),f=b[0],O=b[1],p=Object(s.useState)("all"),x=Object(o.a)(p,2),v=x[0],T=x[1],g=Object(s.useState)([]),k=Object(o.a)(g,2),S=k[0],N=k[1];Object(s.useEffect)((function(){I()}),[]),Object(s.useEffect)((function(){C(),y()}),[f,v]);var C=function(){switch(v){case"completed":N(f.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(f.filter((function(e){return!1===e.completed})));break;default:N(f)}},y=function(){localStorage.setItem("todos",JSON.stringify(f))},I=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));O(e)}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Tasks Reminder"})}),Object(l.jsx)(h,{}),Object(l.jsx)(d,{inputText:n,todos:f,inputTime:r,setTodos:O,setInputText:c,setInputTime:u,setStatus:T}),Object(l.jsx)(m,{setTodos:O,todos:f,filterTodos:S})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.0a839dfd.chunk.js.map