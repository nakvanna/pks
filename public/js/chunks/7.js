(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeItem: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "layout--full-page" },
    [
      _c(
        "vs-navbar",
        {
          staticClass: "p-2",
          attrs: { type: "border" },
          model: {
            value: _vm.activeItem,
            callback: function($$v) {
              _vm.activeItem = $$v
            },
            expression: "activeItem"
          }
        },
        [
          _c(
            "vs-navbar-item",
            { attrs: { index: "0" } },
            [
              _c(
                "vs-dropdown",
                [
                  _c(
                    "a",
                    { staticClass: "flex items-center", attrs: { href: "#" } },
                    [
                      _vm._v(
                        "\n                    Dropdown hover\n                    "
                      ),
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v(" keyboard_arrow_down ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    [
                      _c("vs-dropdown-item", [
                        _vm._v(
                          "\n                        Option 1\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-dropdown-item", [
                        _vm._v(
                          "\n                        Option 2\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-dropdown-item", { attrs: { divider: "" } }, [
                        _vm._v(
                          "\n                        Option 3\n                    "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-navbar-item", { attrs: { index: "1" } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("News")])
          ]),
          _vm._v(" "),
          _c("vs-navbar-item", { attrs: { index: "2" } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Update")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("div", { staticClass: "router-view" }, [
          _c("div", { staticClass: "router-content" }, [
            _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
              ? _c(
                  "div",
                  {
                    staticClass:
                      "router-header flex flex-wrap items-center mb-6"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "content-area__heading",
                        class: {
                          "pr-4 border-0 md:border-r border-solid border-grey-light":
                            _vm.$route.meta.breadcrumb
                        }
                      },
                      [
                        _c("h2", { staticClass: "mb-1" }, [
                          _vm._v(_vm._s(_vm.routeTitle))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.$route.meta.breadcrumb
                      ? _c("vx-breadcrumb", {
                          staticClass: "ml-4 md:block hidden",
                          attrs: { route: _vm.$route, isRTL: _vm.$vs.rtl }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        staticClass: "ml-auto md:block hidden cursor-pointer",
                        attrs: { "vs-trigger-click": "" }
                      },
                      [
                        _c("vs-button", {
                          attrs: {
                            radius: "",
                            icon: "icon-settings",
                            "icon-pack": "feather"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "w-32" },
                          [
                            _c("vs-dropdown-item", [
                              _c(
                                "div",
                                {
                                  staticClass: "flex items-center",
                                  on: {
                                    click: function($event) {
                                      _vm.$router
                                        .push("/pages/profile")
                                        .catch(function() {})
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "inline-block mr-2",
                                    attrs: {
                                      icon: "UserIcon",
                                      svgClasses: "w-4 h-4"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Profile")])
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-dropdown-item", [
                              _c(
                                "div",
                                {
                                  staticClass: "flex items-center",
                                  on: {
                                    click: function($event) {
                                      _vm.$router
                                        .push("/apps/todo")
                                        .catch(function() {})
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "inline-block mr-2",
                                    attrs: {
                                      icon: "CheckSquareIcon",
                                      svgClasses: "w-4 h-4"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Tasks")])
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-dropdown-item", [
                              _c(
                                "div",
                                {
                                  staticClass: "flex items-center",
                                  on: {
                                    click: function($event) {
                                      _vm.$router
                                        .push("/apps/email")
                                        .catch(function() {})
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "inline-block mr-2",
                                    attrs: {
                                      icon: "MailIcon",
                                      svgClasses: "w-4 h-4"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Inbox")])
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-area__content" },
              [
                _c("router-view", {
                  key: _vm.$route.fullPath,
                  on: {
                    setAppClasses: function(classesStr) {
                      return _vm.$emit("setAppClasses", classesStr)
                    }
                  }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "the-footer flex-wrap justify-between" }, [
        _c("span", [
          _vm._v("COPYRIGHT © " + _vm._s(new Date().getFullYear()) + " "),
          _c(
            "a",
            {
              attrs: {
                href: "www.mcu.edu.kh",
                target: "_blank",
                rel: "nofollow"
              }
            },
            [_vm._v("Mean Chey University")]
          ),
          _vm._v(", All rights Reserved")
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/layouts/front-page/FrontPage.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/front-page/FrontPage.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontPage.vue?vue&type=template&id=46255a2a& */ "./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a&");
/* harmony import */ var _FrontPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontPage.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/front-page/FrontPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontPage.vue?vue&type=template&id=46255a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/front-page/FrontPage.vue?vue&type=template&id=46255a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontPage_vue_vue_type_template_id_46255a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);