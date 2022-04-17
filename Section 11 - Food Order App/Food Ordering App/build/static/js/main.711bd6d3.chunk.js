(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCardButton_button__1KLkF",icon:"HeaderCardButton_icon__1QA8p",badge:"HeaderCardButton_badge__d6oq0",bump:"HeaderCardButton_bump__2uebu"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/img7.610fc1b5.jpeg",l=n(13),d=n.n(l),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:o})]})},x=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(p,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"Food Banner"})})]})},h=n(15),_=n.n(h),f=function(){return Object(m.jsxs)("section",{className:_.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),N=n(17),g=n.n(N),A=function(e){return Object(m.jsx)("div",{className:g.a.card,children:e.children})},y=n(10),I=n.n(y),w=n(18),M=n.n(w),k=n(2),F=n(19),B=n.n(F),H=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:B.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(k.a)({ref:t},e.input))]})})),S=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter valid amount (1-5)"})]})},D=function(e){var t=Object(r.useContext)(O),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:I.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:I.a.description,children:e.description}),Object(m.jsx)("div",{className:I.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(S,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(){var e=E.map((function(e){return Object(m.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(A,{children:Object(m.jsx)("ul",{children:e})})})},P=function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(R,{})]})},T=n(4),z=n.n(T),Q=n(11),U=n.n(Q),V=function(e){return Object(m.jsx)("div",{className:U.a.backdrop,onClick:e.onClose})},q=function(e){return Object(m.jsx)("div",{className:U.a.modal,children:Object(m.jsx)("div",{className:U.a.content,children:e.children})})},J=document.getElementById("overlays"),L=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(m.jsx)(V,{onClose:e.onClose}),J),c.a.createPortal(Object(m.jsx)(q,{children:e.children}),J)]})},Y=n(5),X=n.n(Y),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:X.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:X.a.summary,children:[Object(m.jsx)("span",{className:X.a.price,children:t}),Object(m.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=function(e){var t=Object(r.useContext)(O),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},s=Object(m.jsx)("ul",{className:z.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(m.jsxs)(L,{onClose:e.onClose,children:[s,Object(m.jsxs)("div",{className:z.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:z.a.actions,children:[Object(m.jsx)("button",{className:z.a["button-alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:z.a.button,children:"Order"})]})]})},K=n(14),Z={items:[],totalAmount:0},W=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(k.a)(Object(k.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(K.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(K.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return Z},ee=function(e){var t=Object(r.useReducer)(W,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(G,{onClose:function(){a(!1)}}),Object(m.jsx)(x,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(P,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.711bd6d3.chunk.js.map