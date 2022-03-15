/*! For license information please see 2455db69f288d6d300a68963d313bd25e7daaf14-da9deb01f2aad554b517.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8kqg":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("qhky"),s=a("Wbzz");function l(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,i=Object(s.useStaticQuery)("63159454").site,c=t||i.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},MKeS:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("zLVn"),s=a("wx14");function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=a("dI71"),c=a("TOwV"),u=a("xHvr"),m=a.n(u);function d(e,t){if(!e){var a=new Error("loadable: "+t);throw a.framesToPop=1,a.name="Invariant Violation",a}}var p=n.a.createContext();var f={initialChunks:{}};var h=function(e){return e};function v(e){var t=e.defaultResolveComponent,a=void 0===t?h:t,r=e.render,u=e.onLoad;function v(e,t){void 0===t&&(t={});var h=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):h.resolve?h.resolve(e):"static"}function g(e,r,n){var o=t.resolveComponent?t.resolveComponent(e,r):a(e);if(t.resolveComponent&&!Object(c.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return m()(n,o,{preload:!0}),o}var b,E,N=function(e){var t=y(e),a=v[t];return a&&"REJECTED"!==a.status||((a=h.requireAsync(e)).status="PENDING",v[t]=a,a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(e),chunkName:h.chunkName(e),error:t?t.message:t}),a.status="REJECTED"}))),a},w=function(e){function a(a){var r;return(r=e.call(this,a)||this).state={result:null,error:null,loading:!0,cacheKey:y(a)},d(!a.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),a.__chunkExtractor?(!1===t.ssr||(h.requireAsync(a).catch((function(){return null})),r.loadSync(),a.__chunkExtractor.addChunk(h.chunkName(a))),l(r)):(!1!==t.ssr&&(h.isReady&&h.isReady(a)||h.chunkName&&f.initialChunks[h.chunkName(a)])&&r.loadSync(),r)}Object(i.a)(a,e),a.getDerivedStateFromProps=function(e,t){var a=y(e);return Object(s.a)({},t,{cacheKey:a,loading:t.loading||t.cacheKey!==a})};var n=a.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return y(this.props)},n.getCache=function(){return v[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=g(h.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var a=g(t,e.props,S);e.safeSetState({result:a,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,Object(o.a)(e,["__chunkExtractor","forwardedRef"]));return N(t)},n.render=function(){var e=this.props,a=e.forwardedRef,n=e.fallback,l=(e.__chunkExtractor,Object(o.a)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,c=i.error,u=i.loading,m=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(c)throw c;var d=n||t.fallback||null;return u?d:r({fallback:d,result:m,options:t,props:Object(s.a)({},l,{ref:a})})},a}(n.a.Component),C=(E=function(e){return n.a.createElement(p.Consumer,null,(function(t){return n.a.createElement(b,Object.assign({__chunkExtractor:t},e))}))},(b=w).displayName&&(E.displayName=b.displayName+"WithChunkExtractor"),E),S=n.a.forwardRef((function(e,t){return n.a.createElement(C,Object.assign({forwardedRef:t},e))}));return S.displayName="Loadable",S.preload=function(e){S.load(e)},S.load=function(e){return N(e)},S}return{loadable:v,lazy:function(e,t){return v(e,Object(s.a)({},t,{suspense:!0}))}}}var y=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,a=e.props;return n.a.createElement(t,a)}}),g=y.loadable,b=y.lazy,E=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,a=e.props;return a.children?a.children(t):null}}),N=E.loadable,w=E.lazy;var C=g;C.lib=N,b.lib=w;t.a=C},ST0a:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz");t.a=function(){var e=Object(o.useStaticQuery)("1788611053");return n.a.createElement("div",{id:"about",className:"about-us"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 offset-lg-2 text-center"},n.a.createElement("div",{className:"section-title text-center"},n.a.createElement("h2",null,"About Us")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-9"},n.a.createElement("div",{className:"about-text"},n.a.createElement("h3",null,"IAM Policies are too hard to get right"),n.a.createElement("p",null,"Constable was born out of the realization that writing IAM policy becomes incredibly tedious and difficult as your AWS scale grows. Referencing resources and principals using string matching is extremely error-prone. "),n.a.createElement("p",null,"Co-founders Karl MacMillan and Nick Stocchero have put their 30+ years of security and expertise with AWS to develop a formal IAM policy model along with an easy to use interface and tooling to help you tame even the most complex and complicated IAM policies."))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("img",{src:e.image1.childImageSharp.fluid.src,alt:"Image"})))))}},TOwV:function(e,t,a){"use strict";e.exports=a("qT12")},"W+u9":function(e,t,a){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),a=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],n=0;n<a;){var o=t[n];if(e.call(r,o,n,t))return o;n++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(null!=n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a[o]=n[o])}return a},writable:!0,configurable:!0})},bKQI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationForm=t.Checkbox=t.SelectGroup=t.FileInput=t.Radio=t.TextInputGroup=t.TextInput=t.BaseFormControl=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();t.parseFileSize=p;var o=a("q1tI"),s=i(o),l=(i(a("i8i4")),i(a("17x9")));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e){var t=parseFloat(e,10),a=e.match(/[a-zA-Z]+/)[0];switch(a=a.toLowerCase()){case"b":return t;case"kb":return 1024*t;case"mb":return 1048576*t;case"gb":return 1073741824*t;default:throw new Error("Unknown unit "+a)}}a("W+u9");var f=t.BaseFormControl=function(e){function t(e){u(this,t);var a=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.setError=function(e){a.getInputRef().setCustomValidity(e),a.setState({errorMessage:e})},a.clearError=function(){return a.setError("")},a.checkError=function(e){a.state.isPristine&&a.setDirty(),a.buildErrorMessage(),a.changeInputErrorClass()},a.handleBlur=function(e){a.context.validationForm.immediate||a.checkError()},a.handleChange=function(e){a.props.onChange&&a.props.onChange(e),a.context.validationForm.immediate&&a.checkError()},a.validateInput=function(){a.setDirty(),a.buildErrorMessage()},a.setDirty=function(){a.setState({isPristine:!1})},a.filterProps=function(){var e=a.props;e.errorMessage,e.successMessage,e.validator,e.defaultErrorMessage,e.attachToForm,e.detachFromForm,e.setFormDirty,e.label,e.immediate;return c(e,["errorMessage","successMessage","validator","defaultErrorMessage","attachToForm","detachFromForm","setFormDirty","label","immediate"])},a.state={isPristine:!0,errorMessage:""},s.default.createRef?a.inputRef=s.default.createRef():a.inputRef=function(e){a.inputRefLegacy=e},a}return d(t,e),n(t,[{key:"componentDidMount",value:function(){this.context.validationForm.attachToForm(this)}},{key:"componentWillUnmount",value:function(){this.context.validationForm.detachFromForm(this)}},{key:"getInputRef",value:function(){return this.inputRefLegacy||this.inputRef.current}},{key:"buildErrorMessage",value:function(){var e={valueMissing:"required",customError:"",stepMismatch:"step",patternMismatch:"pattern",rangeUnderflow:"min",rangeOverflow:"max",typeMismatch:"type"},t=this.props.errorMessage,a=this.context.validationForm.defaultErrorMessage||{};"string"==typeof t&&(t={required:t}),t=Object.assign({},E.defaultErrorMessage,a,t);var r=this.getInputRef();if(r){var n=r.validity,o="";for(var s in n)if(n[s]){o="customError"===s?r.validationMessage:t[e[s]];break}if(this.props.minLength&&(r.value.length<+this.props.minLength?(r.setCustomValidity(t.minLength),o=t.minLength.replace("{minLength}",this.props.minLength)):o===t.minLength&&(r.setCustomValidity(""),o="")),"function"==typeof this.props.validator)(0,this.props.validator)(r.value)?(r.setCustomValidity(""),o=""):(r.setCustomValidity(t.validator),o=t.validator);this.setState({errorMessage:o})}}},{key:"displayErrorMessage",value:function(){return this.state.errorMessage?s.default.createElement("div",{className:"invalid-feedback"},this.state.errorMessage):null}},{key:"displaySuccessMessage",value:function(e){return this.state.isPristine||this.state.errorMessage||!this.props.successMessage?null:s.default.createElement("div",{className:"valid-feedback"+(e?" d-block":"")},this.props.successMessage)}},{key:"changeInputErrorClass",value:function(){var e=this.getInputRef();"radio"!==e.type&&(e.validity.valid?(e.classList.remove("is-invalid"),e.classList.add("is-valid")):(e.classList.add("is-invalid"),e.classList.remove("is-valid")))}}]),t}(s.default.Component);f.propTypes={name:l.default.string.isRequired,errorMessage:l.default.oneOfType([l.default.object,l.default.string])},f.contextTypes={validationForm:l.default.object},(t.TextInput=function(e){function t(){return u(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=e.multiline,a=(e.successMessage,e.validator,c(e,["multiline","successMessage","validator"]));return s.default.createElement(s.default.Fragment,null,t?s.default.createElement("textarea",r({className:this.props.className},a,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})):s.default.createElement("input",r({className:this.props.className},a,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(f)).defaultProps=r({},f.defaultProps,{className:"form-control",multiline:!1});var h=t.TextInputGroup=function(e){function t(){return u(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=e.prepend,a=e.append,n=e.inputGroupClassName,o=e.inputGroupStyle,l=c(e,["prepend","append","inputGroupClassName","inputGroupStyle"]);return s.default.createElement("div",{className:n,style:o},t&&s.default.createElement("div",{className:"input-group-prepend"},t),s.default.createElement("input",r({},l,{className:this.props.className,ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})),a&&s.default.createElement("div",{className:"input-group-append"},a),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(f);h.defaultProps=r({},f.defaultProps,{className:"form-control",inputGroupClassName:"input-group"}),h.propTypes={className:l.default.string,inputGroupClassName:l.default.string,inputGroupStyle:l.default.object,prepend:l.default.element,append:l.default.element};var v=function(e){function t(){return u(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),n(t,[{key:"getInputRef",value:function(){return window.document.querySelectorAll('[name="'+this.props.name+'"]')[0]}},{key:"mapRadioItems",value:function(){var e=this;return s.default.Children.map(this.props.children,(function(t){if("function"==typeof t.type&&t.type.name===y.name)return s.default.cloneElement(t,r({},t.props,{inline:e.props.inline,name:e.props.name,required:e.props.required,defaultValue:e.props.defaultValue,onChange:e.props.onChange,valueSelected:e.props.valueSelected,checkError:e.checkError}));console.warn("Only RadioItem is allowed inside RadioGroup")}))}},{key:"render",value:function(){var e=this.filterProps(),t=e.containerStyle,a=e.containerClassName;return s.default.createElement("div",{style:t,className:a},this.mapRadioItems(),this.state.errorMessage&&s.default.createElement("div",{className:"invalid-feedback d-block"},this.state.errorMessage),this.displaySuccessMessage(!0))}}]),t}(f);v.defaultProps={inline:!0,containerStyle:{}},v.propTypes={inline:l.default.bool,name:l.default.string.isRequired,containerStyle:l.default.object,containerClassName:l.default.string,defaultValue:l.default.string,valueSelected:l.default.string,onChange:l.default.func};var y=function(e){function t(){var e,a,r;u(this,t);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.onChange=function(e){r.props.onChange&&r.props.onChange(e,e.target.value),r.props.checkError()},m(r,a)}return d(t,e),n(t,[{key:"render",value:function(){var e=this.props,t=(e.checkError,e.containerStyle),a=e.containerClassName,n=e.label,o=e.inline,l=e.defaultValue,i=e.valueSelected,u=e.onChange,m=c(e,["checkError","containerStyle","containerClassName","label","inline","defaultValue","valueSelected","onChange"]),d=void 0!==i&&u?{checked:this.props.value===i}:{defaultChecked:this.props.value===l};return s.default.createElement("div",{className:a+" form-check "+(o?"form-check-inline":""),style:t},s.default.createElement("input",r({className:"form-check-input",type:"radio"},d,{onChange:this.onChange},m)),s.default.createElement("label",{className:"form-check-label",htmlFor:this.props.id},n))}}]),t}(o.Component);y.defaultProps={containerStyle:{},containerClassName:""},y.propTypes={value:l.default.string.isRequired,id:l.default.string.isRequired,label:l.default.string.isRequired,containerStyle:l.default.object,containerClassName:l.default.string};t.Radio={RadioGroup:v,RadioItem:y};var g=t.FileInput=function(e){function t(){var e,a,r;u(this,t);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.checkFileError=function(e){var t=r.props,a=t.maxFileSize,n=t.fileType,o=t.errorMessage,s=void 0===o?{}:o;s=Object.assign({},E.defaultErrorMessage,s);var l=a?p(a):null,i="",c=e.name.slice(e.name.lastIndexOf(".")+1).toLowerCase().trim();i=(n=n.map((function(e){return e.toLowerCase().trim()}))).length>0&&!n.includes(c)?s.fileType:l&&e.size>l?s.maxFileSize:"",r.getInputRef().setCustomValidity(i)},r.handleChange=function(e){var t=r.getInputRef().files[0];if(r.props.onChange&&r.props.onChange(e,t),!t)return r.checkError();r.checkFileError(t),r.checkError()},m(r,a)}return d(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=(e.maxFileSize,e.fileType,c(e,["maxFileSize","fileType"]));return s.default.createElement("div",null,s.default.createElement("input",r({},t,{ref:this.inputRef,type:"file",onChange:this.handleChange})),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(f);g.propTypes={fileType:l.default.array,maxFileSize:l.default.string},g.defaultProps=r({},f.defaultProps,{className:"form-control"}),(t.SelectGroup=function(e){function t(){return u(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps();return s.default.createElement("div",null,s.default.createElement("select",r({className:this.props.className},e,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur,value:this.props.value}),this.props.children),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(f)).defaultProps=r({},f.defaultProps,{className:"form-control"});var b=t.Checkbox=function(e){function t(){var e,a,r;u(this,t);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleChange=function(e){var t=e.target.checked;r.props.onChange&&r.props.onChange(e,t),r.checkError()},m(r,a)}return d(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=(e.label,e.inline),a=e.containerStyle,n=(e.className,e.checked,c(e,["label","inline","containerStyle","className","checked"]));return s.default.createElement("div",{className:"form-check "+(t?"form-check-inline":""),style:a},s.default.createElement("input",r({type:"checkbox",className:this.props.className},n,{ref:this.inputRef,onChange:this.handleChange,checked:this.props.value,defaultChecked:this.props.defaultChecked})),s.default.createElement("label",{className:"form-check-label",htmlFor:n.id},this.props.label),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(f);b.defaultProps=r({},f.defaultProps,{className:"form-check-input",containerStyle:{},label:"",inline:!1}),b.propTypes={name:l.default.string.isRequired,label:l.default.string.isRequired,containerStyle:l.default.object,inline:l.default.bool,id:l.default.string.isRequired,value:l.default.bool,defaultChecked:l.default.bool};var E=t.ValidationForm=function(e){function t(){var e,a,r;u(this,t);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.inputs={},r.attachToForm=function(e){r.inputs[e.props.name]=e},r.detachFromForm=function(e){delete r.inputs[e.props.name]},r.getChildContext=function(){return{validationForm:{attachToForm:r.attachToForm,detachFromForm:r.detachFromForm,immediate:r.props.immediate,defaultErrorMessage:r.props.defaultErrorMessage}}},r.setFormDiry=function(){var e=r.refs.form;e.classList.contains("was-validated")||e.classList.add("was-validated")},r.mapInputs=function(e){return Object.keys(e).map((function(t){return e[t]}))},r.findFirstErrorInput=function(e){return e.find((function(e){return!e.getInputRef().validity.valid}))},r.getErrorInputs=function(e){var t={};return e.forEach((function(e){var a=e.getInputRef();a.validity.valid||(t[a.name]=e)})),t},r.handleSubmit=function(e){var t=r.refs.form,a=r.getFormData(),n=r.mapInputs(r.inputs);(r.setFormDiry(),r.validateInputs(),!1===t.checkValidity())?(e.preventDefault(),e.stopPropagation(),r.props.onErrorSubmit&&r.props.onErrorSubmit(e,a,r.getErrorInputs(n)),r.props.setFocusOnError&&r.findFirstErrorInput(n).getInputRef().focus()):r.props.onSubmit&&r.props.onSubmit(e,a,n)},r.resetValidationState=function(e){for(var t in r.inputs){r.inputs[t].setState({errorMessage:"",isPristine:!0});var a=r.inputs[t].getInputRef();a.classList.remove("is-valid"),a.classList.remove("is-invalid"),a.setCustomValidity(""),e&&("checkbox"==a.type&&(a.checked=!1),a.value="")}r.refs.form.classList.remove("was-validated")},m(r,a)}return d(t,e),n(t,[{key:"isBaseFormControl",value:function(e){if("function"!=typeof e)return!1;for(;Object.getPrototypeOf(e)!==Object.prototype;){if(Object.getPrototypeOf(e)===f)return!0;e=Object.getPrototypeOf(e)}return!1}},{key:"validateInputs",value:function(){for(var e in this.inputs)this.inputs[e].validateInput()}},{key:"getFormData",value:function(){var e={};for(var t in this.inputs){var a=this.inputs[t].getInputRef(),r=null;switch(a.type){case"checkbox":r=a.checked;break;case"radio":for(var n=document.querySelectorAll('[name="'+this.props.name+'"]'),o=0;o<n.length;o++)if(n[o].checked){r=n[o].value;break}break;case"file":r=a.files[0];break;default:r=a.value}e[t]=r}return e}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.onErrorSubmit,e.immediate,e.setFocusOnError,e.defaultErrorMessage,c(e,["onSubmit","onErrorSubmit","immediate","setFocusOnError","defaultErrorMessage"]));return s.default.createElement("form",r({noValidate:!0,ref:"form"},t,{onSubmit:this.handleSubmit}),this.props.children)}}]),t}(s.default.Component);E.defaultProps={className:"needs-validation",setFocusOnError:!0,immediate:!0,defaultErrorMessage:{}},E.propTypes={className:l.default.string,defaultErrorMessage:l.default.object,setFocusOnError:l.default.bool,immediate:l.default.bool,onSubmit:l.default.func.isRequired,onErrorSubmit:l.default.func},E.childContextTypes={validationForm:l.default.object},E.defaultErrorMessage={required:"This field is required",pattern:"Input value does not match the pattern",type:"Input value does not match the type",step:"Step mismatch",minLength:"Please enter at least {minLength} characters",min:"Number is too low",max:"Number is too high",fileType:"File type mismatch",maxFileSize:"File size exceed limit",validator:"Validator check failed"}},kOXr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("bKQI"),s=function(e){return n.a.createElement("section",{id:"contact",className:"contact-area ptb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 offset-lg-2 text-center"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,e.sectionTitle),n.a.createElement("p",null,e.sectionDescription)))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-4"},n.a.createElement("div",{className:"address-area"},n.a.createElement("div",{className:"email"},n.a.createElement("i",{className:"fa fa-envelope"}),n.a.createElement("h4",null,e.EmailTitle),n.a.createElement("p",null,e.Email)),n.a.createElement("div",{className:"phone"},n.a.createElement("i",{className:"fa fa-phone"}),n.a.createElement("h4",null,e.PhoneTitle),n.a.createElement("p",null,e.Phone)))),n.a.createElement("div",{className:"col-lg-8 col-md-8"},n.a.createElement("div",{className:"contact-form"},n.a.createElement(o.ValidationForm,{id:"contactForm",onSubmit:function(e){}},n.a.createElement("form",{action:"https://formspree.io/f/mlezlgvn",method:"POST",id:"contactform"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement(o.TextInput,{name:"name",id:"name",required:!0,successMessage:"",errorMessage:"Please enter your name",className:"form-control",placeholder:"Name",autoComplete:"off"}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-lg-6 col-md-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement(o.TextInput,{name:"email",id:"email",type:"email",required:!0,successMessage:"",errorMessage:"Please enter your email address",className:"form-control",placeholder:"Email",autoComplete:"off"}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement(o.TextInput,{name:"subject",id:"subject",type:"text",successMessage:"",errorMessage:"Please enter your email subject",className:"form-control",placeholder:"Subject",autoComplete:"off"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement(o.TextInput,{name:"number",id:"number",type:"text",successMessage:"",errorMessage:"Please enter your phone number",className:"form-control",placeholder:"Phone",autoComplete:"off"}))),n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement(o.TextInput,{name:"message",id:"description",multiline:!0,placeholder:"Your message",className:"form-control",required:!0,successMessage:"",errorMessage:"Please write your message",rows:"5",autoComplete:"off"})))),n.a.createElement("div",{className:"center-wrap text-center"},n.a.createElement("div",{className:"button"},n.a.createElement("button",{type:"submit"},"Submit ",n.a.createElement("i",{className:"fa fa-long-arrow-right"})," "),n.a.createElement("div",{className:"mask"}))),n.a.createElement("div",{className:"clearfix"}))))))))};s.defaultProps={SectionbgTitle:"Contact",sectionTitle:"Contact Us",sectionDescription:"Speak to the contable team! Fill out this short form and we will get back to you.",AddTitle:"Address",Address:"2750 Quadra Street Victoria, Canada.",EmailTitle:"Email",Email:"info@constableapp.com",PhoneTitle:"Phone",Phone:"+1-630-335-6823"},t.a=s},nVkU:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=function(e){var t=Object(o.useStaticQuery)("1063185483"),a=[n.a.createElement("div",{className:"display-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-7 col-lg-7"},n.a.createElement("div",{className:"cta-info"},n.a.createElement("h3",null,"Understand Terraform changes before they go live in AWS"),n.a.createElement("p",null,"Constable reads Terraform planfiles and evaluates their effects before they go live. Know if any changes allow unwanted IAM access, change critical resource properties, or allow inappropriate role transitions"))),n.a.createElement("div",{className:"col-md-5 col-lg-5 cta-img"},n.a.createElement("img",{className:"img-fluid",src:t.githubcheck.childImageSharp.fluid.src,alt:"mac-pro"}))))),n.a.createElement("div",{className:"display-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-lg-5 cta-img"},n.a.createElement("img",{className:"img-fluid",src:t.accessrule.childImageSharp.fluid.src,alt:"mac-pro"})),n.a.createElement("div",{className:"col-md-7 col-lg-7"},n.a.createElement("div",{className:"cta-info"},n.a.createElement("h3",null,"Protect your most important AWS resources"),n.a.createElement("p",null,"Constable keeps a watch over your sensitive data and resources - S3 buckets, RDS databases, EC2 instances, or any other AWS services. Write straight-forward but powerful rules to be alerted for inappropriate IAM policy access, wrong role assumptions, or changed resource attributes. Rules can be checked both on Terraform plan - before they go live - and nightly to find changes outside of Terraform.")))))),n.a.createElement("div",{className:"display-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-7 col-lg-7"},n.a.createElement("div",{className:"cta-info"},n.a.createElement("h3",null,"Never wonder who has access"),n.a.createElement("p",null,"Constable understands and interprets every line of your IAM policy, and gives a digestible output of who can access what. Constable find and verify all role transitions, including between multiple accounts. Constable uses a mathematically proven formal IAM policy model that understands every IAM policy intricacy and then distills that into a understandable summary"))),n.a.createElement("div",{className:"col-md-5 col-lg-5 cta-img"},n.a.createElement("img",{className:"img-fluid",src:t.accesssummary.childImageSharp.fluid.src,alt:"mac-pro"}))))),n.a.createElement("div",{className:"display-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-lg-5 cta-img"},n.a.createElement("img",{className:"img-fluid",src:t.allresources.childImageSharp.fluid.src,alt:"mac-pro"})),n.a.createElement("div",{className:"col-md-7 col-lg-7"},n.a.createElement("div",{className:"cta-info"},n.a.createElement("h3",null,"A complete inventory of all your AWS resources"),n.a.createElement("p",null,"All regions, all AZs, all accounts. Constable keeps track of every single resource and all their identifiers (name, id, tag, and ARN). Constable provides an easy-to-use interface to find anything in your AWS environment - search and filter to find the resources you are interested in."))))))];return n.a.createElement("section",{id:"features",className:"services ptb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 offset-lg-2 text-center"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,e.sectionTitle),n.a.createElement("p",null,e.sectionDescription)))),n.a.createElement("div",{className:"diplay-table"},a.map((function(e){return n.a.createElement("div",{style:{marginBottom:"10vh"}},e)})))))};s.defaultProps={SectionbgTitle:"Features",sectionTitle:"Features",sectionDescription:"Rather than working with ambiguities when writing your IAM policies, Constable produces an easy to work with representation of your policies to help you better manage the intracacies of your entire infrastructure. "},t.a=s},qT12:function(e,t,a){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,m=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,E=r?Symbol.for("react.responder"):60118,N=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case m:case d:case s:case i:case l:case f:return e;default:switch(e=e&&e.$$typeof){case u:case p:case y:case v:case c:return e;default:return t}}case o:return t}}}function C(e){return w(e)===d}t.AsyncMode=m,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=s,t.Lazy=y,t.Memo=v,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=f,t.isAsyncMode=function(e){return C(e)||w(e)===m},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===v},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===l},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===d||e===i||e===l||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===E||e.$$typeof===N||e.$$typeof===g)},t.typeOf=w},v9fR:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=a("MKeS"),l=Object(s.a)((function(){return a.e(2).then(a.t.bind(null,"Rst5",7))})),i=function(e){var t=n.a.useState(!1),a=t[0],r=t[1];n.a.useEffect((function(){r(!0)}),[]);var s=e.banneronesData.map((function(e,t){return n.a.createElement("div",{className:e.BgClass,key:t},n.a.createElement("div",{className:"diplay-table"},n.a.createElement("div",{className:"display-table-cell"},n.a.createElement("div",{className:"container",style:{zIndex:10,position:"relative"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("h1",null,e.Title),n.a.createElement("p",null,e.Content),n.a.createElement("div",{className:"center-wrap"},n.a.createElement(o.Link,{to:e.BtnLink,className:"btn-a"},n.a.createElement("div",{className:"button"},e.BtnName," ",n.a.createElement("i",{className:"fa fa-long-arrow-right"}),n.a.createElement("div",{className:"mask"}))))))))),n.a.createElement("div",{class:"ripple-background",style:{zIndex:9}},n.a.createElement("div",{class:"circle xxlarge shade1"}),n.a.createElement("div",{class:"circle xlarge shade2"}),n.a.createElement("div",{class:"circle large shade3"}),n.a.createElement("div",{class:"circle mediun shade4"}),n.a.createElement("div",{class:"circle small shade5"})))}));e.thumbsData.map((function(e,t){return n.a.createElement("div",{className:"owl-thumb-item",key:t},n.a.createElement("div",{className:"glyph"},n.a.createElement("i",{className:e.ThumbIcon})),n.a.createElement("h3",null,e.ThumbTitle),n.a.createElement("p",null,e.ThumbContent))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hompage-slides-wrapper"},a?n.a.createElement(l,{className:"owl-theme homepage-slides",items:1,touchDrag:!1,margin:0,mouseDrag:!1,smartSpeed:1e3,dotData:!0,dotsContainer:".owl-thumbs"},s):"",!1))};i.defaultProps={banneronesData:[{BgClass:"single-slider-item slide-bg-1",TopTitle:"Clean & Creative",Title:"Keeping AWS secure from pull request to production",Content:"Constable tells you everything you don't know about your IAM policy and helps protect against unknown changes",BtnLink:"#contact",BtnName:"get started"}],thumbsData:[{ThumbIcon:"glyph-icon flaticon-047-laptop",ThumbTitle:"Beautiful Designs",ThumbContent:"We strive to embrace and drive change in our industry which allows us to keep our clients relevant."}]},t.a=i},xHvr:function(e,t,a){"use strict";var r=a("TOwV"),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return r.isMemo(e)?s:l[e.$$typeof]||n}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=s;var c=Object.defineProperty,u=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,a,r){if("string"!=typeof a){if(f){var n=p(a);n&&n!==f&&e(t,n,r)}var s=u(a);m&&(s=s.concat(m(a)));for(var l=i(t),h=i(a),v=0;v<s.length;++v){var y=s[v];if(!(o[y]||r&&r[y]||h&&h[y]||l&&l[y])){var g=d(a,y);try{c(t,y,g)}catch(b){}}}}return t}}}]);
//# sourceMappingURL=2455db69f288d6d300a68963d313bd25e7daaf14-da9deb01f2aad554b517.js.map