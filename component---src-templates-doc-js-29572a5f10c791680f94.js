webpackJsonp([1448787570647],{9:function(e,t,n){var i,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var o=n.apply(null,i);o&&e.push(o)}else if("object"===r)for(var s in i)a.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(n.default=n,e.exports=n):(i=[],r=function(){return n}.apply(t,i),!(void 0!==r&&(e.exports=r)))}()},51:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(2),u=i(l),c=n(3),p=i(c),d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return o(t,e),s(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&this.state.shouldSwitchAutoOnNextCycle===!0&&window.setTimeout(function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(this.props.open===!0?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.offsetHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):this.state.isClosed===!0?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?u.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?u.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",i=this.props.triggerDisabled?"is-disabled":"",r=this.state.isClosed===!1&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.triggerTagName,o=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,s=this.props.classParentString+"__trigger "+n+" "+i+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),l=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),c=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,p=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return u.default.createElement("div",{className:l.trim()},u.default.createElement(a,{className:s.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},r),this.renderNonClickableTriggerElement(),u.default.createElement("div",{className:c.trim(),style:t,onTransitionEnd:this.handleTransitionEnd},u.default.createElement("div",{className:p.trim(),ref:this.setInnerRef},o)))}}]),t}(l.Component);d.propTypes={transitionTime:p.default.number,transitionCloseTime:p.default.number,triggerTagName:p.default.string,easing:p.default.string,open:p.default.bool,classParentString:p.default.string,openedClassName:p.default.string,triggerStyle:p.default.object,triggerClassName:p.default.string,triggerOpenedClassName:p.default.string,contentOuterClassName:p.default.string,contentInnerClassName:p.default.string,accordionPosition:p.default.oneOfType([p.default.string,p.default.number]),handleTriggerClick:p.default.func,onOpen:p.default.func,onClose:p.default.func,onOpening:p.default.func,onClosing:p.default.func,trigger:p.default.oneOfType([p.default.string,p.default.element]),triggerWhenOpen:p.default.oneOfType([p.default.string,p.default.element]),triggerDisabled:p.default.bool,lazyRender:p.default.bool,overflowWhenOpen:p.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:p.default.oneOfType([p.default.element,p.default.func]),tabIndex:p.default.number},d.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null},t.default=d},79:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=i(r),o=n(3),s=i(o),l=n(11),u=i(l),c=n(51),p=i(c),d=n(9),f=i(d),h=n(80),m=i(h),g=function(e){var t=e.item,n=e.location,i=e.current,r=e.onClick,o=t.items,s=t.path,l=t.title,c=s===i;return o?a.default.createElement(p.default,{className:"menu__item",openedClassName:"menu__item open",triggerDisabled:!0,transitionTime:500,open:c,easing:"ease",trigger:a.default.createElement("div",{className:"item__title",role:"presentation",onClick:function(){return r(s)}},a.default.createElement("h2",{key:s},l),a.default.createElement("i",{className:"icon-chevron-"+(c?"top":"down")}))},a.default.createElement("ul",{className:"menu-item__list"},o.map(function(e){var t="index"===e.id?"/docs/"+s+"/":"/docs/"+s+"/"+e.id+"/",i=t===n.pathname;return a.default.createElement("li",{key:t,className:(0,f.default)("menu-item__link",{active:i})},a.default.createElement(m.default,{path:t,anchors:e.anchors,title:e.title,current:i,location:n}))}))):a.default.createElement("div",{className:"menu__item"},a.default.createElement(u.default,{className:"item__title",to:"/docs/"+s+"/"},a.default.createElement("h2",{key:s},l)))};g.propTypes={item:s.default.object.isRequired,location:s.default.object.isRequired,current:s.default.string,onClick:s.default.func},g.defaultProps={current:null,onClick:function(){}},t.default=g,e.exports=t.default},80:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=i(r),o=n(3),s=i(o),l=n(11),u=i(l),c=n(51),p=i(c),d=n(9),f=i(d),h=n(81),m=i(h),g=function(e){var t=e.path,n=e.anchors,i=e.title,r=e.current,o=e.location;return n?a.default.createElement(p.default,{className:"submenu__item",openedClassName:"submenu__item open",open:r,triggerDisabled:!0,transitionTime:500,easing:"ease",trigger:a.default.createElement(u.default,{to:t},i)},a.default.createElement("ul",null,n.map(function(e){var n=t+"#"+e.id;return a.default.createElement("li",{key:n,className:(0,f.default)("submenu-item__link",{current:""!==o.hash&&"#"+e.id===o.hash})},a.default.createElement(u.default,{to:n},e.title),e.anchors&&a.default.createElement(m.default,{path:t,anchors:e.anchors,title:e.title,location:o}))}))):a.default.createElement(u.default,{className:(0,f.default)({current:r}),to:t},i)};g.propTypes={path:s.default.string.isRequired,anchors:s.default.array,title:s.default.string.isRequired,current:s.default.bool,location:s.default.object},g.defaultProps={anchors:null,current:!1,location:null},t.default=g,e.exports=t.default},81:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=i(r),o=n(11),s=i(o),l=n(9),u=i(l),c=n(3),p=i(c),d=function e(t){var n=t.path,i=t.anchors,r=t.location;return a.default.createElement("ul",null,i.map(function(t){var i=n+"#"+t.id;return a.default.createElement("li",{key:i,className:(0,u.default)("submenu-item__link",{current:""!==r.hash&&"#"+t.id===r.hash})},a.default.createElement(s.default,{to:i},t.title),t.anchors&&a.default.createElement(e,{path:n,anchors:t.anchors,title:t.title,location:r}))}))};t.default=d,d.propTypes={path:p.default.string.isRequired,anchors:p.default.array.isRequired,location:p.default.object.isRequired},e.exports=t.default},82:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(2),u=i(l),c=n(3),p=i(c),d=n(28),f=n(79),h=i(f),m=function(e){function t(){var n,i,o;r(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=i=a(this,e.call.apply(e,[this].concat(l))),g.call(i),o=n,a(i,o)}return o(t,e),t.prototype.componentWillMount=function(){var e=this,t=this.props,n=t.location,i=t.history;"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("click",this.handleScroll)),this.setState(function(t){return s({},t,{currentItem:e.getItemByLocation(n)})}),this.unlisten=i.listen(this.updateLocation)},t.prototype.componentWillReceiveProps=function(e){var t=this;if(e.location.pathname!==this.props.location.pathname){var n=e.location;this.setState(function(e){return s({},e,{currentItem:t.getItemByLocation(n)})})}},t.prototype.handleScroll=function(){if(void 0!==document.querySelectorAll(".Collapsible.submenu__item.open")[0]){var e=document.querySelectorAll(".Collapsible.submenu__item.open")[0],t=e.querySelectorAll("a"),n=[];t.forEach(function(e,t){n[t]=document.getElementById(e.getAttribute("href").split("#")[1]),e.parentElement.classList.remove("current")});for(var i=t.length;0<i;i-=1)if(n[i]&&n[i].offsetTop<window.scrollY+2&&n[i].parentNode.offsetTop<window.scrollY+2)return void t[i].parentNode.classList.add("current")}},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var e=this,t=this.state,n=t.currentItem,i=t.locationWithHash;return u.default.createElement("div",{className:"docs__menu openable"},this.props.nav.map(function(t){return u.default.createElement(h.default,{item:t,key:t.path,onClick:e.toggleMenu,current:n,location:i})}))},t}(l.Component),g=function(){var e=this;this.updateLocation=function(t){e.setState(function(e){return s({},e,{locationWithHash:s({},t)})})},this.getItemByLocation=function(e){var t=/docs\/(.*?)(\/|$)/,n=e.pathname.match(t);return n?n[1]:null},this.state={currentItem:null,locationWithHash:this.props.location},this.toggleMenu=function(t){return e.setState(function(e){return s({},e,{currentItem:e.currentItem===t?null:t})})}};m.propTypes={location:p.default.object.isRequired,history:p.default.object.isRequired,nav:p.default.array},m.defaultProps={nav:[]},t.default=(0,d.withRouter)(m),e.exports=t.default},235:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=i(r),o=n(27),s=i(o),l=n(3),u=i(l),c=n(11),p=i(c),d=n(82),f=i(d),h=function(e){var t=e.pathContext;return a.default.createElement("div",{className:"page__docs"},a.default.createElement(s.default,{title:t.current&&t.current.title||"Documentation"}),a.default.createElement("div",{className:"container docs__content"},a.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),a.default.createElement("div",null,a.default.createElement("p",null,a.default.createElement("a",{href:"https://github.com/api-platform/docs/edit/2.3/"+t.editPath},"You can also help us improving the documentation of this page.")))),a.default.createElement("div",{className:"container docs__nav"},t.prev&&a.default.createElement(p.default,{className:"prev",to:"/"+t.prev.path},a.default.createElement("i",{className:"icon-chevron-left"}),a.default.createElement("span",null,t.prev.title)),t.next&&a.default.createElement(p.default,{className:"next",to:"/"+t.next.path},a.default.createElement("span",null,t.next.title),a.default.createElement("i",{className:"icon-chevron-right"}))),a.default.createElement(f.default,{nav:t.nav}))};t.default=h,h.propTypes={pathContext:u.default.object.isRequired},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-doc-js-29572a5f10c791680f94.js.map