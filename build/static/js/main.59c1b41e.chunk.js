(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(24);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),u=n(2),s=n(3),l=n(5),i=n(4),h=n(6),m=n(10),d=n(12),p=n(22),f=a.a.createContext({users:[],queue:null,userName:"",currentCat:{},currentDog:{},adopted:[],error:null,setUsers:function(){},clearUsers:function(){},setQueue:function(){},clearQueue:function(){},setUserName:function(){},clearUserName:function(){},setCurrentCat:function(){},clearCurrentCat:function(){},setCurrentDog:function(){},clearCurrentDog:function(){},setAdopted:function(){},clearAdopted:function(){},setError:function(){},clearError:function(){},randomCatDog:function(){},cycleList:function(){}}),E=f,g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={users:[],queue:null,userName:"",currentCat:{},currentDog:{},adopted:[],error:null},n.setUsers=function(e){n.setState({users:e})},n.clearUsers=function(){n.setState({users:[]})},n.setQueue=function(e){n.setState({queue:e})},n.clearQueue=function(){n.setState({queue:null})},n.setUserName=function(e){n.setState({userName:e})},n.clearUserName=function(){n.setState({userName:""})},n.setCurrentCat=function(e){n.setState({currentCat:e})},n.clearCurrentCat=function(){n.setState({currentCat:{}})},n.setCurrentDog=function(e){n.setState({currentDog:e})},n.clearCurrentDog=function(){n.setState({currentDog:{}})},n.setError=function(e){console.log(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setAdopted=function(e){n.setState({adopted:[].concat(Object(p.a)(n.state.adopted),[e])})},n.clearAdopted=function(){n.setState({adopted:[]})},n.randomCatDog=function(){Math.floor(100*Math.random())<50?n.handleAdoptCat():n.handleAdoptDog()},n.cycleList=function(){n.context.userName!==n.context.queue.first.value&&setTimeout((function(){this.randomCatDog()}),5e3)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={users:this.state.users,queue:this.state.queue,userName:this.state.userName,currentCat:this.state.currentCat,currentDog:this.state.currentDog,adopted:this.state.adopted,error:this.state.error,setUsers:this.setUsers,clearUsers:this.clearUsers,setQueue:this.setQueue,clearQueue:this.clearQueue,setUserName:this.setUserName,clearUserName:this.clearUserName,setCurrentCat:this.setCurrentCat,clearCurrentCat:this.clearCurrentCat,setCurrentDog:this.setCurrentDog,clearCurrentDog:this.clearCurrentDog,setAdopted:this.setAdopted,clearAdopted:this.clearAdopted,setError:this.setError,clearError:this.clearError,randomCatDog:this.randomCatDog,cycleList:this.cycleList};return a.a.createElement(f.Provider,{value:e},this.props.children)}}]),t}(r.Component),v={API_ENDPOINT:"http://localhost:8080"},C={getPeople:function(){return fetch("".concat(v.API_ENDPOINT,"/people"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postPeople:function(e){return console.log(e),fetch("".concat(v.API_ENDPOINT,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.log(e)}))}},j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault(),n.context.clearUserName(),n.context.clearError();var t=document.getElementById("name").value;return console.log(t),n.context.setUserName(t),C.postPeople(t).then((function(e){var t=n.props,r=t.location,a=t.history,o=(r.state||{}).from||"/adopt";a.push(o)})).catch((function(e){return console.log(e)}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"home"},a.a.createElement("h1",null,"Petful"),a.a.createElement("h2",null,"Petful is an adoption tool"),a.a.createElement("p",null,"The first animal that gets admitted to our shelter is the first one that gets adopted."),a.a.createElement("img",{alt:"this is adoption",src:"https://i.insider.com/51cd94f0eab8eaae1800001b"}),a.a.createElement(d.b,{to:"/adopt"},a.a.createElement("button",null," Preview Adoptions ")),a.a.createElement("form",{className:"addName",onSubmit:this.handleSubmit},a.a.createElement("h2",null,"Adopt a Pet!"),a.a.createElement("p",null,"By adding your name to the queue you will be matched with an appropritate pet."),a.a.createElement("label",{htmlFor:"name"},"Name"),a.a.createElement("input",{type:"text",name:"name",id:"name",required:!0}),a.a.createElement("button",{type:"submit"}," Match Me!")))}}]),t}(r.Component);j.contextType=E;var b=j,y=function e(t){Object(u.a)(this,e),this.value=t,this.next=null},D=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(u.a)(this,e),this.first=t,this.last=n}return Object(s.a)(e,[{key:"enqueue",value:function(e){var t=new y(e);null===this.first&&(this.first=t),this.last&&(this.last.next=t),this.last=t}},{key:"dequeue",value:function(){if(null!==this.first){var e=this.first;return this.first=this.first.next,e===this.last&&(this.last=null),e.value}}},{key:"requeue",value:function(){if(null!==this.first){var e=this.dequeue();return this.enqueue(e),e}}}]),e}(),N={getDog:function(){return fetch("".concat(v.API_ENDPOINT,"/dogs"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteDog:function(){return fetch("".concat(v.API_ENDPOINT,"/dogs"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},O={getCat:function(){return fetch("".concat(v.API_ENDPOINT,"/cats"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteCat:function(){return fetch("".concat(v.API_ENDPOINT,"/cats"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},x=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imgSrc,n=e.name,r=e.owner;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:t,alt:"pet"}),a.a.createElement("p",null,"Name: ",n),a.a.createElement("p",null,"Owner: ",r))}}]),t}(a.a.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.animal,n=e.handleAdoptClick,r=!1;return this.context.queue&&(r=this.context.userName===this.context.queue.first.value),a.a.createElement("div",{className:"PetInfo"},a.a.createElement("img",{src:t.imageURL,alt:t.imageDescription}),a.a.createElement("h3",null,"Name: ",t.name),a.a.createElement("p",null,t.story),a.a.createElement("ul",null,a.a.createElement("li",null,"Gender: ",t.gender),a.a.createElement("li",null,"Age: ",t.age),a.a.createElement("li",null,"Breed: ",t.breed),a.a.createElement("li",null,"Description: ",t.description)),a.a.createElement("button",{type:"button",onClick:n,disabled:!r},"Adopt"))}}]),t}(a.a.Component);A.contextType=E;var P=A,k=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("ul",{className:"order-list"},a.a.createElement("h2",null,"Next in the Queue"),a.a.createElement("li",null,this.props.first),a.a.createElement("li",null,this.props.second),a.a.createElement("li",null,this.props.third)))}}]),t}(r.Component),q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).cycleList=function(){n.context.userName!==n.context.queue.first.value&&(Math.floor(100*Math.random())<50?n.handleAdoptCat():n.handleAdoptDog())},n.handleAdoptCat=function(){return O.deleteCat().then((function(e){var t=n.context.queue.requeue();e.owner=t,n.context.setAdopted(e)})).then((function(e){O.getCat().then((function(e){return n.context.setCurrentCat(e)})),n.setState({nowAdopting:n.context.queue.first.value})}))},n.handleAdoptDog=function(){return N.deleteDog().then((function(e){var t=n.context.queue.requeue();e.owner=t,n.context.setAdopted(e)})).then((function(e){N.getDog().then((function(e){return n.context.setCurrentDog(e)})),n.setState({nowAdopting:n.context.queue.first.value})}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.context),this.context.clearError(),this.context.clearQueue(),this.context.clearCurrentCat(),this.context.clearCurrentDog(),this.interval=setInterval(this.cycleList.bind(this),25e3),Promise.all([O.getCat(),N.getDog(),C.getPeople()]).then((function(t){e.context.setCurrentCat(t[0]),e.context.setCurrentDog(t[1]);var n=new D;t[2].forEach((function(e){return n.enqueue(e)})),e.context.setQueue(n)})).catch((function(e){return console.error(e)}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderLine",value:function(){return a.a.createElement(k,{first:this.context.queue.first.value,second:this.context.queue.first.next.value,third:this.context.queue.first.next.next.value})}},{key:"renderCat",value:function(){return a.a.createElement(P,{animal:this.context.currentCat,animalType:"cat",handleAdoptClick:this.handleAdoptCat})}},{key:"renderDog",value:function(){return a.a.createElement(P,{animal:this.context.currentDog,animalType:"dog",handleAdoptClick:this.handleAdoptDog})}},{key:"render",value:function(){var e=this.context.adopted.map((function(e,t){return a.a.createElement("div",{className:"adopted",key:t},a.a.createElement(x,{imgSrc:e.imageURL,name:e.name,owner:e.owner}))}));return a.a.createElement("div",null,a.a.createElement("h1",null,"Adopt a Dang Dog (or cat)!"),this.context.queue?this.renderLine():"Loading Pets! ...",a.a.createElement("div",{className:"Pets-available"},a.a.createElement("h2",null,"Available Pets"),a.a.createElement("div",{className:"cat"},a.a.createElement("h3",null,"Cat"),this.renderCat()),a.a.createElement("div",{className:"dog"},a.a.createElement("h3",null,"Dog"),this.renderDog())),a.a.createElement("div",{className:"Pets-adopted"},a.a.createElement("h3",null,"Adopted"),e))}}]),t}(a.a.Component);q.contextType=E;var S=q,U=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("main",{role:"main",className:"App-main"},a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:b}),a.a.createElement(m.a,{path:"/adopt",component:S}))))}}]),t}(r.Component);c.a.render(a.a.createElement(d.a,null,a.a.createElement(g,null,a.a.createElement(U,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.59c1b41e.chunk.js.map