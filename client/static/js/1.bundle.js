(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=f(o),i=(f(n(8)),n(9)),a=f(n(7)),l=f(n(20)),c=f(n(22));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.logout=n.logout.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"logout",value:function(){this.props.history.push({pathname:"/login/"})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{id:"header"},u.default.createElement(l.default,{name:this.props.location.state.email})),u.default.createElement("div",{className:"container"},u.default.createElement(c.default,{title:"Collections"}),u.default.createElement(c.default,{title:"Souvenirs"}),u.default.createElement(c.default,{title:"Profile"})),u.default.createElement(a.default,{content:"Logout",action:this.logout,variant:"red"}))}}]),t}();t.default=(0,i.withRouter)(s)},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=a(o),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}n(21);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={greeting:"Hello "+n.props.name+"!"},n.getPythonHello=n.getPythonHello.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"personaliseGreeting",value:function(e){this.setState({greeting:e+" "+this.props.name+"!"})}},{key:"getPythonHello",value:function(){var e=this,t=window.location.href+"hello";return fetch(t).then(function(e){return e.json()}).then(function(t){return e.personaliseGreeting(t.greeting)}).catch(function(e){console.log("oups")})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null,this.state.greeting),u.default.createElement(i.default,{content:"Say Hello!",action:this.getPythonHello,variant:"red"}))}}]),t}();t.default=l},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"panel"},u.default.createElement("h2",null,this.props.title))}}]),t}();t.default=i},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.variant,n=e.action,r=e.content;return u.default.createElement("button",{className:t,onClick:n},r)}}]),t}();t.default=i}}]);