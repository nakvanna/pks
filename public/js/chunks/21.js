(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4__);


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
  name: "addStudyInfo",
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      checked: false,
      data: {
        year: '',
        date_pay: null,
        last_date_pay: null,
        study_infos: [{
          collection_id: null
        }]
      },
      student_ids: [],
      study_infos: [],
      dropzoneOptions: {
        url: route('file.upload'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពសិស្ស",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  computed: {
    getYears: function getYears() {
      return this.$store.getters.get_years;
    },
    getCollection: function getCollection() {
      return this.$store.getters.get_collections;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch('fetchYears');

            case 2:
              _context.next = 4;
              return this.$store.dispatch('fetchCollections');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    show: function show(selected, is_student) {
      this.$modal.show('addStudyInfo');

      if (is_student === true) {
        for (var i = 0; i < selected.length; i++) {
          this.student_ids.push(selected[i]['id']);
        }
      } else {
        for (var i = 0; i < selected.length; i++) {
          this.student_ids.push(selected[i].student_id);
        }
      }
    },
    plus: function plus() {
      this.data.study_infos.push({
        collection_id: null
      });
    },
    minus: function minus(index) {
      this.data.study_infos.splice(index, 1);
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.data.photo = res.path;
    },
    clearForm: function clearForm() {
      this.checked = false;
      this.data = {
        year: '',
        date_pay: null,
        last_date_pay: null,
        study_infos: [{
          collection_id: null
        }]
      };
    },
    storeStudyInfo: function () {
      var _storeStudyInfo = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, year, date_pay, last_date_pay, sinfo, stuid, i, j, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                year = this.data.year;
                date_pay = this.data.date_pay;
                last_date_pay = this.data.last_date_pay;
                sinfo = this.data.study_infos;
                stuid = this.student_ids;

                for (i = 0; i < stuid.length; i++) {
                  for (j = 0; j < sinfo.length; j++) {
                    self.study_infos.push({
                      year: year,
                      date_pay: date_pay,
                      last_date_pay: last_date_pay,
                      student_id: stuid[i],
                      collection_id: sinfo[j].collection_id
                    });
                  }
                }

                this.$vs.loading({
                  type: 'material'
                });
                promises = self.study_infos.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return self.$store.dispatch('storeStudyInfo', data);

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context3.next = 11;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    title: 'ប្រតិបត្តិការណ៍ជោគជ័យ',
                    text: 'ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងឆ្នាំសិក្សា!',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.study_infos = [];
                  self.clearForm();
                  self.$vs.loading.close();
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function storeStudyInfo() {
        return _storeStudyInfo.apply(this, arguments);
      }

      return storeStudyInfo;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "modal",
    {
      attrs: {
        width: "700",
        height: "auto",
        scrollable: true,
        pivotY: 0.2,
        adaptive: true,
        clickToClose: false,
        name: "addStudyInfo"
      }
    },
    [
      _c("div", { staticClass: "flex justify-end" }, [
        _c(
          "i",
          {
            staticClass: "vs-icon vs-popup--close material-icons text-warning",
            staticStyle: { background: "rgb(255, 255, 255)" },
            on: {
              click: function($event) {
                return _vm.$modal.hide("addStudyInfo")
              }
            }
          },
          [_vm._v("close")]
        )
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "ml-2" }, [_c("u", [_vm._v(" ការសិក្សា")])]),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/3 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: {
                      autocomplete: "",
                      placeholder: "ឆ្នាំសិក្សា",
                      type: "primary"
                    },
                    model: {
                      value: _vm.data.year,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "year", $$v)
                      },
                      expression: "data.year"
                    }
                  },
                  _vm._l(_vm.getYears, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.name, text: item.name }
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
              { staticClass: "vx-col md:w-1/3 flex" },
              [
                _c("vs-checkbox", {
                  attrs: { color: "#720ea8" },
                  model: {
                    value: _vm.checked,
                    callback: function($$v) {
                      _vm.checked = $$v
                    },
                    expression: "checked"
                  }
                }),
                _vm._v(" "),
                _c("flat-pickr", {
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
                    placeholder: "ថ្ងៃត្រូវបង់លុយដំបូង",
                    name: "date-pay",
                    disabled: !_vm.checked
                  },
                  model: {
                    value: _vm.data.date_pay,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "date_pay", $$v)
                    },
                    expression: "data.date_pay"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col md:w-1/3 flex" },
              [
                _c("flat-pickr", {
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
                    placeholder: "ថ្ងៃត្រូវបង់ចុងក្រោយ",
                    name: "date-pay"
                  },
                  model: {
                    value: _vm.data.last_date_pay,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "last_date_pay", $$v)
                    },
                    expression: "data.last_date_pay"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-row" },
            _vm._l(_vm.data.study_infos, function(study_info, index) {
              return _c(
                "div",
                { key: index, staticClass: "vx-col w-full" },
                [
                  _c("vx-input-group", { staticClass: "mb-base " }, [
                    _c(
                      "div",
                      { staticClass: "flex" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-5/6",
                            attrs: {
                              autocomplete: "",
                              placeholder: "ជ្រើសរើសពត៍មានការសិក្សា"
                            },
                            model: {
                              value: study_info.collection_id,
                              callback: function($$v) {
                                _vm.$set(study_info, "collection_id", $$v)
                              },
                              expression: "study_info.collection_id"
                            }
                          },
                          _vm._l(_vm.getCollection, function(item, index) {
                            return item.year === _vm.data.year
                              ? _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: item.id,
                                    text:
                                      item.year +
                                      " " +
                                      item.group_section +
                                      " -> " +
                                      item.section +
                                      " -> " +
                                      item.level +
                                      item.class_name +
                                      " -> " +
                                      item.shift
                                  }
                                })
                              : _vm._e()
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "append-text flex w-1/6 btn-addon" },
                          [
                            _c("vs-button", {
                              attrs: {
                                color: "danger",
                                type: "relief",
                                "icon-pack": "feather",
                                icon: "icon-minus"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.minus(index)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.data.study_infos.length === index + 1
                              ? _c("vs-button", {
                                  attrs: {
                                    type: "relief",
                                    "icon-pack": "feather",
                                    icon: "icon-plus"
                                  },
                                  on: { click: _vm.plus }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end btn-group" },
            [
              _c(
                "vs-button",
                {
                  attrs: {
                    icon: "icon-save",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.storeStudyInfo }
                },
                [_vm._v("រក្សាទុក")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/student/addStudyInfo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/student/addStudyInfo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true& */ "./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true&");
/* harmony import */ var _addStudyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStudyInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addStudyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "352d8cd4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/student/addStudyInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStudyInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudyInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudyInfo.vue?vue&type=template&id=352d8cd4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudyInfo_vue_vue_type_template_id_352d8cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);