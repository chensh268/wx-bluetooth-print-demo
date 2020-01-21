"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames=_interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(n,!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var defaults={prefixCls:"wux-keyboard",className:"",titleText:"安全键盘",cancelText:"取消",inputText:"输入数字密码",showCancel:!0,disorder:!1,password:!0,maxlength:6,closeOnReject:!0,onChange:function(e){},callback:function(e){}},upsetNums=function(e,t){var n=1<arguments.length&&void 0!==t?t:[1,2,3,4,5,6,7,8,9,0];if(0<arguments.length&&void 0!==e&&e)for(var r,o,a,s=Math.floor,i=Math.random,c=n.length,u=s(c/2)+1;u--;)(r=s(i()*c))!==(o=s(i()*c))&&(a=n[r],n[r]=n[o],n[o]=a);for(var l=[],f=0;f<4;f++)l.push(n.slice(3*f,3*(f+1)));return l};(0,_baseComponent.default)({useFunc:!0,data:defaults,computed:{classes:["prefixCls",function(e){return{wrap:(0,_classNames.default)(e),hd:"".concat(e,"__hd"),bd:"".concat(e,"__bd"),label:"".concat(e,"__label"),password:"".concat(e,"__password"),input:"".concat(e,"__input"),ft:"".concat(e,"__ft"),title:"".concat(e,"__title"),numbers:"".concat(e,"__numbers"),number:"".concat(e,"__number"),text:"".concat(e,"__text"),hover:"".concat(e,"__text--hover")}}]},methods:{hide:function(){this.$$setData({in:!1})},show:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=upsetNums(t.disorder),r=t.maxlength<=0?-1:t.maxlength,o=-1!==r?_toConsumableArray(new Array(r||defaults.maxlength)).map(function(){return 1}):[],a=this.$$mergeOptionsAndBindMethods(Object.assign({nums:n,keys:o,value:""},defaults,t));return this.$$setData(_objectSpread({in:!0},a)),this.hide.bind(this)},increase:function(e){var t=e.currentTarget.dataset,n=String(t.value),r=this.data,o=r.value,a=r.maxlength;o.length>=a&&-1!==a||this.updateValue(o+n)},decrease:function(e){var t=this.data.value;0!==t.length&&this.updateValue(t.substr(0,t.length-1))},updateValue:function(e){var t=0<arguments.length&&void 0!==e?e:"";if(this.$$setData({value:t}),"function"==typeof this.fns.onChange&&this.fns.onChange.call(this,t),t.length===this.data.maxlength){var n=this.fns.onClose||this.fns.callback,r=this.hide.bind(this),o=this.data.closeOnReject?r:function(){};if(n&&"function"==typeof n){var a=n.call(this,t);"object"===_typeof(a)?a.closePromise?a.closePromise.then(r,o):a.then(r,o):!1!==a&&r()}else r()}}}});