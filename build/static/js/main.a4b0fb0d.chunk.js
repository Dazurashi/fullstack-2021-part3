(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),a=t(8),r=t(3),i=t(2),u=t(4),s=t.n(u),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},f=function(e){return s.a.post(d,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=t(0),m=function(e){var n=e.msg;if(null===n)return null;var t=n.notification,c=n.type;return Object(b.jsxs)("div",{className:c,children:[" ",t]})},p=function(e){var n=e.newName,t=e.newNum,c=e.handlePersonChange,o=e.handleNumChange,a=e.addPerson;return Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:n,onChange:c})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:t,onChange:o})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.name,t=e.num,c=e.deletePerson;return Object(b.jsxs)("li",{children:[n," ",t," ",Object(b.jsx)("button",{onClick:c,children:" delete"})]})},v=function(e){var n=e.persons,t=e.newFind,c=e.handleDeletePerson;return Object(b.jsx)("ul",{children:n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return Object(b.jsx)(O,{name:e.name,num:e.number,deletePerson:c(e.name,e.id)},e.id)}))})},g=function(e){var n=e.newFind,t=e.handleFindChange;return Object(b.jsxs)("div",{children:["filter shown with ",Object(b.jsx)("input",{value:n,onChange:t})]})},x=function(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)(""),u=Object(r.a)(o,2),s=u[0],d=u[1],O=Object(i.useState)(""),x=Object(r.a)(O,2),w=x[0],y=x[1],C=Object(i.useState)(""),N=Object(r.a)(C,2),P=N[0],F=N[1],D=Object(i.useState)(null),S=Object(r.a)(D,2),k=S[0],T=S[1];Object(i.useEffect)((function(){l().then((function(e){c(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{msg:k}),Object(b.jsx)(g,{newFind:P,handleFindChange:function(e){F(e.target.value)}}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(p,{newName:s,newNum:w,handlePersonChange:function(e){d(e.target.value)},handleNumChange:function(e){y(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:s,number:w};if(t.filter((function(e){return e.name===n.name})).length>0){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var o=t.find((function(e){return e.name===s}));h(o.id,Object(a.a)(Object(a.a)({},o),{},{number:w})).then((function(e){c(t.map((function(n){return n.name===s?e:n})))})).catch((function(e){T({notification:"Information of ".concat(n.name," has already been removed from server"),type:"error"}),console.log("Failed to update")})),c(t.concat(n)),T({notification:"Number of ".concat(n.name," has been updated"),type:"success"}),console.log("Number updated"),d(""),y(""),setTimeout((function(){T(null)}),5e3)}}else f(n).then((function(e){c(t.concat(e)),T({notification:"Added ".concat(n.name),type:"success"}),console.log("Added new"),d(""),y("")})).catch((function(e){T(e.response.data.error),console.log(e.response.data)})),setTimeout((function(){T(null)}),5e3)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(v,{persons:t,newFind:P,handleDeletePerson:function(e,n){return function(){window.confirm("Delete ".concat(e," ?"))&&(j(n).then((function(){c(t.filter((function(e){return e.id!==n}))),T({notification:"Deleted ".concat(e),type:"success"}),console.log("Deleted someone")})).catch((function(n){c(t.filter((function(n){return n.id!==e}))),T({notification:"Person named ".concat(e," has already been deleted"),type:"error"}),console.log("Name already deleted")})),setTimeout((function(){T(null)}),5e3))}}})]})};t(41);o.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a4b0fb0d.chunk.js.map