(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"count":0,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"count":0,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"count":0,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"count":0,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"count":0,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"count":0,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"count":0,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"count":0,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"count":0,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"count":0,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"count":0,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"count":0,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},14:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(3),c=t.n(i),r=t(4),s=t(5),l=t(7),m=t(6),u=t(8);var g=function(e){return o.a.createElement("div",{className:"col s12 m2"},o.a.createElement("div",{className:"card blue-grey darken-1",onClick:function(){return e.handleIncrement(e.id)}},o.a.createElement("div",{className:"card-image img-div"},o.a.createElement("img",{className:"setPos",alt:"",src:e.image}))))},p=t(1);var h=function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("a",{href:"#%",className:"brand-logo center"},"Clicky Game"))))},d=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={characters:p},t.gameItt=0,t.gameStatus="Press any Character to Start!",t.handleIncrement=function(e){var a=t.state.characters.filter((function(a){return a.id===e}));0===a[0].count?(t.gameItt++,t.gameItt===p.length?(t.gameStatus="Congrats! You Win! Press any Character to restart the game!",p.forEach((function(e){e.count=0})),t.gameItt=0):t.gameStatus="Correct! only "+(p.length-t.gameItt)+" to go!",a[0].count++):(t.gameStatus="Sorry wrong choice! Press any Character to try again:(",p.forEach((function(e){e.count=0})),t.gameItt=0);for(var n,o,i=p.length;0!==i;)o=Math.floor(Math.random()*i),n=p[i-=1],p[i]=p[o],p[o]=n;t.setState({characters:p})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12 m12 center"},o.a.createElement("h4",null,"The goal of this game is to click all the characters only once. If you click a character twice, you lose!"),o.a.createElement("h3",null,this.gameStatus))),o.a.createElement("div",{className:"row"},this.state.characters.map((function(a){return o.a.createElement(g,{handleIncrement:e.handleIncrement,id:a.id,key:a.id,name:a.name,image:a.image})})))))}}]),a}(o.a.Component);var v=function(){return o.a.createElement(d,null)};c.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.2ed9f33d.chunk.js.map