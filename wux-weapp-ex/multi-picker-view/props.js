"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.props=exports.defaultFieldNames=void 0;var picker=_interopRequireWildcard(require("../picker-view/props"));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}function ownKeys(r,e){var t=Object.keys(r);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(r)),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(t,!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var defaultFieldNames=picker.defaultFieldNames;exports.defaultFieldNames=defaultFieldNames;var props=_objectSpread({},picker.props,{prefixCls:{type:String,value:"wux-picker"},pickerPrefixCls:{type:String,value:"wux-picker-col"},value:{type:Array,value:[]}});exports.props=props;