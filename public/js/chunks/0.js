(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: ['imageSrc', 'uploadUrl'],
  name: "ImageUpload",

  /*computed*/
  computed: {
    placeholder: function placeholder() {
      return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png';
    }
  },
  methods: {
    onFileChange: function () {
      var _onFileChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var formData, file, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                file = e.target.files[0];
                formData.append('file', file);
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(route(this.uploadUrl), formData);

              case 5:
                res = _context.sent;
                this.$emit('get-image-path', res.data);
                /*try {
                    const res = await axios.post(route(this.uploadUrl),formData);
                    this.$emit('get-image-path', res.data)
                }catch (e) {
                    return false
                }*/

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onFileChange(_x) {
        return _onFileChange.apply(this, arguments);
      }

      return onFileChange;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SubTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SubTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ImageUpload */ "./resources/js/src/components/ImageUpload.vue");
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
  name: "SubTab",
  components: {
    ImageUpload: _components_ImageUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      /*user data*/
      user: {
        profile: null,
        category: 'ICT',
        role: 'user',
        type: 'employee',
        name: '',
        email: '',
        telephone: '',
        password: '',
        content: 'Content'
      },
      categories: [{
        id: 1,
        category: 'ICT'
      }, {
        id: 2,
        category: 'Administrator'
      }, {
        id: 3,
        category: 'Faculty of Science and Technology'
      }],
      data: 'Working on the mix',
      options: {
        height: 300,
        plugins: 'link image imagetools table contextmenu'
      }
    };
  },
  computed: {
    placeholder: function placeholder() {
      return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png';
    }
  },
  methods: {
    /*set thumbnail*/
    setThumb: function setThumb(thumb) {
      this.user.profile = thumb;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("vs-images", [_c("vs-image", { attrs: { src: _vm.imageSrc } })], 1),
      _vm._v(" "),
      _c("div", { staticClass: "vs-con-input" }, [
        _c("input", {
          attrs: { type: "file", name: "file" },
          on: { change: _vm.onFileChange }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { "no-shadow": "" } }, [
    _c(
      "form",
      [
        _c("div", { staticClass: "vx-row mb-2" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { name: "title", "label-placeholder": "ចំណងជើង" },
                model: {
                  value: _vm.user.title,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "title", $$v)
                  },
                  expression: "user.title"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("title"),
                      expression: "errors.has('title')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("title")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c(
                "vs-select",
                {
                  staticClass: "w-full",
                  attrs: { autocomplete: "", label: "ប្រភេទ" },
                  on: { "input-change": function($event) {} },
                  model: {
                    value: _vm.user.category,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "category", $$v)
                    },
                    expression: "user.category"
                  }
                },
                _vm._l(_vm.categories, function(category, index) {
                  return _c("vs-select-item", {
                    key: index,
                    attrs: { value: category.category, text: category.category }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full my-2" },
            [
              _c("tinymce", {
                attrs: { id: "sub-tab", other_options: _vm.options },
                model: {
                  value: _vm.data,
                  callback: function($$v) {
                    _vm.data = $$v
                  },
                  expression: "data"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-2" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full" },
            [
              _c(
                "vs-select",
                {
                  staticClass: "w-full",
                  attrs: { autocomplete: "", label: "សិទ្ធ" },
                  on: { "input-change": function($event) {} },
                  model: {
                    value: _vm.user.role,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "role", $$v)
                    },
                    expression: "user.role"
                  }
                },
                [
                  _c("vs-select-item", {
                    attrs: { value: "user", text: "User" }
                  }),
                  _vm._v(" "),
                  _c("vs-select-item", {
                    attrs: { value: "admin", text: "Admin" }
                  }),
                  _vm._v(" "),
                  _c("vs-select-item", {
                    attrs: { value: "super_admin", text: "Super Admin" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full" },
            [
              _c("image-upload", {
                staticClass: "mb-2",
                attrs: {
                  "upload-url": "file.upload",
                  "image-src": _vm.user.profile
                    ? _vm.user.profile
                    : _vm.placeholder
                },
                on: { "get-image-path": _vm.setThumb }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-2" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "w-full",
                attrs: {
                  type: "email",
                  name: "email",
                  "icon-pack": "feather",
                  icon: "icon-mail",
                  "icon-no-border": "",
                  "label-placeholder": "អ៊ីម៉ែល"
                },
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/2 w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: {
                  name: "telephone",
                  "icon-pack": "feather",
                  icon: "icon-smartphone",
                  "icon-no-border": "",
                  "label-placeholder": "លេខទុរស័ព្ទ"
                },
                model: {
                  value: _vm.user.telephone,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "telephone", $$v)
                  },
                  expression: "user.telephone"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("telephone"),
                      expression: "errors.has('telephone')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("telephone")))]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("vs-divider"),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "mr-3 mb-2",
                  attrs: { type: "relief" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submitForm($event)
                    }
                  }
                },
                [_vm._v("\n                បង្កើត\n            ")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mb-2",
                  attrs: { color: "warning", type: "relief" },
                  on: {
                    click: [
                      function($event) {
                        $event.preventDefault()
                        return _vm.resetField($event)
                      },
                      function($event) {}
                    ]
                  }
                },
                [_vm._v("\n                ចាកចេញ\n            ")]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/ImageUpload.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/ImageUpload.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true& */ "./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true&");
/* harmony import */ var _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=script&lang=js& */ "./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55ca942c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/ImageUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ImageUpload.vue?vue&type=template&id=55ca942c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_55ca942c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/SubTab.vue":
/*!*******************************************!*\
  !*** ./resources/js/src/views/SubTab.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubTab.vue?vue&type=template&id=35771e5f&scoped=true& */ "./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true&");
/* harmony import */ var _SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/SubTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35771e5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/SubTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/SubTab.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/SubTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SubTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=template&id=35771e5f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SubTab.vue?vue&type=template&id=35771e5f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_35771e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);