(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,function(t,e,n){t.exports=n(12)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(3),r=n.n(a),l=(n(10),n(1)),i=n(4),u="http://localhost:5000/api",s=(n(11),function(){var t=Object(o.useState)({todo:"",todosList:[],flip:!0,error:"",update:!1,currentTodoId:null}),e=Object(i.a)(t,2),n=e[0],a=e[1],r=n.todo,s=n.todosList,d=n.flip,f=n.error,p=n.update,m=n.currentTodoId;Object(o.useEffect)((function(){fetch("".concat(u,"/todos"),{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)})).then((function(t){a(Object(l.a)(Object(l.a)({},n),{},{todosList:t}))})).catch((function(t){return console.log(t)})),console.log(s)}),[d]);var b=function(t){console.log("TODO",t),function(t){return fetch("".concat(u,"/add"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({todo:t})}).then((function(t){return t})).catch((function(t){return console.log(t)}))}(t).then((function(t){console.log("DATA",t),t.error?(a(Object(l.a)(Object(l.a)({},n),{},{error:t.error})),console.log("ERROR",f)):(console.log("TODO ADDED"),a(Object(l.a)(Object(l.a)({},n),{},{flip:!d,todo:""})))}))},h=function(t){(function(t){return fetch("".concat(u,"/delete/").concat(t),{method:"DELETE"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))})(t).then((function(t){console.log("DELETE",t),a(Object(l.a)(Object(l.a)({},n),{},{flip:!d}))}))},E=function(t,e){(function(t,e){return fetch("".concat(u,"/update/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({todo:e})}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))})(t,e).then((function(t){t.error?(console.log("DATA.ERROR",f),a(Object(l.a)(Object(l.a)({},n),{},{error:t.error}))):a({flip:!d,todo:""})})).catch((function(t){return console.log("UPDATE ERROR",t)}))},O=function(t){(function(t){return fetch("".concat(u,"/mark/").concat(t),{method:"PUT"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))})(t).then((function(t){t.error?(a(Object(l.a)(Object(l.a)({},n),{},{error:t.error})),console.log("MARK COMPLETE",f)):a(Object(l.a)(Object(l.a)({},n),{},{flip:!d}))}))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header mb-3 mt-3"},c.a.createElement("h1",{className:"text-center text-light heading display-4"},"TODO APP"),c.a.createElement("span",null)),c.a.createElement("div",{className:"addTodos text-center mt-3 row"},c.a.createElement("div",{className:"input-group input-group-lg d-flex justify-content-center col-6 offset-3"},c.a.createElement("input",{type:"text",className:"form-control font-weight-bold w-75 todo-input text-dark",placeholder:"Enter Todo",onChange:function(t){a(Object(l.a)(Object(l.a)({},n),{},{todo:t.target.value}))},value:r}),c.a.createElement("div",{className:"input-group-append text-center"},c.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){p?(E(m,r),a(Object(l.a)(Object(l.a)({},n),{},{flip:!d,todo:"",update:!1,currentTodoId:null}))):b(r)}},p?"Update":"Add"),c.a.createElement("button",{className:"btn btn-primary ".concat(p?"":"d-none"),onClick:function(){a(Object(l.a)(Object(l.a)({},n),{},{todo:"",update:!1}))}},"Cancel")))),c.a.createElement("div",{className:"todosList d-flex justify-content-center text-center mt-3"},c.a.createElement("ul",{className:"list-group text-center w-50 list-style-none"},null===s||void 0===s?void 0:s.map((function(t){return c.a.createElement("li",{className:"list-group-item ".concat(t.isCompleted?"text-success":"text-primary"),key:t._id},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"float-left checkbox",onClick:function(){O(t._id)},checked:!!t.isCompleted}),c.a.createElement("label",{className:"form-check-label h4 todo"},t.todo),c.a.createElement("button",{className:"btn btn-danger float-right mx-1",onClick:function(){return h(t._id)},disabled:!!p},"Delete"),c.a.createElement("button",{className:"btn btn-info float-right mx-1",onClick:function(){a(Object(l.a)(Object(l.a)({},n),{},{todo:t.todo,update:!0,currentTodoId:t._id}))},disabled:!!p},"Edit")))})))))});r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.31a18a77.chunk.js.map