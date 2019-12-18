(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/Student.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/Student.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addStudent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStudent */ "./resources/js/src/views/student/addStudent.vue");
/* harmony import */ var _editStudent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editStudent */ "./resources/js/src/views/student/editStudent.vue");
/* harmony import */ var _addStudyInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addStudyInfo */ "./resources/js/src/views/student/addStudyInfo.vue");
/* harmony import */ var _addServiceInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addServiceInfo */ "./resources/js/src/views/student/addServiceInfo.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Student",
  components: {
    AddServiceInfo: _addServiceInfo__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddStudyInfo: _addStudyInfo__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditStudent: _editStudent__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddStudent: _addStudent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected: []
    };
  },
  computed: {
    all_students: function all_students() {
      return this.$store.getters.all_students;
    }
  },
  created: function created() {
    this.fetchStudent();
  },
  methods: {
    //fetch
    fetchStudent: function () {
      var _fetchStudent = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('fetchStudent');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchStudent() {
        return _fetchStudent.apply(this, arguments);
      }

      return fetchStudent;
    }(),
    //destroy
    toggleStudent: function () {
      var _toggleStudent = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected.map(
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
                            return self.$store.dispatch('toggleStudent', data.id);

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
                _context3.next = 5;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    time: 4000,
                    title: 'ប្រតិបត្តិការជោគជ័យ',
                    text: 'ទិន្នន័យបានកែប្រែ',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.selected = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function toggleStudent() {
        return _toggleStudent.apply(this, arguments);
      }

      return toggleStudent;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "addStudent",
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      data: {
        name: '',
        latin: '',
        gender: 'ប្រុស',
        photo: 'placeholder/placeholder.png',
        dob: '',
        std_contact: '',
        pob: '',
        address: '',
        father_name: '',
        father_job: '',
        father_contact: '',
        mother_name: '',
        mother_job: '',
        mother_contact: ''
      },
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
  methods: {
    show: function show() {
      this.$modal.show('add');
    },
    //store
    storeStudent: function storeStudent() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.data.gender && self.data.photo) {
          self.$vs.loading();
          self.$store.dispatch('storeStudent', self.data).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានបន្ថែម',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              }); // self.resetField();
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានបន្ថែម',
                color: 'danger',
                iconPack: 'feather',
                icon: 'icon-message-square',
                position: 'top-center'
              });
            }

            self.$vs.loading.close();
          });
        } else {
          self.$vs.notify({
            title: 'ប្រតិបត្តិការបរាជ័យ',
            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-message-square',
            position: 'top-center'
          });
        }
      });
    },
    resetField: function resetField() {
      this.data = {
        name: '',
        latin: '',
        gender: 'ប្រុស',
        photo: 'placeholder/placeholder.png',
        dob: '',
        std_contact: '',
        pob: '',
        address: '',
        father_name: '',
        father_job: '',
        father_contact: '',
        mother_name: '',
        mother_job: '',
        mother_contact: ''
      };
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.data.photo = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "editStudent",
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      data: {
        name: '',
        latin: '',
        gender: 'ប្រុស',
        photo: 'placeholder/placeholder.png',
        dob: '',
        std_contact: '',
        pob: '',
        address: '',
        father_name: '',
        father_job: '',
        father_contact: '',
        mother_name: '',
        mother_job: '',
        mother_contact: ''
      },
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
  methods: {
    show: function show() {
      this.$modal.show('edit');
    },
    //store
    updateStudent: function updateStudent() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.data.gender && self.data.photo) {
          self.$vs.loading();
          self.$store.dispatch('updateStudent', self.data).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានកែប្រែ',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានកែប្រែ',
                color: 'danger',
                iconPack: 'feather',
                icon: 'icon-message-square',
                position: 'top-center'
              });
            }

            self.$vs.loading.close();
            self.$emit('finished');
          });
        } else {
          self.$vs.notify({
            title: 'ប្រតិបត្តិការបរាជ័យ',
            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-message-square',
            position: 'top-center'
          });
        }
      });
    },
    //edit student
    editStudent: function editStudent(data) {
      this.data = data;
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.data.photo = res.path;
    },
    loadPhoto: function loadPhoto() {
      this.$refs.myVueDropzone.manuallyAddFile({
        size: 123
      }, this.data.photo);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex btn-group" },
        [
          _c(
            "vs-button",
            {
              attrs: {
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-plus-square"
              },
              on: {
                click: function($event) {
                  return _vm.$refs.addStudent.show()
                }
              }
            },
            [_vm._v("បន្ថែម")]
          ),
          _vm._v(" "),
          _vm.selected.length === 1
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "warning",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-edit"
                  },
                  on: {
                    click: function($event) {
                      _vm.$refs.editStudent.show()
                      _vm.$refs.editStudent.editStudent(_vm.selected[0])
                    }
                  }
                },
                [_vm._v("កែប្រែ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "danger",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-circle"
                  },
                  on: { click: _vm.toggleStudent }
                },
                [_vm._v("Toggle Status")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-upload"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$refs.addStudyInfo.show(_vm.selected, true)
                    }
                  }
                },
                [_vm._v("ការសិក្សា")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "dark",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-upload"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$refs.addServiceInfo.show(_vm.selected, true)
                    }
                  }
                },
                [_vm._v("សេវាកម្ម")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            multiple: "",
            pagination: "",
            "max-items": "10",
            search: "",
            data: _vm.all_students
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c("vs-td", { attrs: { data: data[indextr].id } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].id) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].name } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].latin } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].latin) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].status } },
                        [
                          data[indextr].status === true
                            ? _c("vs-chip", { attrs: { color: "success" } }, [
                                _vm._v("Active")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          data[indextr].status === false
                            ? _c("vs-chip", { attrs: { color: "warning" } }, [
                                _vm._v("Inactive")
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].created_at } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].created_at) +
                              "\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                })
              }
            }
          ]),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("ល.រ")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "name" } }, [_vm._v("ឈ្មោះ")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "latin" } }, [
                _vm._v("ឈ្មោះឡាតាំង")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "status" } }, [
                _vm._v("ស្ថានភាព")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                _vm._v("កាលបរិច្ឆេទ")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("add-student", { ref: "addStudent" }),
      _vm._v(" "),
      _c("edit-student", {
        ref: "editStudent",
        on: {
          finished: function($event) {
            _vm.selected = []
          }
        }
      }),
      _vm._v(" "),
      _c("add-study-info", { ref: "addStudyInfo" }),
      _vm._v(" "),
      _c("add-service-info", { ref: "addServiceInfo" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        width: "90%",
        height: "auto",
        scrollable: true,
        pivotY: 0.5,
        clickToClose: false,
        name: "add"
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
                return _vm.$modal.hide("add")
              }
            }
          },
          [_vm._v("close")]
        )
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
          _c("vs-divider", { attrs: { position: "left" } }, [
            _vm._v("ពត៌មានសិស្ស")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("div", { staticClass: "vx-col lg:w-3/4 w-full" }, [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/4 w-full" },
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
                      staticClass: "w-full mt-6",
                      attrs: {
                        "label-placeholder": "គោតនាម នាម",
                        name: "name"
                      },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.storeStudent($event)
                        }
                      },
                      model: {
                        value: _vm.data.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "name", $$v)
                        },
                        expression: "data.name"
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
                            value: _vm.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("name")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/4 w-full" },
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
                      staticClass: "w-full mt-6",
                      attrs: {
                        "label-placeholder": "គោតនាម នាមឡាតាំង",
                        name: "latin"
                      },
                      model: {
                        value: _vm.data.latin,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "latin", $$v)
                        },
                        expression: "data.latin"
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
                            value: _vm.errors.has("latin"),
                            expression: "errors.has('latin')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("latin")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/4 w-full" },
                  [
                    _c(
                      "vs-select",
                      {
                        staticClass: "w-full",
                        attrs: { label: "ភេទ" },
                        model: {
                          value: _vm.data.gender,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "gender", $$v)
                          },
                          expression: "data.gender"
                        }
                      },
                      [
                        _c("vs-select-item", {
                          attrs: { value: "ប្រុស", text: "ប្រុស" }
                        }),
                        _vm._v(" "),
                        _c("vs-select-item", {
                          attrs: { value: "ស្រី", text: "ស្រី" }
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
                  { staticClass: "vx-col lg:w-1/4" },
                  [
                    _c("label", [_vm._v("ថ្ងៃខែឆ្មាំកំណើត")]),
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
                      attrs: { placeholder: "ថ្ងៃខែឆ្មាំកំណើត", name: "dob" },
                      model: {
                        value: _vm.data.dob,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "dob", $$v)
                        },
                        expression: "data.dob"
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
                            value: _vm.errors.has("dob"),
                            expression: "errors.has('dob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("dob")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-3/3 w-full mt-6" },
                  [
                    _c("label", [_vm._v("ទំនាក់ទំនង")]),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { label: "ទំនាក់ទំនង", name: "std_contact" },
                      model: {
                        value: _vm.data.std_contact,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "std_contact", $$v)
                        },
                        expression: "data.std_contact"
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
                            value: _vm.errors.has("std_contact"),
                            expression: "errors.has('std_contact')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("std_contact")))]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
              [
                _c("vue-dropzone", {
                  ref: "myVueDropzone",
                  staticClass: "max-content p-1",
                  attrs: {
                    duplicateCheck: "",
                    id: "dropzone",
                    options: _vm.dropzoneOptions
                  },
                  on: { "vdropzone-success": _vm.successUpload }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/2 w-full" },
              [
                _c("label", [_vm._v("ទីកន្លែងកំណើត")]),
                _vm._v(" "),
                _c("vs-textarea", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: { label: "ទីកន្លែងកំណើត", name: "pob" },
                  model: {
                    value: _vm.data.pob,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "pob", $$v)
                    },
                    expression: "data.pob"
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
                        value: _vm.errors.has("pob"),
                        expression: "errors.has('pob')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("pob")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/2 w-full" },
              [
                _c("label", [_vm._v("អាស័យដ្ឋានបច្ចុប្បន្ន")]),
                _vm._v(" "),
                _c("vs-textarea", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: { label: "អាស័យដ្ឋានបច្ចុប្បន្ន", name: "address" },
                  model: {
                    value: _vm.data.address,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "address", $$v)
                    },
                    expression: "data.address"
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
                        value: _vm.errors.has("address"),
                        expression: "errors.has('address')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("address")))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider", { attrs: { position: "left" } }, [
            _vm._v("ពត៌មានអាណាព្យាបាល")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col md:w-1/2" },
              [
                _c("vs-divider", { attrs: { position: "left-center" } }, [
                  _vm._v("ឪពុក")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full" },
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
                        staticClass: "w-full mt-6",
                        attrs: {
                          "label-placeholder": "គោតនាម នាម",
                          name: "father_name"
                        },
                        model: {
                          value: _vm.data.father_name,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "father_name", $$v)
                          },
                          expression: "data.father_name"
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
                              value: _vm.errors.has("father_name"),
                              expression: "errors.has('father_name')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("father_name")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full" },
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
                        staticClass: "w-full mt-6",
                        attrs: {
                          "label-placeholder": "មុខរបរ",
                          name: "father_job"
                        },
                        model: {
                          value: _vm.data.father_job,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "father_job", $$v)
                          },
                          expression: "data.father_job"
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
                              value: _vm.errors.has("father_job"),
                              expression: "errors.has('father_job')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("father_job")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("label", [_vm._v("ទំនាក់ទំនង")]),
                      _vm._v(" "),
                      _c("vs-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: { label: "ទំនាក់ទំនង", name: "father_contact" },
                        model: {
                          value: _vm.data.father_contact,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "father_contact", $$v)
                          },
                          expression: "data.father_contact"
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
                              value: _vm.errors.has("father_contact"),
                              expression: "errors.has('father_contact')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("father_contact")))]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col md:w-1/2" },
              [
                _c("vs-divider", { attrs: { position: "left-center" } }, [
                  _vm._v("ម្តាយ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full" },
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
                        staticClass: "w-full mt-6",
                        attrs: {
                          "label-placeholder": "គោតនាម នាម",
                          name: "mother_name"
                        },
                        model: {
                          value: _vm.data.mother_name,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "mother_name", $$v)
                          },
                          expression: "data.mother_name"
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
                              value: _vm.errors.has("mother_name"),
                              expression: "errors.has('mother_name')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("mother_name")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full" },
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
                        staticClass: "w-full mt-6",
                        attrs: {
                          "label-placeholder": "មុខរបរ",
                          name: "mother_job"
                        },
                        model: {
                          value: _vm.data.mother_job,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "mother_job", $$v)
                          },
                          expression: "data.mother_job"
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
                              value: _vm.errors.has("mother_job"),
                              expression: "errors.has('mother_job')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("mother_job")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("label", [_vm._v("ទំនាក់ទំនង")]),
                      _vm._v(" "),
                      _c("vs-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: { label: "ទំនាក់ទំនង", name: "mother_contact" },
                        model: {
                          value: _vm.data.mother_contact,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "mother_contact", $$v)
                          },
                          expression: "data.mother_contact"
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
                              value: _vm.errors.has("mother_contact"),
                              expression: "errors.has('mother_contact')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("mother_contact")))]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ]),
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
                  on: { click: _vm.storeStudent }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        width: "1500",
        height: "auto",
        scrollable: true,
        pivotY: 0.2,
        adaptive: true,
        clickToClose: false,
        name: "edit"
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
                return _vm.$modal.hide("edit")
              }
            }
          },
          [_vm._v("close")]
        )
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
          _c("vs-divider", { attrs: { position: "left" } }, [
            _vm._v("ពត៌មានសិស្ស")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("div", { staticClass: "vx-col lg:w-3/4 w-full" }, [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/3 w-full" },
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
                      staticClass: "w-full mt-6",
                      attrs: {
                        "label-placeholder": "គោតនាម នាម",
                        name: "name"
                      },
                      model: {
                        value: _vm.data.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "name", $$v)
                        },
                        expression: "data.name"
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
                            value: _vm.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("name")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/3 w-full" },
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
                      staticClass: "w-full mt-6",
                      attrs: {
                        "label-placeholder": "គោតនាម នាមឡាតាំង",
                        name: "latin"
                      },
                      model: {
                        value: _vm.data.latin,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "latin", $$v)
                        },
                        expression: "data.latin"
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
                            value: _vm.errors.has("latin"),
                            expression: "errors.has('latin')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("latin")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/3 w-full" },
                  [
                    _c(
                      "vs-select",
                      {
                        staticClass: "w-full",
                        attrs: { label: "ភេទ" },
                        model: {
                          value: _vm.data.gender,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "gender", $$v)
                          },
                          expression: "data.gender"
                        }
                      },
                      [
                        _c("vs-select-item", {
                          attrs: { value: "ប្រុស", text: "ប្រុស" }
                        }),
                        _vm._v(" "),
                        _c("vs-select-item", {
                          attrs: { value: "ស្រី", text: "ស្រី" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/3 w-full mt-6" },
                  [
                    _c("label", [_vm._v("ថ្ងៃខែឆ្មាំកំណើត")]),
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
                      attrs: { placeholder: "ថ្ងៃខែឆ្មាំកំណើត", name: "dob" },
                      model: {
                        value: _vm.data.dob,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "dob", $$v)
                        },
                        expression: "data.dob"
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
                            value: _vm.errors.has("dob"),
                            expression: "errors.has('dob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("dob")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-2/3 w-full mt-6" },
                  [
                    _c("label", [_vm._v("ទំនាក់ទំនង")]),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { label: "ទំនាក់ទំនង", name: "std_contact" },
                      model: {
                        value: _vm.data.std_contact,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "std_contact", $$v)
                        },
                        expression: "data.std_contact"
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
                            value: _vm.errors.has("std_contact"),
                            expression: "errors.has('std_contact')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("std_contact")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/2 w-full" },
                  [
                    _c("label", [_vm._v("ទីកន្លែងកំណើត")]),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { label: "ទីកន្លែងកំណើត", name: "pob" },
                      model: {
                        value: _vm.data.pob,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "pob", $$v)
                        },
                        expression: "data.pob"
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
                            value: _vm.errors.has("pob"),
                            expression: "errors.has('pob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("pob")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col lg:w-1/2 w-full" },
                  [
                    _c("label", [_vm._v("អាស័យដ្ឋានបច្ចុប្បន្ន")]),
                    _vm._v(" "),
                    _c("vs-textarea", {
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
                        label: "អាស័យដ្ឋានបច្ចុប្បន្ន",
                        name: "address"
                      },
                      model: {
                        value: _vm.data.address,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "address", $$v)
                        },
                        expression: "data.address"
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
                            value: _vm.errors.has("address"),
                            expression: "errors.has('address')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("address")))]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
              [
                _c("vue-dropzone", {
                  ref: "myVueDropzone",
                  staticClass: "max-content p-1",
                  attrs: {
                    duplicateCheck: "",
                    id: "dropzone",
                    options: _vm.dropzoneOptions
                  },
                  on: {
                    "vdropzone-mounted": _vm.loadPhoto,
                    "vdropzone-success": _vm.successUpload
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider", { attrs: { position: "left" } }, [
            _vm._v("ពត៌មានអាណាព្យាបាល")
          ]),
          _vm._v(" "),
          _c("vs-divider", { attrs: { position: "left-center" } }, [
            _vm._v("ឪពុក")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
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
                  staticClass: "w-full mt-6",
                  attrs: {
                    "label-placeholder": "គោតនាម នាម",
                    name: "father_name"
                  },
                  model: {
                    value: _vm.data.father_name,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "father_name", $$v)
                    },
                    expression: "data.father_name"
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
                        value: _vm.errors.has("father_name"),
                        expression: "errors.has('father_name')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("father_name")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
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
                  staticClass: "w-full mt-6",
                  attrs: { "label-placeholder": "មុខរបរ", name: "father_job" },
                  model: {
                    value: _vm.data.father_job,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "father_job", $$v)
                    },
                    expression: "data.father_job"
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
                        value: _vm.errors.has("father_job"),
                        expression: "errors.has('father_job')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("father_job")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
              [
                _c("label", [_vm._v("ទំនាក់ទំនង")]),
                _vm._v(" "),
                _c("vs-textarea", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: { label: "ទំនាក់ទំនង", name: "father_contact" },
                  model: {
                    value: _vm.data.father_contact,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "father_contact", $$v)
                    },
                    expression: "data.father_contact"
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
                        value: _vm.errors.has("father_contact"),
                        expression: "errors.has('father_contact')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("father_contact")))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider", { attrs: { position: "left-center" } }, [
            _vm._v("ម្តាយ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
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
                  staticClass: "w-full mt-6",
                  attrs: {
                    "label-placeholder": "គោតនាម នាម",
                    name: "mother_name"
                  },
                  model: {
                    value: _vm.data.mother_name,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "mother_name", $$v)
                    },
                    expression: "data.mother_name"
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
                        value: _vm.errors.has("mother_name"),
                        expression: "errors.has('mother_name')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("mother_name")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
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
                  staticClass: "w-full mt-6",
                  attrs: { "label-placeholder": "មុខរបរ", name: "mother_job" },
                  model: {
                    value: _vm.data.mother_job,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "mother_job", $$v)
                    },
                    expression: "data.mother_job"
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
                        value: _vm.errors.has("mother_job"),
                        expression: "errors.has('mother_job')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("mother_job")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/4 w-full" },
              [
                _c("label", [_vm._v("ទំនាក់ទំនង")]),
                _vm._v(" "),
                _c("vs-textarea", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: { label: "ទំនាក់ទំនង", name: "mother_contact" },
                  model: {
                    value: _vm.data.mother_contact,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "mother_contact", $$v)
                    },
                    expression: "data.mother_contact"
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
                        value: _vm.errors.has("mother_contact"),
                        expression: "errors.has('mother_contact')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("mother_contact")))]
                )
              ],
              1
            )
          ]),
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
                    icon: "icon-edit",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.updateStudent }
                },
                [_vm._v("កែប្រែ")]
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

/***/ "./resources/js/src/views/student/Student.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/student/Student.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Student.vue?vue&type=template&id=422176a6&scoped=true& */ "./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true&");
/* harmony import */ var _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Student.vue?vue&type=script&lang=js& */ "./resources/js/src/views/student/Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "422176a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/student/Student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/student/Student.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/student/Student.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/Student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Student.vue?vue&type=template&id=422176a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/Student.vue?vue&type=template&id=422176a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_422176a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/student/addStudent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/student/addStudent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addStudent.vue?vue&type=template&id=61a22838&scoped=true& */ "./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true&");
/* harmony import */ var _addStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStudent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61a22838",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/student/addStudent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addStudent.vue?vue&type=template&id=61a22838&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/addStudent.vue?vue&type=template&id=61a22838&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudent_vue_vue_type_template_id_61a22838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/student/editStudent.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/student/editStudent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editStudent.vue?vue&type=template&id=48d03f63&scoped=true& */ "./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true&");
/* harmony import */ var _editStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editStudent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48d03f63",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/student/editStudent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/editStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editStudent.vue?vue&type=template&id=48d03f63&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/student/editStudent.vue?vue&type=template&id=48d03f63&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStudent_vue_vue_type_template_id_48d03f63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);