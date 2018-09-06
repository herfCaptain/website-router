(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{165:function(r,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[r._v("#")]),r._v(" API")]),r._v(" "),t("h2",{attrs:{id:"constructor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[r._v("#")]),r._v(" constructor")]),r._v(" "),t("p",[r._v("new SMERouter(domId, mode)")]),r._v(" "),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{String} "),t("code",[r._v("domId")]),r._v(": mount point id")]),r._v(" "),t("li",[r._v("{String} "),t("code",[r._v("mode")]),r._v(": 'hash' or 'html5', if missing this parameter the default mode is 'hash' mode")])]),r._v(" "),t("h2",{attrs:{id:"router-route-path-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-route-path-handler","aria-hidden":"true"}},[r._v("#")]),r._v(" router.route(path, handler)")]),r._v(" "),t("h4",{attrs:{id:"parameters-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{String} "),t("code",[r._v("path")]),r._v(": route path")]),r._v(" "),t("li",[r._v("{Function} "),t("code",[r._v("handler")]),r._v(": handler will be called with "),t("code",[r._v("handler(req, res, next)")]),r._v(" "),t("ul",[t("li",[t("code",[r._v("req")]),r._v(": request obj")]),r._v(" "),t("li",[t("code",[r._v("res")]),r._v(": router instance")]),r._v(" "),t("li",[t("code",[r._v("next")]),r._v(": nest route function")])])])]),r._v(" "),t("h2",{attrs:{id:"router-go-url-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-go-url-body","aria-hidden":"true"}},[r._v("#")]),r._v(" router.go(url, body)")]),r._v(" "),t("h4",{attrs:{id:"parameters-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{String} "),t("code",[r._v("url")]),r._v(": url")]),r._v(" "),t("li",[r._v("{Object} "),t("code",[r._v("body")]),r._v(": you can pass a body object to the view")])]),r._v(" "),t("h2",{attrs:{id:"router-redirect-url-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-redirect-url-body","aria-hidden":"true"}},[r._v("#")]),r._v(" router.redirect(url, body)")]),r._v(" "),t("p",[r._v("same as "),t("code",[r._v("router.go")]),r._v(", but "),t("code",[r._v("router.redirect")]),r._v(" will be replace current history rather than push a new history")]),r._v(" "),t("h4",{attrs:{id:"parameters-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{String} "),t("code",[r._v("url")]),r._v(": url")]),r._v(" "),t("li",[r._v("{Object} "),t("code",[r._v("body")]),r._v(": you can pass a body object to the view")])]),r._v(" "),t("h2",{attrs:{id:"router-back"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-back","aria-hidden":"true"}},[r._v("#")]),r._v(" router.back()")]),r._v(" "),t("p",[r._v("same as window.history.go(-1)")]),r._v(" "),t("h4",{attrs:{id:"parameters-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("No")])]),r._v(" "),t("h2",{attrs:{id:"router-stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-stop","aria-hidden":"true"}},[r._v("#")]),r._v(" router.stop()")]),r._v(" "),t("p",[r._v("remove all listeners")]),r._v(" "),t("h4",{attrs:{id:"parameters-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("No")])]),r._v(" "),t("h2",{attrs:{id:"router-use-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-use-middleware","aria-hidden":"true"}},[r._v("#")]),r._v(" router.use(middleware)")]),r._v(" "),t("p",[r._v("register middleware")]),r._v(" "),t("h4",{attrs:{id:"parameters-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-7","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{Function} "),t("code",[r._v("middleware")]),r._v(": middleware will be called with "),t("code",[r._v("middleware(req)")])])]),r._v(" "),t("h2",{attrs:{id:"router-render-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-render-template","aria-hidden":"true"}},[r._v("#")]),r._v(" router.render(template)")]),r._v(" "),t("p",[r._v("register middleware")]),r._v(" "),t("h4",{attrs:{id:"parameters-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-8","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("{String} "),t("code",[r._v("template")]),r._v(": content to render in mount point")])]),r._v(" "),t("h2",{attrs:{id:"router-subroute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-subroute","aria-hidden":"true"}},[r._v("#")]),r._v(" router.subRoute()")]),r._v(" "),t("p",[r._v("return nested route mount point")]),r._v(" "),t("h4",{attrs:{id:"parameters-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-9","aria-hidden":"true"}},[r._v("#")]),r._v(" Parameters")]),r._v(" "),t("ul",[t("li",[r._v("No")])]),r._v(" "),t("h2",{attrs:{id:"request-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-object","aria-hidden":"true"}},[r._v("#")]),r._v(" request object")]),r._v(" "),t("h4",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[r._v("#")]),r._v(" Properties")]),r._v(" "),t("ul",[t("li",[t("code",[r._v("query")]),r._v(": query object from parsing query string")]),r._v(" "),t("li",[t("code",[r._v("params")]),r._v(": route params object")]),r._v(" "),t("li",[t("code",[r._v("body")]),r._v(": body object")]),r._v(" "),t("li",[t("code",[r._v("url")]),r._v(": original url，"),t("code",[r._v("writable: false")])]),r._v(" "),t("li",[t("code",[r._v("route")]),r._v(": registered route，"),t("code",[r._v("writable: false")])])])])}],!1,null,null,null);e.default=s.exports}}]);