(this["webpackJsonpformula-editor"]=this["webpackJsonpformula-editor"]||[]).push([[0],{104:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),r=n(10),a=n.n(r),o=(n(97),n(12)),c=n(147),u=n(141),l=n(11),h=n(26),d=function t(e,n,i){Object(l.a)(this,t),this.type=void 0,this.text=void 0,this.pos=void 0,this.type=e,this.text=n,this.pos=i},f=function t(e,n){Object(l.a)(this,t),this.name=void 0,this.regexp=void 0,this.name=e,this.regexp=n},j={NUMBER:new f("NUMBER","[0-9]*"),VARIABLE:new f("VARIABLE","([a-z][0-9]?)*"),OPERAND:new f("OPERAND","\\[\\w*\\]"),FUNCTION:new f("FUNCTION","[A-Z]*\\(.*\\)"),SEMICOLON:new f("SEMICOLON",";"),SPACE:new f("SPACE","[ \\n\\t\\r]"),ASSIGN:new f("ASSIGN","\\="),RETURN:new f("RETURN","RETURN"),PLUS:new f("PLUS","\\+"),MINUS:new f("MINUS","\\-"),DIVIDE:new f("DIVIDE","\\/"),MULTIPLY:new f("MULTIPLY","\\*"),LPAR:new f("LPAR","\\("),RPAR:new f("RPAR","\\)")},O=function(){function t(e){Object(l.a)(this,t),this.code=void 0,this.pos=0,this.tokenList=[],this.code=e}return Object(h.a)(t,[{key:"lexAnalisys",value:function(){for(;this.nextToken(););return this.tokenList=this.tokenList.filter((function(t){return t.type.name!==j.SPACE.name})),this.tokenList}},{key:"nextToken",value:function(){if(this.pos>=this.code.length)return!1;for(var t=Object.values(j),e=0;e<t.length;e++){var n=t[e],i=new RegExp("^"+n.regexp),s=this.code.substr(this.pos).match(i);if(s&&s[0]){var r=new d(n,s[0],this.pos);return this.pos+=s[0].length,this.tokenList.push(r),!0}}throw new Error("\u041d\u0432 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 ".concat(this.pos," \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}}]),t}(),b=n(24),p=n(22),g=function t(){Object(l.a)(this,t)},v=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).codeStrings=[],t}return Object(h.a)(n,[{key:"addNode",value:function(t){this.codeStrings.push(t)}}]),n}(g),x=function t(e){Object(l.a)(this,t),this.number=void 0,this.number=e},m=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this)).variable=void 0,i.variable=t,i}return n}(g),R=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this)).operand=void 0,i.operand=t,i}return n}(g),_=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(t,i,s){var r;return Object(l.a)(this,n),(r=e.call(this)).operator=void 0,r.leftNode=void 0,r.rightNode=void 0,r.operator=t,r.leftNode=i,r.rightNode=s,r}return n}(g),y=function t(e,n){Object(l.a)(this,t),this.operator=void 0,this.operand=void 0,this.operator=e,this.operand=n},N=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this)).function_=void 0,i.function_=t,i}return n}(g),E=function(){function t(e){Object(l.a)(this,t),this.tokens=void 0,this.pos=0,this.scope={},this.tokens=e}return Object(h.a)(t,[{key:"match",value:function(){if(this.pos<this.tokens.length){for(var t=this.tokens[this.pos],e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];if(n.find((function(e){return e.name===t.type.name})))return this.pos+=1,t}return null}},{key:"require",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=this.match.apply(this,e);if(!i)throw new Error("\u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 ".concat(this.pos," \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f ").concat(e[0].name));return i}},{key:"parseVariableOrNumberOrOperand",value:function(){var t=this.match(j.NUMBER);if(null!=t)return new x(t);var e=this.match(j.VARIABLE);if(null!=e)return new m(e);var n=this.match(j.OPERAND);if(null!=n)return new R(n);var i=this.match(j.FUNCTION);if(null!=i)return new N(i);throw new Error("\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f (\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f/\u0447\u0438\u0441\u043b\u043e/\u043e\u043f\u0435\u0440\u0430\u043d\u0434) \u043d\u0430 ".concat(this.pos," \u043f\u043e\u0437\u0438\u0446\u0438\u0438"))}},{key:"parseReturn",value:function(){var t=this.match(j.RETURN);if(null!=t)return new y(t,this.parseFormula());throw new Error("\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0443\u043d\u0430\u0440\u043d\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 RETURN \u043d\u0430 ".concat(this.pos," \u043f\u043e\u0437\u0438\u0446\u0438\u0438"))}},{key:"parseParentheses",value:function(){if(null!=this.match(j.LPAR)){var t=this.parseFormula();return this.require(j.RPAR),t}return this.parseVariableOrNumberOrOperand()}},{key:"parseFormula",value:function(){for(var t=this.parseParentheses(),e=this.match(j.MINUS,j.PLUS,j.DIVIDE,j.MULTIPLY);null!=e;){var n=this.parseParentheses();t=new _(e,t,n),e=this.match(j.MINUS,j.PLUS,j.DIVIDE,j.MULTIPLY)}return t}},{key:"parseExpression",value:function(){if(null==this.match(j.VARIABLE))return this.parseReturn();this.pos-=1;var t=this.parseVariableOrNumberOrOperand(),e=this.match(j.ASSIGN);if(null!=e){var n=this.parseFormula();return new _(e,t,n)}throw new Error("\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 ".concat(this.pos))}},{key:"parseCode",value:function(){for(var t=new v;this.pos<this.tokens.length;){var e=this.parseExpression();this.require(j.SEMICOLON),t.addNode(e)}return t}}]),t}(),A=n(146),w=n(136),S=n(138),C=n(139),T=n(140),k=n(78),I=n.n(k),L=n(47),P=function(){return Object(L.b)()},U=L.c,F=n(57),M=Object(F.b)({name:"code",initialState:{value:"",index:0,brace:!1,update_tree:!1},reducers:{setCode:function(t,e){t.value=e.payload},setCurrentIndex:function(t,e){t.index=e.payload},toggleBrace:function(t){t.brace=!t.brace},updateTree:function(t){t.update_tree=!t.update_tree}}}),D=M.actions,V=D.setCode,B=D.setCurrentIndex,z=D.toggleBrace,G=D.updateTree,q=function(t){return t.code.value},H=function(t){return t.code.index},Y=function(t){return t.code.brace},J=function(t){return t.code.update_tree},W=M.reducer,X=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(l.a)(this,t),this.type=void 0,this.index=void 0,this.value=void 0,this.left=void 0,this.right=void 0,this.args=void 0,this.add_nodes=void 0,this.user_input=void 0,this.index=e,this.type="OPERAND",this.value="",this.left=null,this.right=null,this.args=[],this.user_input=!1,this.add_nodes=!1}return Object(h.a)(t,[{key:"setValue",value:function(t){this.value=t}},{key:"addArguments",value:function(e){for(;e>0;)t.count++,this.args.push(new t(t.count)),e--}},{key:"setLeft",value:function(){t.count++,this.left=new t(t.count)}},{key:"setRight",value:function(){t.count++,this.right=new t(t.count)}}]),t}();X.count=0;var Z=new(function(){function t(){Object(l.a)(this,t),this.root=new X}return Object(h.a)(t,[{key:"find",value:function(t){return this.root.index===t?this.root:"OPERAND"===this.root.type||"OPERATOR"===this.root.type?this._find(this.root.left,t)||this._find(this.root.right,t):"FUNCTION"===this.root.type?this._find(this.root.args[0],t)||this._find(this.root.args[1],t)||this._find(this.root.args[2],t)||this._find(this.root.args[3],t)||this._find(this.root.args[4],t)||this._find(this.root.args[5],t)||this._find(this.root.args[6],t)||this._find(this.root.args[7],t)||this._find(this.root.args[8],t)||this._find(this.root.args[9],t):null}},{key:"_find",value:function(t,e){if(t)return t.index===e?t:"OPERAND"===t.type||"OPERATOR"===t.type?this._find(t.left,e)||this._find(t.right,e):"FUNCTION"===t.type?this._find(t.args[0],e)||this._find(t.args[1],e)||this._find(t.args[2],e)||this._find(t.args[3],e)||this._find(t.args[4],e)||this._find(t.args[5],e)||this._find(t.args[6],e)||this._find(t.args[7],e)||this._find(t.args[8],e)||this._find(t.args[9],e):null}},{key:"delete",value:function(t){if(this.root.index===t)this.root=new X;else if(this.root.left&&this.root.left.index===t)this.root.left=new X(this.root.left.index);else{if(!this.root.right||this.root.right.index!==t){if("FUNCTION"===this.root.type){for(var e=0;e<this.root.args.length;e++)this.root.args[e].index===t&&(this.root.args[e]=new X(this.root.args[e].index));return this._delete(this.root.args[0],t)||this._delete(this.root.args[1],t)||this._delete(this.root.args[2],t)||this._delete(this.root.args[3],t)||this._delete(this.root.args[4],t)||this._delete(this.root.args[5],t)||this._delete(this.root.args[6],t)||this._delete(this.root.args[7],t)||this._delete(this.root.args[8],t)||this._delete(this.root.args[9],t)}return this._delete(this.root.left,t)||this._delete(this.root.right,t)}this.root.right=new X(this.root.right.index)}}},{key:"_delete",value:function(t,e){if(t)if(t.index===e)t=new X(t.index);else if(t.left&&t.left.index===e)t.left=new X(t.left.index);else{if(!t.right||t.right.index!==e){if("FUNCTION"===t.type){for(var n=0;n<t.args.length;n++)t.args[n].index===e&&(t.args[n]=new X(t.args[n].index));return this._delete(t.args[0],e)||this._delete(t.args[1],e)||this._delete(t.args[2],e)||this._delete(t.args[3],e)||this._delete(t.args[4],e)||this._delete(t.args[5],e)||this._delete(t.args[6],e)||this._delete(t.args[7],e)||this._delete(t.args[8],e)||this._delete(t.args[9],e)}return this._delete(t.left,e)||this._delete(t.right,e)}t.right=new X(t.right.index)}}},{key:"swap_with_left",value:function(t){var e=this.find(t),n=e.left;if(e){if("OPERATOR"!==e.type||"OPERATOR"!==n.type)return!1;var i=[n.value,e.value];e.value=i[0],n.value=i[1]}return!1}},{key:"swap_with_right",value:function(t){var e=this.find(t),n=e.right;if(e){if("OPERATOR"!==e.type||"OPERATOR"!==n.type)return!1;var i=[n.value,e.value];e.value=i[0],n.value=i[1]}return!1}}]),t}()),K=n(134),Q=n(152),$=Object(K.a)((function(t){return Object(Q.a)({root:{width:"100%",backgroundColor:t.palette.background.paper}})})),tt={MEASURES:["MEASURE_1","MEASURE_2","MEASURE_3","MEASURE_4","MEASURE_5","MEASURE_6","MEASURE_7","MEASURE_8","MEASURE_9","MEASURE_10"],FACTS:["FACT_1","FACT_2","FACT_3","FACT_4","FACT_5","FACT_6","FACT_7","FACT_8","FACT_9","FACT_10"],VARIABLES:["DISTANCE","LENGHT","HEIGHT","WEIGHT","LATITUDE","REPLICAS","CENTROID","BLOB","MAX_VAL","MIN_VAL","PI"],FUNCTIONS:["curent_date","current_time","current_timestamp","now","concat","cahr_length","random","coalesce","between","in","not_in","like","ilike","startwith","endwith","contains","power","ln","exp","sqrt","abs","ceil","floor"],AGRGUMENTS:[0,0,0,0,1,1,0,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1],ADD_NODES:[0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0]},et=n(2);function nt(t){var e=P(),n=U(H),i=$(),r=s.a.useState(1),a=Object(o.a)(r,2),c=a[0],u=a[1];return Object(et.jsx)("div",{className:i.root,children:Object(et.jsx)(w.a,{component:"nav",children:t.items.map((function(i,s){return Object(et.jsxs)(S.a,{button:!0,selected:c===s,onClick:function(r){return function(i,s,r){u(s),e(V(r));var a=Z.find(n);a&&(a.value=r,a.type="functions"===t.type?"FUNCTION":"OPERAND",a.left=null,a.right=null,a.user_input=!1,"functions"===t.type&&a.args.length!==tt.AGRGUMENTS[s]&&(a.args=[],a.addArguments(tt.AGRGUMENTS[s]),a.add_nodes=Boolean(tt.ADD_NODES[s])),e(G()))}(0,s,i)},children:[Object(et.jsx)(C.a,{children:Object(et.jsx)(I.a,{})}),Object(et.jsx)(T.a,{primary:i})]},s)}))})})}var it=n(143),st=["FACTS","MEASURES","VARIABLES"],rt=function(t){var e=t.func,n=t.pos,i=t.left,s=t.top;return Object(et.jsxs)(c.a,{width:"270px",position:n,left:i,top:s,children:[Object(et.jsx)(A.a,{label:"\u041f\u043e\u0438\u0441\u043a",style:{width:"90%",margin:10}}),Object(et.jsx)(c.a,{overflow:"auto",maxHeight:"300px",children:e?Object(et.jsx)(nt,{items:tt.FUNCTIONS}):st.map((function(t){return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{items:tt[t]}),Object(et.jsx)(it.a,{})]})}))})]})},at=n(145),ot=n(148),ct=function(){var t=U(q),e=P(),n=Object(i.useState)(!1),s=Object(o.a)(n,2),r=s[0],a=s[1],l=Object(i.useState)(!1),h=Object(o.a)(l,2),d=h[0],f=h[1],j=Object(i.useState)(""),b=Object(o.a)(j,2),p=b[0],g=b[1];return Object(i.useEffect)((function(){try{var e=new O(t);e.lexAnalisys(),console.log(e.tokenList);var n=new E(e.tokenList).parseCode();console.log(n),g("")}catch(i){console.log(i.message),g(i.message)}}),[t]),Object(et.jsxs)(c.a,{width:"100%",display:"flex",height:"600px",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[d&&Object(et.jsx)(rt,{func:!0,pos:"absolute",left:"50px",top:"50px"}),r&&Object(et.jsx)(rt,{pos:"absolute",left:"50px",top:"450px"}),Object(et.jsxs)(c.a,{width:"60%",display:"flex",flexDirection:"column",position:"relative",children:[Object(et.jsx)(u.a,{style:{outline:"none",width:"100%",height:"300px",fontSize:20,padding:20},value:t,onChange:function(t){e(V(t.target.value))}}),p&&Object(et.jsx)(ot.a,{style:{position:"absolute",bottom:0,width:"101%"},severity:"error",children:p})]}),Object(et.jsxs)(c.a,{display:"flex",children:[Object(et.jsx)(at.a,{onClick:function(){return f(!d)},children:"Func Search"}),Object(et.jsx)(at.a,{onClick:function(){return a(!r)},children:"Global Search"})]})]})},ut=n(150),lt=new Map;lt.set("functions","\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),lt.set("variables","\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),lt.set("facts","\u0424\u0430\u043a\u0442\u044b"),lt.set("measures","\u041c\u0435\u0440\u044b");var ht=Object(K.a)((function(){return{text:{width:"90%",margin:10},wrapper:{width:"100%",overflow:"hidden"},box:{maxHeight:300,overflow:"auto",width:"100%"}}})),dt=function(t){var e=t.items,n=t.type,s=Object(i.useState)(""),r=Object(o.a)(s,2),a=r[0],u=r[1],l=Object(i.useState)(e),h=Object(o.a)(l,2),d=h[0],f=h[1],j=ht();return Object(i.useEffect)((function(){f((function(){return e.filter((function(t){return t.includes(a)}))}))}),[a]),Object(et.jsxs)(c.a,{className:j.wrapper,children:[Object(et.jsx)(A.a,{label:lt.get(n),className:j.text,value:a,onChange:function(t){return u(t.target.value)}}),Object(et.jsx)(c.a,{className:j.box,children:Object(et.jsx)(nt,{items:d,type:n})})]})},ft=n(56),jt=n.n(ft),Ot=n(144),bt=n(79),pt=n.n(bt),gt=n(68),vt=n.n(gt),xt=Object(K.a)((function(){return{list:{width:250},fullList:{width:"auto"},btn:{margin:10}}})),mt=function(t){var e=t.setNode,n=P(),s=U(H),r=Z.find(s),a=Object(i.useState)(r.user_input?r.value:""),u=Object(o.a)(a,2),l=u[0],h=u[1];return Object(et.jsxs)(c.a,{display:"flex",children:[Object(et.jsx)(A.a,{style:{width:200,alignSelf:"center"},placeholder:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0432\u0432\u043e\u0434",value:l,onChange:function(t){return h(t.target.value)}}),Object(et.jsx)(at.a,{onClick:function(){n(V(l)),r.type="OPERAND",r.left=null,r.right=null,r.user_input=!0,r.value=l,n(G()),e(r)},children:"Ok"})]})},Rt=n.p+"static/media/greater.0b809112.svg",_t=n.p+"static/media/less.b6d28bd9.svg",yt=n.p+"static/media/plus.47d179f1.svg",Nt=n.p+"static/media/minus.ed1583fb.svg",Et=n.p+"static/media/eq.4fdaf4b3.svg",At=n.p+"static/media/mult.05cf6c7f.svg",wt=n.p+"static/media/divide.4be7e1d6.svg",St=n.p+"static/media/gre_or_eq.9ca96bb8.svg",Ct=n.p+"static/media/less_or_eq.e676b311.svg",Tt=n.p+"static/media/not_eq.c6d2affe.svg",kt=function(t){var e=t.value;return Object(et.jsx)(et.Fragment,{children:function(t){switch(t){case"+":return Object(et.jsx)("img",{src:yt,width:20,height:20,alt:"+"});case"-":return Object(et.jsx)("img",{src:Nt,width:20,height:20,alt:"-"});case"<":return Object(et.jsx)("img",{src:_t,width:20,height:20,alt:"<"});case"<=":return Object(et.jsx)("img",{src:Ct,width:20,height:20,alt:"<="});case">":return Object(et.jsx)("img",{src:Rt,width:20,height:20,alt:">"});case">=":return Object(et.jsx)("img",{src:St,width:20,height:20,alt:">="});case"!=":return Object(et.jsx)("img",{src:Tt,width:20,height:20,alt:"!="});case"==":return Object(et.jsx)("img",{src:Et,width:20,height:20,alt:"=="});case"*":return Object(et.jsx)("img",{src:At,width:20,height:20,alt:"*"});case"/":return Object(et.jsx)("img",{src:wt,width:20,height:20,alt:"/"});default:return t}}(e)})},It=function(t){var e=t.node,n=t.setNode,i=xt(),s=P();return Object(et.jsxs)(c.a,{display:"flex",justifyContent:"center",children:[Object(et.jsx)(mt,{setNode:n}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("+")),e&&(e.value="+",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"+"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("-")),e&&(e.value="-",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"-"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("*")),e&&(e.value="*",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"*"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("/")),e&&(e.value="/",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"/"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("OR")),e&&(e.value="OR",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:"OR"}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("AND")),e&&(e.value="AND",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:"AND"}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("NOT")),e&&(e.value="NOT",e.type="FUNCTION",e.user_input=!1,e.left||e.addArguments(1)),s(G())},variant:"outlined",children:"NOT"}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("<")),e&&(e.value="<",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"<"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("<=")),e&&(e.value="<=",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"<="})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("==")),e&&(e.value="==",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"=="})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V("!=")),e&&(e.value="!=",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:"!="})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V(">")),e&&(e.value=">",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:">"})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(V(">=")),e&&(e.value=">=",e.type="OPERATOR",e.user_input=!1,e.left||e.setLeft(),e.right||e.setRight()),s(G())},variant:"outlined",children:Object(et.jsx)(kt,{value:">="})}),Object(et.jsx)(at.a,{className:i.btn,onClick:function(){s(z()),s(G())},variant:"outlined",children:"()"})]})},Lt=function(t){var e=t.index,n=t.value,r=P(),a=s.a.useState(!1),u=Object(o.a)(a,2),l=u[0],h=u[1],d=Object(i.useState)(!1),f=Object(o.a)(d,2),j=f[0],O=f[1],b=Object(i.useState)(Z.find(e)),p=Object(o.a)(b,2),g=p[0],v=p[1],x=function(t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&(r(B(e)),h(t))}};return Object(et.jsxs)("div",{children:[n?Object(et.jsxs)(at.a,{onClick:x(!0),disableRipple:!0,style:{position:"relative"},onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},children:[g.user_input?Object(et.jsxs)(c.a,{color:"red",children:['"',n,'"']}):Object(et.jsx)(kt,{value:n}),j&&Object(et.jsx)(Ot.a,{size:"small",onClick:function(t){t.preventDefault(),t.stopPropagation(),Z.delete(e),g.user_input=!1,r(G())},style:{position:"absolute",top:-5,right:-5},children:Object(et.jsx)(pt.a,{style:{fontSize:15}})}),j&&g.left&&"OPERATOR"===g.left.type&&Object(et.jsx)(Ot.a,{size:"small",onClick:function(t){t.preventDefault(),t.stopPropagation(),Z.swap_with_left(e),r(G())},style:{position:"absolute",top:7,left:-5},children:Object(et.jsx)(vt.a,{style:{fontSize:15}})}),j&&g.right&&"OPERATOR"===g.right.type&&Object(et.jsx)(Ot.a,{size:"small",onClick:function(t){t.preventDefault(),t.stopPropagation(),Z.swap_with_right(e),r(G())},style:{position:"absolute",top:7,right:-5},children:Object(et.jsx)(vt.a,{style:{fontSize:15}})})]}):Object(et.jsx)(Ot.a,{onClick:x(!0),children:Object(et.jsx)(jt.a,{})}),Object(et.jsxs)(ut.a,{anchor:"bottom",open:l,onClose:x(!1),children:[Object(et.jsx)(It,{node:g,setNode:v}),Object(et.jsxs)(c.a,{display:"flex",children:[Object(et.jsx)(dt,{items:tt.FUNCTIONS,type:"functions"}),Object(et.jsx)(dt,{items:tt.FACTS,type:"facts"}),Object(et.jsx)(dt,{items:tt.MEASURES,type:"measures"}),Object(et.jsx)(dt,{items:tt.VARIABLES,type:"variables"})]})]})]})},Pt=function(t){var e=t.value,n=void 0===e?"":e,i=t.index;return Object(et.jsx)(Lt,{index:i||0,value:n})},Ut=n(59),Ft=Object(K.a)({box:{cursor:"pointer",margin:5,padding:5,borderLeft:function(t){return t.state?"2px solid black":"none"},borderRight:function(t){return t.state?"2px solid black":"none"},flexDirection:function(t){return t.state?"column":"row"},alignItems:"center",display:"flex",borderRadius:10},typography:{margin:5,fontSize:25},mid:{padding:15,fontSize:25}}),Mt=function t(e){var n=e.node,s=P(),r=Object(i.useState)(!1),a=Object(o.a)(r,2),u=a[0],l=a[1],h=Object(i.useState)(!1),d=Object(o.a)(h,2),f=d[0],j=d[1],O=Ft({state:u}),b=function(){return l(!u)},p=function(e){switch(e.type){case"FUNCTION":return Object(et.jsx)(t,{node:e});case"OPERATOR":return Object(et.jsx)(zt,{node:e});default:return Object(et.jsx)(Pt,{value:e.value,index:e.index})}};return Object(et.jsxs)(c.a,{display:"flex",alignItems:"center",onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[Object(et.jsx)(Lt,{index:n.index,value:n.value}),!u&&Object(et.jsx)(Ut.a,{className:O.typography,children:"("}),Object(et.jsxs)(c.a,{className:O.box,children:[n.args&&n.args.map((function(t,e){return e===n.args.length-1?p(t):Object(et.jsxs)(et.Fragment,{children:[p(t),Object(et.jsx)(Ut.a,{className:O.mid,onClick:b,children:","})]})})),n.add_nodes&&f&&n.args.length<10&&Object(et.jsx)(Ot.a,{size:"small",onClick:function(){n.addArguments(1),s(G())},children:Object(et.jsx)(jt.a,{style:{fontSize:15}})})]}),!u&&Object(et.jsx)(Ut.a,{className:O.typography,children:")"})]})},Dt=Object(K.a)({box:{display:"flex",alignItems:"center",flexDirection:function(t){return t.state?"column":"row"},cursor:"pointer",borderLeft:function(t){return t.brace?"2px solid black":"none"},borderRight:function(t){return t.brace?"2px solid black":"none"},margin:5,padding:5,position:"relative",borderRadius:10},mid:{margin:15,fontSize:25},btn:{position:"absolute",top:-18,right:-12},icon:{fontSize:15}}),Vt=n(80),Bt=n.n(Vt),zt=function t(e){var n=e.node,s=U(Y),r=Object(i.useState)(!1),a=Object(o.a)(r,2),u=a[0],l=a[1],h=Object(i.useState)(!1),d=Object(o.a)(h,2),f=d[0],j=d[1],O=Dt({state:u,brace:s});return Object(et.jsxs)(c.a,{className:O.box,onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[f&&Object(et.jsx)(Ot.a,{onClick:function(){return l(!u)},className:O.btn,size:"small",children:Object(et.jsx)(Bt.a,{className:O.icon})}),n.left&&"OPERAND"!==n.left.type?"FUNCTION"===n.left.type?Object(et.jsx)(Mt,{node:n.left}):Object(et.jsx)(t,{node:n.left}):Object(et.jsx)(Pt,{value:n.left?n.left.value:"",index:n.left?n.left.index:0}),Object(et.jsx)(Lt,{index:n.index,value:n.value}),n.right&&"OPERAND"!==n.right.type?"FUNCTION"===n.right.type?Object(et.jsx)(Mt,{node:n.right}):Object(et.jsx)(t,{node:n.right}):Object(et.jsx)(Pt,{value:n.right?n.right.value:"",index:n.right?n.right.index:0})]})},Gt=Object(K.a)((function(){return{box:{width:1e3,height:700,border:"1px solid black",margin:"auto",display:"flex",overflow:"auto"}}})),qt=function(){var t=U(J),e=Gt();Object(i.useEffect)((function(){n(Z.root)}),[t]);var n=function(t){return"OPERAND"===t.type?Object(et.jsx)(Pt,{value:t.value,index:t.index}):"FUNCTION"===t.type?Object(et.jsx)(Mt,{node:t}):Object(et.jsx)(zt,{node:t})};return Object(et.jsx)(c.a,{className:e.box,children:Object(et.jsx)(c.a,{margin:"auto",children:n(Z.root)})})},Ht=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0];e[1];return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(at.a,{onClick:function(){return!1},children:n?"Text":"Visual"}),n?Object(et.jsx)(ct,{}):Object(et.jsx)(qt,{})]})},Yt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),r(t),a(t)}))},Jt=Object(F.a)({reducer:{code:W}});a.a.render(Object(et.jsx)(s.a.StrictMode,{children:Object(et.jsx)(L.a,{store:Jt,children:Object(et.jsx)(Ht,{})})}),document.getElementById("root")),Yt()},97:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.908045f2.chunk.js.map