(function(t){function e(e){for(var a,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8a234a4c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t),i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"36b1":function(t,e,n){"use strict";var a=n("5393"),r=n.n(a);r.a},5393:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("034f"),n("2877")),s={},u=Object(o["a"])(s,r,i,!1,null,null,null),c=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("TicTacToe")],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Game"},[n("gameMenu",{attrs:{gameOver:t.gameOver,won:t.won},on:{"new-game":function(e){return t.newGame()}}}),n("div",{staticClass:"game-container"},[n("transition-group",{staticClass:"board",attrs:{name:"tile",tag:"div"}},t._l(t.board,function(t){return n("tile",{key:t.id,attrs:{tile:t}})}),1),n("div",{staticClass:"board shadow-board"},t._l(t.board.length,function(e){return n("div",{key:e,staticClass:"click",on:{click:function(n){return t.touch(e-1)}}},[n("div",{staticClass:"tile shadow-tile"})])}),0)],1)],1)},v=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile",class:{"tile-empty":t.emptyTile},style:{backgroundColor:t.backgroundColor}},[t._v("\n  "+t._s(t.displayingValue)+"\n")])},m=[],b=n("589d"),g=n.n(b),w={name:"tile",props:{tile:{type:Object,required:!0}},data:function(){return{colors:["#90CCC8","#90C2CE","#8FB2D1"]}},watch:{value:function(t,e){var n=this;t>e&&setTimeout(function(){g()(n.$el,{scale:1.2},{duration:50,complete:function(){g()(n.$el,{scale:1},{duration:50})}})},50)}},computed:{value:function(){return this.tile.value},displayingValue:function(){return"x"===this.value||"o"===this.value?this.value:null},emptyTile:function(){return null===this.displayingValue},backgroundColor:function(){return"x"===this.value?this.colors[1]:"o"===this.value?this.colors[2]:null}}},y=w,_=Object(o["a"])(y,p,m,!1,null,"f2efbb08",null),C=_.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gameMenu"},[n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v("TicTacToe")]),n("div",{staticClass:"scores space-right"},[n("div",{staticClass:"score"},[n("div",{staticClass:"score-title"},[t._v("X")]),n("div",{staticClass:"score-value"},[t._v(t._s(this.$store.state.score))])]),n("div",{staticClass:"score"},[n("div",{staticClass:"score-title"},[t._v("O")]),n("div",{staticClass:"score-value"},[t._v(t._s(this.$store.state.best))])])])]),n("a",{staticClass:"button space-right",on:{click:function(e){return t.newGame()}}},[t._v("New Game")]),n("transition",{attrs:{name:"fade"}},[t.gameOver?n("div",{staticClass:"modal"},[n("h1",[t._v("Draw!")]),n("a",{staticClass:"button button-black",on:{click:function(e){return t.newGame()}}},[t._v("Try again")])]):t._e(),t.won?n("div",{staticClass:"modal"},[n("h1",[t._v(t._s(this.gameWon())+" Won!")]),n("a",{staticClass:"button button-black",on:{click:function(e){return t.newGame()}}},[t._v("Try again")])]):t._e()])],1)},T=[],k={name:"gameMenu",props:{gameOver:{type:Boolean,required:!0},won:{type:Boolean,required:!0}},data:function(){return{winner:0}},methods:{newGame:function(){this.$emit("new-game")},gameWon:function(){return this.$store.state.winner}}},x=k,j=(n("e51a"),Object(o["a"])(x,O,T,!1,null,"6ec6f462",null)),$=j.exports,S={methods:{playerAy:function(){var t=this;if(!this.allTilesFull){var e=function(){var e=Math.floor(Math.random()*t.board.length);return t.board[e]},n=e();while(0!==n.value)n=e();n.value="o",this.didIwin("o")}},didIwin:function(t){this.board[0].value===t&&this.board[1].value===t&&this.board[2].value===t&&this.score(t),this.board[3].value===t&&this.board[4].value===t&&this.board[5].value===t&&this.score(t),this.board[6].value===t&&this.board[7].value===t&&this.board[8].value===t&&this.score(t),this.board[0].value===t&&this.board[3].value===t&&this.board[6].value===t&&this.score(t),this.board[1].value===t&&this.board[4].value===t&&this.board[7].value===t&&this.score(t),this.board[2].value===t&&this.board[5].value===t&&this.board[8].value===t&&this.score(t),this.board[0].value===t&&this.board[4].value===t&&this.board[8].value===t&&this.score(t),this.board[6].value===t&&this.board[4].value===t&&this.board[2].value===t&&this.score(t)},score:function(t){this.won=!0,this.$store.dispatch("updateWinner",t),"x"===t?this.$store.dispatch("updateScore"):this.$store.dispatch("updateBest")}}},B={name:"Game",mixins:[S],components:{tile:C,gameMenu:$},data:function(){return{board:[],gameOver:!1,won:!1}},watch:{allTilesFull:function(t,e){t&&this.checkGameState()}},mounted:function(){this.setupBoard()},computed:{allTilesFull:function(){return!this.board.filter(function(t){return 0===t.value}).length>0}},methods:{touch:function(t){var e=this.board[t];e.value="x",this.playerAy(),this.didIwin("x")},checkGameState:function(){this.allTilesFull&&(this.gameOver=!0)},setupBoard:function(){this.newGame()},newGame:function(){this.resetBoard(),this.resetWinner(),this.gameOver=!1,this.won=!1},resetBoard:function(){this.board=Array.apply(null,{length:9}).map(function(t,e){return{id:e,value:0}})},resetWinner:function(){this.$store.dispatch("resetWinner")}}},W=B,G=(n("36b1"),Object(o["a"])(W,h,v,!1,null,"11d18f30",null)),M=G.exports,E={name:"home",components:{TicTacToe:M}},P=E,F=Object(o["a"])(P,d,f,!1,null,null,null),q=F.exports;a["a"].use(l["a"]);var A=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),I=n("2f62");a["a"].use(I["a"]);var V=new I["a"].Store({state:{score:0,best:0,winner:0},mutations:{updateWinner:function(t,e){t.winner=e},updateScore:function(t){t.score+=1},updateBest:function(t){t.best+=1},resetWinner:function(t){t.winner=0},resetScore:function(t){t.score=0},resetBest:function(t){t.best=0}},actions:{updateWinner:function(t,e){t.commit("updateWinner",e)},updateScore:function(t){t.commit("updateScore")},updateBest:function(t){t.commit("updateBest")},resetWinner:function(t){t.commit("resetWinner")},resetScore:function(t){t.commit("resetScore")},resetBest:function(t){t.commit("resetBest")}}}),D=n("c8b5"),J=n.n(D);n("b5bf"),a["a"].config.productionTip=!1,a["a"].directive("tap",{bind:function(t,e){if("function"===typeof e.value){var n=new J.a(t);n.on("tap",e.value)}}}),new a["a"]({router:A,store:V,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){},b314:function(t,e,n){},e51a:function(t,e,n){"use strict";var a=n("b314"),r=n.n(a);r.a}});
//# sourceMappingURL=app.937e6922.js.map