(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},28:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),c=a(53),s=a(52),i=(a(26),a(28),a(6)),m=a(7),u=a(9),h=a(8),d=a(10),p=a(51),f=(a(30),a(15));f.initializeApp({apiKey:"AIzaSyDWv0ytli8it30rUKiF6MwAW8rJC_NFSTE",authDomain:"webeng-hybrid-app.firebaseapp.com",databaseURL:"https://webeng-hybrid-app.firebaseio.com",projectId:"webeng-hybrid-app",storageBucket:"webeng-hybrid-app.appspot.com",messagingSenderId:"721494888940"}),f.firestore().settings({timestampsInSnapshots:!0});var E=f,b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.fullname,l=a.email,o=a.cartoon_name;t.push({key:e.id,doc:e,fullname:n,email:l,cartoon_name:o})}),a.setState({request_cartoon:t})},a.ref=E.firestore().collection("request_cartoon"),a.unsubscribe=null,a.state={request_cartoon:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"CARTOON LIST")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(p.a,{to:"/create",class:"btn btn-primary"},"Add Cartoon")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Fullname"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Cartoon name"))),l.a.createElement("tbody",null,this.state.request_cartoon.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.fullname),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.cartoon_name))}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState({cartoon:t})},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.fullname,l=t.email,o=t.cartoon_name;E.firestore().collection("request_cartoon").doc(a.state.key).set({fullname:n,email:l,cartoon_name:o}).then(function(e){a.setState({key:"",fullname:"",email:"",cartoon_name:""}),a.props.history.push("/show/"+a.props.match.params.id)}).catch(function(e){console.error("Error adding cartoon: ",e)})},a.state={key:"",fullname:"",email:"",cartoon_name:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("request_cartoon").doc(this.props.match.params.id).get().then(function(t){if(t.exists){var a=t.data();e.setState({key:t.id,fullname:a.fullname,email:a.email,cartoon_name:a.cartoon_name})}else console.log("No such cartoon!")})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"EDIT CARTOON")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(p.a,{to:"/show/".concat(this.state.key),class:"btn btn-primary"},"Cartoon List")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Fullname:"),l.a.createElement("input",{type:"text",class:"form-control",name:"fullname",value:this.state.title,onChange:this.onChange,placeholder:"Fullname"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"description"},"Email:"),l.a.createElement("input",{type:"text",class:"form-control",name:"description",value:this.state.email,onChange:this.onChange,placeholder:"Email"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"Cartoon name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"cartoon_name",value:this.state.cartoon_name,onChange:this.onChange,placeholder:"Cartoon name"})),l.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit")))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.fullname,l=a.email,o=a.cartoon_name;e.ref.add({fullname:n,email:l,cartoon_name:o}).then(function(t){e.setState({fullname:"",email:"",cartoon_name:""}),e.props.history.push("/")}).catch(function(e){console.error("Error adding cartoon: ",e)})},e.ref=E.firestore().collection("request_cartoon"),e.state={fullname:"",email:"",cartoon_name:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.fullname,a=e.email,n=e.cartoon_name;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"ADD CARTOON")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(p.a,{to:"/",class:"btn btn-primary"},"Cartoon List")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Fullname:"),l.a.createElement("input",{type:"text",class:"form-control",name:"fullname",value:t,onChange:this.onChange,placeholder:"Fullname"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"description"},"Email:"),l.a.createElement("textArea",{class:"form-control",name:"email",onChange:this.onChange,placeholder:"Email",cols:"80",rows:"3"},a)),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"Cartoon name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"cartoon_name",value:n,onChange:this.onChange,placeholder:"Cartoon name"})),l.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit")))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={cartoon:{},key:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("request_cartoon").doc(this.props.match.params.id).get().then(function(t){t.exists?e.setState({cartoon:t.data(),key:t.id,isLoading:!1}):console.log("No such Cartoon")})}},{key:"delete",value:function(e){var t=this;E.firestore().collection("request_cartoon").doc(e).delete().then(function(){console.log("Cartoon successfully deleted!"),t.props.history.push("/")}).catch(function(e){console.error("Error removing cartoon: ",e)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h4",null,l.a.createElement(p.a,{to:"/"},"Cartoon List")),l.a.createElement("h3",{class:"panel-title"},this.state.cartoon.fullname)),l.a.createElement("div",{class:"panel-body"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Email:"),l.a.createElement("dd",null,this.state.cartoon.email),l.a.createElement("dt",null,"Cartoon name:"),l.a.createElement("dd",null,this.state.cartoon.cartoon_name)),l.a.createElement(p.a,{to:"/edit/".concat(this.state.key),class:"btn btn-success"},"Edit"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.key),class:"btn btn-danger"},"Delete"))))}}]),t}(n.Component);r.a.render(l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(s.a,{exact:!0,path:"/",component:b}),l.a.createElement(s.a,{path:"/edit/:id",component:v}),l.a.createElement(s.a,{path:"/create",component:g}),l.a.createElement(s.a,{path:"/show/:id",component:y}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.b4d6ee60.chunk.js.map