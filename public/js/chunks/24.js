(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sass/vuexy/extraComponents/agGridStyleOverride.scss */ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addStudent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addStudent */ "./resources/js/src/views/student/addStudent.vue");
/* harmony import */ var _editStudent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editStudent */ "./resources/js/src/views/student/editStudent.vue");
/* harmony import */ var _addStudyInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addStudyInfo */ "./resources/js/src/views/student/addStudyInfo.vue");
/* harmony import */ var _addServiceInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addServiceInfo */ "./resources/js/src/views/student/addServiceInfo.vue");


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
//ag-grid






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Student",
  components: {
    AddServiceInfo: _addServiceInfo__WEBPACK_IMPORTED_MODULE_6__["default"],
    AddStudyInfo: _addStudyInfo__WEBPACK_IMPORTED_MODULE_5__["default"],
    EditStudent: _editStudent__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddStudent: _addStudent__WEBPACK_IMPORTED_MODULE_3__["default"],
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"]
  },
  data: function data() {
    return {
      selected: [],
      gridApi: null,
      columnDefs: [{
        headerName: 'ល.រ',
        field: 'id',
        checkboxSelection: true
      }, {
        headerName: 'ឈ្មោះ',
        field: 'name'
      }, {
        headerName: 'ឈ្មោះឡាតាំង',
        field: 'latin'
      }, {
        headerName: 'ថ្ងៃខែឆ្នាំកំណើត',
        field: 'dob'
      }, {
        headerName: 'ទំនាក់ទំនង',
        field: 'std_contact'
      }, {
        headerName: 'អាស័យដ្ឋានបច្ចុប្បន្ន',
        field: 'address'
      }, {
        headerName: 'ស្ថានភាព',
        field: 'status'
      }, {
        headerName: 'ថ្នាក់បណ្តុះអាសន្ន',
        field: 'temp_grade'
      }, {
        headerName: 'កាលបរិច្ឆេទ',
        field: 'created_at'
      }],
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
      }
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
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
    },
    onSelectionChanged: function onSelectionChanged() {
      this.selected = this.gridApi.getSelectedRows();
    },
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
              });
              self.resetField();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*=========================================================================================\n    File Name: agGridStyleOverride.scss\n    Description: Override ag-grid table style/SASS vars\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/**\n ****************************\n * Generic Styles\n ****************************\n*/\n\nag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {\n  display: block;\n}\n\n.ag-hidden {\n  display: none !important;\n}\n\n.ag-invisible {\n  visibility: hidden !important;\n}\n\n.ag-faded {\n  opacity: 0.3;\n}\n\n.ag-width-half {\n  display: inline-block;\n  width: 50% !important;\n}\n\n.ag-unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.ag-selectable {\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n\n.ag-select-agg-func-popup {\n  position: absolute;\n}\n\n.ag-input-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-ltr ;\n          animation-name:  ag-shake-left-to-right-ltr ;\n}\n\n[dir=rtl] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-rtl ;\n          animation-name:  ag-shake-left-to-right-rtl ;\n}\n\n@-webkit-keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@-webkit-keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n.ag-root-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-root-wrapper.ag-layout-normal {\n  height: 100%;\n}\n\n.ag-root-wrapper .ag-watermark {\n  position: absolute;\n  bottom: 10px;\n  opacity: 0.5;\n  -webkit-transition: opacity 1s ease-out 3s;\n  transition: opacity 1s ease-out 3s;\n}\n\n[dir=ltr] .ag-root-wrapper .ag-watermark {\n  right: 25px;\n}\n\n[dir=rtl] .ag-root-wrapper .ag-watermark {\n  left: 25px;\n}\n\n.ag-root-wrapper .ag-watermark:before {\n  content: \"\";\n  -webkit-filter: invert(50%);\n          filter: invert(50%);\n  display: block;\n  height: 60px;\n  width: 110px;\n}\n\n[dir] .ag-root-wrapper .ag-watermark:before {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-size: 110px 60px;\n}\n\n.ag-root-wrapper .ag-watermark .ag-watermark-text {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact;\n  font-size: 19px;\n}\n\n.ag-root-wrapper-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.ag-root-wrapper-body.ag-layout-normal {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 0;\n  min-height: 0;\n}\n\n.ag-root {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir] .ag-root {\n  cursor: default;\n}\n\n.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 0;\n}\n\n.ag-root.ag-layout-normal {\n  height: 100%;\n}\n\n/**\n ****************************\n * Viewports\n ****************************\n*/\n\n.ag-header-viewport,\n.ag-floating-top-viewport,\n.ag-body-viewport,\n.ag-pinned-left-cols-viewport,\n.ag-center-cols-viewport,\n.ag-pinned-right-cols-viewport,\n.ag-floating-bottom-viewport,\n.ag-body-horizontal-scroll-viewport,\n.ag-virtual-list-viewport {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-body-viewport {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-body-viewport.ag-layout-normal {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {\n  overflow-y: scroll;\n}\n\n.ag-pinned-left-cols-viewport, .ag-pinned-right-cols-viewport {\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.ag-body-horizontal-scroll-viewport {\n  overflow-x: scroll;\n}\n\n.ag-virtual-list-viewport {\n  overflow: auto;\n  width: 100%;\n}\n\n/**\n ****************************\n * Containers\n ****************************\n*/\n\n.ag-header-container,\n.ag-floating-top-container,\n.ag-body-container,\n.ag-pinned-right-cols-container,\n.ag-center-cols-container,\n.ag-pinned-left-cols-container,\n.ag-floating-bottom-container,\n.ag-body-horizontal-scroll-container,\n.ag-full-width-container,\n.ag-floating-bottom-full-width-container,\n.ag-virtual-list-container {\n  position: relative;\n}\n\n.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.ag-body-viewport .ag-center-cols-clipper {\n  min-height: 100%;\n}\n\n.ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {\n  min-height: 50px;\n}\n\n.ag-body-viewport .ag-center-cols-container {\n  display: block;\n}\n\n.ag-body-viewport.ag-layout-print {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-body-viewport.ag-layout-print .ag-center-cols-clipper {\n  min-width: 100%;\n}\n\n.ag-pinned-right-cols-container {\n  display: block;\n}\n\n.ag-body-horizontal-scroll-container {\n  height: 100%;\n}\n\n.ag-full-width-container,\n.ag-floating-top-full-width-container,\n.ag-floating-bottom-full-width-container {\n  position: absolute;\n  top: 0px;\n  pointer-events: none;\n}\n\n[dir=ltr] .ag-full-width-container, [dir=ltr] .ag-floating-top-full-width-container, [dir=ltr] .ag-floating-bottom-full-width-container {\n  left: 0px;\n}\n\n[dir=rtl] .ag-full-width-container, [dir=rtl] .ag-floating-top-full-width-container, [dir=rtl] .ag-floating-bottom-full-width-container {\n  right: 0px;\n}\n\n.ag-full-width-container {\n  width: 100%;\n}\n\n.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-virtual-list-container {\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Scrollers\n ****************************\n*/\n\n.ag-center-cols-clipper {\n  -webkit-box-flex: 1;\n          flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.ag-body-horizontal-scroll {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n\n.ag-layout-print .ag-body-horizontal-scroll {\n  display: none;\n}\n\n.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {\n  height: 100%;\n  min-width: 0;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n  overflow-x: scroll;\n}\n\n.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {\n  overflow-x: hidden;\n}\n\n/**\n ****************************\n * Headers\n ****************************\n*/\n\n.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {\n  display: inline-block;\n  overflow: hidden;\n}\n\n[dir] .ag-header .ag-header-cell-sortable, [dir] .ag-pinned-left-header .ag-header-cell-sortable, [dir] .ag-pinned-right-header .ag-header-cell-sortable {\n  cursor: pointer;\n}\n\n.ag-header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.ag-header-icon {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-header {\n  height: 100%;\n}\n\n.ag-pinned-right-header {\n  height: 100%;\n}\n\n.ag-header-row {\n  position: absolute;\n  overflow: hidden;\n}\n\n.ag-header-overlay {\n  display: block;\n  position: absolute;\n}\n\n.ag-header-cell {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n}\n\n.ag-header-group-cell-label, .ag-header-cell-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n  -webkit-box-align: center;\n          align-items: center;\n  text-overflow: ellipsis;\n  align-self: stretch;\n}\n\n.ag-header-cell-label .ag-header-cell-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-numeric-header .ag-header-cell-label {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.ag-header-group-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-header-cell-resize {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 4px;\n}\n\n[dir=ltr] .ag-header-expand-icon {\n  padding-left: 4px;\n}\n\n[dir=rtl] .ag-header-expand-icon {\n  padding-right: 4px;\n}\n\n.ag-header-select-all {\n  display: -webkit-box;\n  display: flex;\n}\n\n/**\n ****************************\n * Columns\n ****************************\n*/\n\n[dir=ltr] .ag-column-moving .ag-cell {\n  -webkit-transition: left 0.2s;\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-cell {\n  -webkit-transition: right 0.2s;\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-cell {\n  -webkit-transition: left 0.2s;\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-cell {\n  -webkit-transition: right 0.2s;\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-group-cell {\n  -webkit-transition: left 0.2s, width 0.2s;\n  transition: left 0.2s, width 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-group-cell {\n  -webkit-transition: right 0.2s, width 0.2s;\n  transition: right 0.2s, width 0.2s;\n}\n\n/**\n ****************************\n * Column Panel\n ****************************\n*/\n\n.ag-column-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 4;\n          flex-grow: 4;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper input {\n  width: 100%;\n}\n\n.ag-column-select-panel .ag-primary-cols-list-panel {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: auto;\n}\n\n.ag-column-drop {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: auto;\n  width: 100%;\n}\n\n.ag-column-drop .ag-column-drop-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell .ag-column-drop-cell-text {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-drop.ag-column-drop-vertical {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 0;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.ag-column-drop.ag-column-drop-vertical > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-list {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow-x: auto;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message {\n  display: block;\n}\n\n.ag-column-drop.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Rows\n ****************************\n*/\n\n.ag-row-animation .ag-row {\n  -webkit-transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n  transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n}\n\n.ag-row-no-animation .ag-row {\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n\n.ag-row {\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-row-position-absolute {\n  position: absolute;\n}\n\n.ag-row-position-relative {\n  position: relative;\n}\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all;\n}\n\n.ag-row-inline-editing {\n  z-index: 1;\n}\n\n.ag-row-dragging {\n  z-index: 2;\n}\n\n.ag-stub-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n/**\n ****************************\n * Cells\n ****************************\n*/\n\n.ag-cell {\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-cell-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-cell-wrapper.ag-row-group {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.ag-cell-wrapper .ag-cell-value, .ag-cell-wrapper .ag-group-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-full-width-row.ag-row-group .ag-cell-wrapper {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-cell-with-height {\n  height: 100%;\n}\n\n.ag-group-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-footer-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-cell-inline-editing {\n  z-index: 1;\n}\n\n.ag-cell-inline-editing .ag-cell-edit-input, .ag-cell-inline-editing .ag-input-wrapper {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n}\n\n/**\n ****************************\n * Filters\n ****************************\n*/\n\n.ag-set-filter-item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-set-filter-item > div, .ag-set-filter-item > span {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-filter .ag-filter-checkbox {\n  pointer-events: none;\n}\n\n.ag-filter .ag-filter-body-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-filter .ag-filter-filter {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n/**\n ****************************\n * Floating Filter\n ****************************\n*/\n\n.ag-floating-filter-full-body .ag-react-container, .ag-floating-filter-body .ag-react-container {\n  height: 100%;\n}\n\n.ag-floating-filter-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-floating-filter-body input {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  max-height: calc(100% - 1px);\n}\n\n[dir] .ag-floating-filter-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-floating-filter-full-body > div {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-floating-filter-full-body input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-full-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body input[type=range] {\n  height: 100%;\n}\n\n.ag-floating-filter {\n  display: inline-block;\n  position: absolute;\n}\n\n.ag-floating-filter-input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-input:-moz-read-only {\n  background-color: #eee;\n}\n\n[dir] .ag-floating-filter-input:read-only {\n  background-color: #eee;\n}\n\n.ag-floating-filter-menu {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-floating-filter-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n/**\n ****************************\n * Drag & Drop\n ****************************\n*/\n\n.ag-dnd-ghost {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10;\n}\n\n[dir] .ag-dnd-ghost {\n  background: #e5e5e5;\n  border: 1px solid black;\n  cursor: move;\n  padding: 3px;\n}\n\n[dir] .ag-dnd-ghost-icon {\n  padding: 2px;\n}\n\n/**\n ****************************\n * Overlay\n ****************************\n*/\n\n.ag-overlay {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-overlay {\n  left: 0;\n}\n\n[dir=rtl] .ag-overlay {\n  right: 0;\n}\n\n.ag-overlay-panel {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n  width: 100%;\n}\n\n.ag-overlay-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n[dir] .ag-overlay-wrapper {\n  text-align: center;\n}\n\n.ag-overlay-wrapper.ag-overlay-loading-wrapper {\n  pointer-events: all;\n}\n\n[dir] .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n  padding-top: 30px;\n}\n\n/**\n ****************************\n * Popup\n ****************************\n*/\n\n.ag-popup > div {\n  z-index: 5;\n}\n\n.ag-popup-backdrop {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-popup-backdrop {\n  left: 0;\n}\n\n[dir=rtl] .ag-popup-backdrop {\n  right: 0;\n}\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n/**\n ****************************\n * Virtual Lists\n ****************************\n*/\n\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%;\n}\n\n[dir=ltr] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-right: 1px solid transparent;\n}\n\n/**\n ****************************\n * Floating Top and Bottom\n ****************************\n*/\n\n.ag-floating-top {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-floating-bottom {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n/**\n ****************************\n * Dialog\n ****************************\n*/\n\n.ag-dialog, .ag-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-title-bar, .ag-panel .ag-title-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-dialog .ag-title-bar, [dir] .ag-panel .ag-title-bar {\n  cursor: default;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-title, .ag-panel .ag-title-bar .ag-title-bar-title {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-buttons, .ag-panel .ag-title-bar .ag-title-bar-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-dialog .ag-title-bar .ag-title-bar-buttons .ag-button, [dir] .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  cursor: pointer;\n}\n\n.ag-dialog .ag-panel-content-wrapper, .ag-panel .ag-panel-content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-panel-content-wrapper > div, .ag-panel .ag-panel-content-wrapper > div {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-dialog {\n  position: absolute;\n}\n\n.ag-dialog .ag-resizer {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topLeft {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-top {\n  top: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-top {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-top {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-top {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topRight {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-right {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-right {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-right {\n  right: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-right {\n  left: 0;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottom {\n  bottom: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-left {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-left {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-left {\n  left: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-left {\n  right: 0;\n}\n\n.ag-dialog .ag-message-box {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-button-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/**\n ****************************\n * Tooltip\n ****************************\n*/\n\n.ag-tooltip {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999;\n}\n\n.ag-chart-tooltip {\n  display: table;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  white-space: nowrap;\n  z-index: 99999;\n  font: 12px Verdana, sans-serif;\n  color: black;\n  opacity: 0;\n  -webkit-transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n[dir] .ag-chart-tooltip {\n  background: #f4f4f4;\n  border-radius: 5px;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n\n[dir=ltr] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), 0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n[dir=rtl] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), -0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n.ag-chart-tooltip.visible {\n  opacity: 1;\n}\n\n[dir] .ag-chart-tooltip.visible {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.ag-chart-tooltip .title {\n  font-weight: bold;\n  color: white;\n}\n\n[dir] .ag-chart-tooltip .title {\n  padding: 7px;\n  background-color: #888888;\n}\n\n[dir=ltr] .ag-chart-tooltip .title {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n[dir=rtl] .ag-chart-tooltip .title {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.ag-chart-tooltip .content {\n  line-height: 1.7em;\n}\n\n[dir] .ag-chart-tooltip .content {\n  padding: 7px;\n}\n\n/**\n ****************************\n * Animations\n ****************************\n*/\n\n.ag-value-slide-out {\n  opacity: 1;\n}\n\n[dir] .ag-value-slide-out {\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n\n[dir=ltr] .ag-value-slide-out {\n  margin-right: 5px;\n  -webkit-transition: opacity 3s, margin-right 3s;\n  transition: opacity 3s, margin-right 3s;\n}\n\n[dir=rtl] .ag-value-slide-out {\n  margin-left: 5px;\n  -webkit-transition: opacity 3s, margin-left 3s;\n  transition: opacity 3s, margin-left 3s;\n}\n\n.ag-value-slide-out-end {\n  opacity: 0;\n}\n\n[dir=ltr] .ag-value-slide-out-end {\n  margin-right: 10px;\n}\n\n[dir=rtl] .ag-value-slide-out-end {\n  margin-left: 10px;\n}\n\n.ag-opacity-zero {\n  opacity: 0 !important;\n}\n\n/**\n ****************************\n * Menu\n ****************************\n*/\n\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-menu-column-select-wrapper {\n  height: 265px;\n  overflow: auto;\n  width: 200px;\n}\n\n.ag-menu-list {\n  display: table;\n}\n\n.ag-menu-option, .ag-menu-separator {\n  display: table-row;\n}\n\n.ag-menu-option > span, .ag-menu-separator > span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.ag-menu-option-text {\n  white-space: nowrap;\n}\n\n.ag-menu-column-select-wrapper .ag-column-select-panel {\n  height: 100%;\n}\n\n/**\n ****************************\n * Rich Select\n ****************************\n*/\n\n.ag-rich-select {\n  outline: none;\n}\n\n[dir] .ag-rich-select {\n  cursor: default;\n}\n\n.ag-rich-select .ag-rich-select-value {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-rich-select .ag-rich-select-value > span {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-rich-select .ag-rich-select-value > span.ag-icon {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item .ag-rich-select-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: nowrap;\n}\n\n/**\n ****************************\n * Pagination\n ****************************\n*/\n\n.ag-paging-panel {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.ag-paging-panel .ag-paging-row-summary-panel {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-paging-panel .ag-paging-row-summary-panel span {\n  margin: 0 3px;\n}\n\n.ag-paging-page-summary-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-paging-page-summary-panel .ag-disabled {\n  pointer-events: none;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button {\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button button {\n  position: absolute;\n}\n\n/**\n ****************************\n * Tool Panel\n ****************************\n*/\n\n.ag-tool-panel-wrapper {\n  display: -webkit-box;\n  display: flex;\n  overflow-y: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 200px;\n}\n\n[dir] .ag-tool-panel-wrapper {\n  cursor: default;\n}\n\n.ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  line-height: 1.5;\n}\n\n[dir] .ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  cursor: pointer;\n}\n\n.ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-tool-panel-column .ag-column-tool-panel-column,\n.ag-column-tool-panel-column .ag-column-tool-panel-column-group,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-column-select-checkbox {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-tool-panel-horizontal-resize {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1;\n}\n\n[dir] .ag-tool-panel-horizontal-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-rtl .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(3px);\n          transform: translateX(3px);\n}\n\n[dir=rtl] .ag-rtl .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n}\n\n[dir=ltr] .ag-ltr .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n}\n\n[dir=rtl] .ag-ltr .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(3px);\n          transform: translateX(3px);\n}\n\n.loading-filter {\n  height: 100%;\n  position: absolute;\n  top: 34px;\n  width: 100%;\n  z-index: 1;\n}\n\n[dir] .loading-filter {\n  background-color: #e6e6e6;\n  padding: 5px;\n}\n\n.ag-details-row {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-details-grid {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-header-group-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n}\n\n.ag-cell-label-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.ag-numeric-header .ag-cell-label-container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n/**\n ****************************\n * Side Bar\n ****************************\n*/\n\n.ag-side-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.ag-side-bar .ag-side-buttons div button {\n  display: block;\n  white-space: nowrap;\n  outline: none;\n}\n\n[dir] .ag-side-bar .ag-side-buttons div button {\n  cursor: pointer;\n}\n\n.ag-side-bar .ag-side-buttons div button span:not(.ag-icon) {\n  -webkit-writing-mode: tb;\n      -ms-writing-mode: tb;\n          writing-mode: tb;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\n\n.ag-side-bar .panel-container {\n  width: 180px;\n}\n\n.ag-side-bar.full-width .panel-container {\n  width: 200px;\n}\n\n.ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon) {\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n}\n\n/**\n ****************************\n * Status Bar\n ****************************\n*/\n\n.ag-status-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n\n.ag-status-bar .ag-status-panel {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-left {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-center {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-right {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n/**\n ****************************\n * Widgets\n ****************************\n*/\n\n.ag-group-component {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 100%;\n}\n\n.ag-group-component .ag-group-component-title-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component .ag-group-component-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component .ag-group-component-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-group-component .ag-group-component-container .ag-group-subgroup {\n  display: -webkit-box;\n  display: flex;\n  align-self: stretch;\n}\n\n.ag-group-component .ag-group-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component.ag-disabled .ag-group-component-container {\n  pointer-events: none;\n}\n\n.ag-group-component.ag-collapsed .ag-group-component-toolbar, .ag-group-component.ag-collapsed .ag-group-component-container {\n  display: none;\n}\n\n.ag-toggle-button .ag-input-wrapper .ag-icon {\n  position: absolute;\n  top: -1px;\n}\n\n[dir=ltr] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  -webkit-transition: right 0.3s;\n  transition: right 0.3s;\n}\n\n[dir=rtl] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n\n.ag-input-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-input-field input, .ag-input-field select, .ag-input-field textarea {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n}\n\n.ag-range-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper, .ag-slider > .ag-wrapper, .ag-angle-select > .ag-wrapper {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-picker-field > .ag-wrapper > div, .ag-slider > .ag-wrapper > div, .ag-angle-select > .ag-wrapper > div {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-angle-select {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  display: block;\n  position: relative;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-child-circle {\n  position: absolute;\n}\n\n.ag-picker-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper > button {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-picker-field > .ag-wrapper > button {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.ag-color-picker > .ag-wrapper {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  overflow: hidden;\n}\n\n[dir] .ag-color-picker button {\n  cursor: pointer;\n}\n\n.ag-labeled.ag-label-align-right label {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.ag-labeled.ag-label-align-right > div {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-labeled.ag-label-align-top {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.ag-labeled.ag-label-align-top > div {\n  align-self: stretch;\n}\n\n.ag-color-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir] .ag-color-panel {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-color {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir] .ag-color-panel .ag-spectrum-color {\n  cursor: default;\n}\n\n.ag-color-panel .ag-fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n\n[dir=ltr] .ag-color-panel .ag-fill {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] .ag-color-panel .ag-fill {\n  right: 0;\n  left: 0;\n}\n\n[dir] .ag-color-panel .ag-spectrum-val {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-dragger {\n  position: absolute;\n  pointer-events: none;\n}\n\n[dir] .ag-color-panel .ag-spectrum-dragger {\n  cursor: pointer;\n}\n\n[dir] .ag-color-panel .ag-spectrum-hue {\n  cursor: default;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-hue {\n  background: -webkit-gradient(linear, right top, left top, color-stop(3%, #ff0000), color-stop(17%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(83%, #ff00ff), to(#ff0000));\n  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-hue {\n  background: -webkit-gradient(linear, left top, right top, color-stop(3%, #ff0000), color-stop(17%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(83%, #ff00ff), to(#ff0000));\n  background: linear-gradient(to right, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir] .ag-color-panel .ag-spectrum-alpha {\n  cursor: default;\n}\n\n.ag-color-panel .ag-spectrum-hue-background {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-color-panel .ag-spectrum-alpha-background {\n  width: 100%;\n  height: 100%;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(black));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), to(black));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), black);\n}\n\n[dir] .ag-color-panel .ag-hue-alpha {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-slider {\n  position: absolute;\n  pointer-events: none;\n}\n\n.ag-color-panel .ag-spectrum-text-value {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n[dir] .ag-color-panel .ag-spectrum-text-value {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-text-value:focus {\n  outline: none;\n  outline-offset: 0;\n}\n\n.ag-color-panel .ag-recent-colors {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-color-panel .ag-recent-colors > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr {\n  direction: ltr;\n}\n\n[dir=rtl] .ag-ltr {\n  direction: rtl;\n}\n\n.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n[dir=ltr] .ag-ltr .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=ltr] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl {\n  direction: rtl;\n}\n\n[dir=rtl] .ag-rtl {\n  direction: ltr;\n}\n\n.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n[dir=ltr] .ag-rtl .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n@media print {\n  .ag-body-viewport {\n    display: block;\n  }\n\n  .ag-row {\n    page-break-inside: avoid;\n  }\n}\n\n.ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-chart {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-chart .ag-chart-components-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper canvas {\n  display: block;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  position: absolute;\n  top: 10px;\n  width: 24px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir=ltr] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  right: 20px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  left: 20px;\n}\n\n.ag-chart:not(.ag-has-menu):hover .ag-chart-menu {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ag-chart .ag-chart-docked-container {\n  position: relative;\n  width: 0;\n  min-width: 0;\n  -webkit-transition: min-width 0.4s;\n  transition: min-width 0.4s;\n}\n\n[dir=ltr] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 0 0 1px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 1px 0 0;\n}\n\n.ag-chart-tabbed-menu > div {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-header {\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-header {\n  cursor: default;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body > div {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper {\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 30px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  opacity: 0.2;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  opacity: 1;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn {\n  position: relative;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  position: absolute;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container .ag-chart-mini-thumbnail {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition: right 0.3s;\n  transition: right 0.3s;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  cursor: pointer;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail canvas {\n  display: block;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper, .ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper > div, .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div, [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  margin: 0;\n  padding-bottom: 2px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div:not(:first-child), [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div:not(:first-child) {\n  margin-top: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper .ag-group-component .ag-group-subgroup {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty > canvas {\n  visibility: hidden;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty .ag-chart-empty-text {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-chart .ag-chart-empty-text {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.ag-chart .ag-chart-menu {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ag-chart .ag-chart-menu > span {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-chart .ag-chart-menu > span {\n  margin: 2px 0;\n  cursor: pointer;\n}\n\n[dir] .ag-chart .ag-chart-menu > span:hover {\n  border-radius: 5px;\n}\n\n.ag-chart .ag-chart-docked-container {\n  min-width: 0;\n  width: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-body {\n  padding: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  cursor: pointer;\n}\n\n@font-face {\n  font-family: \"agGridMaterial\";\n\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBlYAAAC8AAAAYGNtYXAXVtK8AAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZuX9LmgAAAF4AAASrGhlYWQVtyBHAAAUJAAAADZoaGVhB4kD+wAAFFwAAAAkaG10eN4AJ0kAABSAAAAA6GxvY2GGnoHMAAAVaAAAAHZtYXhwAEQAWQAAFeAAAAAgbmFtZVm8q3EAABYAAAABqnBvc3QAAwAAAAAXrAAAACAAAwP3AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpNQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6TX//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAQAAawMAAxUACwAAASEVCQEVITUhNychAwD+AAEV/usCAP7V1tYBKwMVVf8A/wBVgNXVAAAAAAQAOf/5A8cDhwAIAA8AFwAfAAABMzUzJwczFTEHIzUHFzUzJScVIxUzFTcFIxUjFzcjNQGrqnLHx3I5csfHcgJVx3Jyx/6OqnLHx3ICTnLHx3I5csfHclXHcqpyx45yx8dyAAABAKsAawNVAxUACQAAExc3ETMRFzcJAas87lbuPP6r/qsBwDzu/fkCB+89AVX+qwACAFUAFQOrA2sAHAAoAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxMHJwcnNyc3FzcXBwIAWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5Y1TyZmTyZmTyZmTyZA2siIXROTlhYTk50ISIiIXROTlhYTk50ISL9vDyZmTyZmTyZmTyZAAAAAwDVAJUDKwLrAAQACQANAAATMxEjETczESMREzMRI9WAgO94eO94eAI3/l4BorT9qgJW/qr/AAACAIAAQAOAA0AADwAWAAABISIGFREUFjMhMjY1ETQmASc3FwEXAQMr/aojMjIjAlYjMjL+XdY8mgFEPP6AA0AyI/2qIzIyIwJWIzL9q9U8mQFEPP6AAAAAAgCAAEADgANAAA8AEwAAASEiBhURFBYzITI2NRE0JgMhNSEDK/2qIzIyIwJWIzIyef5WAaoDQDIj/aojMjIjAlYjMv5VVgAAAgCAAEADgANAAAMAEwAAAREhESUhIgYVERQWMyEyNjURNCYDK/2qAlb9qiMyMiMCViMyMgLr/aoCVlUyI/2qIzIyIwJWIzIAAwBzAEgDjQM4AAYACgAWAAAJAQcXCQIhNxchBTAGFRQWMzI2NTQmAv3+VTxm/vcBRQFF/e/MzP5oAkxVMiMjMlUBjQGrPGb+9/67AUXNzUBrKiMyMiMqawAAAAACAKsAawFVAxUAAwAHAAAlIxEzNRUjNQFVqqqqawH/q1dXAAAJAKsAawNVAxUAAwAIAAwAEAAVABkAHgAiACYAABMzNSMBMzUjFSEzNSM1MzUjBTM1IxUBFTM1BTM1IxUBMzUjETM1I6uqqgEAqqr/AKqqqqoBAKqqAQCq/laqqgEAqqqqqgJrqv1WqqqqVqqqqqoBqqqqqqqq/wCq/laqAAAAAAEBYgDAAp4CwAAGAAABJwkBNyc3Ap48/wABADzDwwKEPP8A/wA8xMQAAAAAAwBr/+sDlQOVAAgAGQAdAAABISIGFREzESEXISIGFREUFjMhMjY1ETQmIxEhESECwP4AIzJVAgCA/iskMjIkAdUjMjIj/isB1QOVMiP9qwJVVTIk/asjMjIjAlUkMv1VAlUAAAEA1QCVAysC6wAMAAABJwcnBxcHFzcXNyc3Ays87+887+887+887+8Crzzv7zzv7zzv7zzv7wAABQBVABUDqwNrACUAMgA/AEsAUQAAAT4BNTQmIyIGFRQWMzI2NxcHLgEjIgYVFBYzMjY1NCYnNwEzNQEHIiY1NDYzMhYVFAYjESImNTQ2MzIWFRQGIwEiJjU0NjMyFhUUBgkBFwE1IwGbCAhkR0dkZEcTIxBlZRAjE0dkZEdHZAgIZQErgP3wmyMyMiMjMjIjIzIyIyMyMiMBAAkMDAkJDAwBIv8AVQErgAJ6ECMTR2RkR0dkCAhlZQgIZEdHZGRHEyMQZf7VKwIPDzEkJDExJCQx/gAxJCQxMSQkMQFADAkJDAwJCQwBlf8AVQEqKwAABwCXAL8DaQLBAAwAEAAdACEALQA6AD4AABMiBhUUFjMyNjU0JiMFNSEVAyIGFRQWMzI2NTQmIwUhNSEFMhYVFAYjIiY1NDY3MhYVFAYjIiY1NDYzBSE1IcISGRkSEhkZEgKn/dd+EhkZEhIZGRIB0v6sAVT+Lg0TEw0NExMNEhkZEhIZGRICp/3XAikBFRkSERoaERIZVVZWASsZEhIZGRISGVVVCxMNDRMTDQ0T4RoREhkZEhEaVlUAAAABAKsAawNVAxUACQAAAScHESMRJwcJAQNVPO5W7jwBVQFVAcA87gIH/fnvPf6rAVUAAAAAAQFiAMACngLAAAYAAAEHFwcXCQEBnjzDwzwBAP8AAsA8xMQ8AQABAAAAAAABAJMAxwNtArkARwAAAS4BIyIGByc+ATMyFx4BFxYXDgEHJz4BNyMOAQcnIxcOASMiJicjHgEzMjY3Fw4BIyInLgEnJic+ATcXDgEHMyc+ATMyFhczAqMKXD0iPRZPK2M2Pjk5XyQlFRhYOU8SGAVEBA0IK1BGBAkFIjUJRApcPhMjEEghRyY+OTlfJCUVEz4oXgUGAoYpDSQVIjQJRAHdOk8aF08ZHBMSQi4tNz5lIU8SLRoMFQkqRgEBKR86UAgISA0OExJCLi03MFQgXgoUCyoNECgfAAADAJMAxwNtArkAHAApADUAAAEiBw4BBwYHFhceARcWMzI3PgE3NjcmJy4BJyYjESImNTQ2MzIWFRQGIxEiBhUUFjMyNjU0JgIAPjk5XyQlFRUlJF85OT4+OTlfJCUVFSUkXzk5PkVhYUVFYWFFKTs7KSk7OwK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQEKOykpOzspKTsAAAMAgADAA4ACwAAEAAgADAAAJTM1IxUBFSE1ASE1IQGrqqr+1QMA/YACAP4AwFVVAgBVVf7VVgAAAgD3AMADCQLAAAUACgAAJSc3JwkBATMRIxEDCcTEPP8AAQD+KlZW/MTEPP8A/wACAP4AAgAAAAACAKsBQANVAkAAAwAIAAABIRUhBSE1IRUDVf1WAqr9VgKq/VYCQFWrVVUAAAYAjgCkA3IC3AAHAAwAEwAXABsAIQAAASEUBisBNTElFSE1IScyFhUhNSEBIzUzNSM1MycjNDYzFQJVAR1DL6sBHf7jAR1yL0P+AAGO/uRycnJy5HJDLwEVL0Jx5HJy40Ivcf3IcXJyci9CcQAAAAACAJMAxwNtArkAHAApAAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmIxEiJjU0NjMyFhUUBiMCAD45OV8kJRUVJSRfOTk+Pjk5XyQlFRUlJF85OT5FYWFFRWFhRQK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQACAPcAwAMJAsAABgAKAAATFwcXCQEHJTMRI/fExDwBAP8APAG8VlYChMTEPAEAAQA8PP4AAAAAAAEAqwBrA1UDFQAJAAABITcnCQE3JyE1A1X9+e89/qsBVTzuAgcB6+48/qv+qzzuVgAAAAACAOQApAMcAtwAHAAmAAABNxcHMxUjHgEXBycVIzUHJzcjNTMnNx4BFzUzFQczNzUnIwcVHgECOWhQaJOTGjQaUGhyaFBok5NoUBo0GnJoXkNDXkMRIQJJaFBocho0GlBok5NoUGhyaFAaNBqTk/tDXkNDXhEhAAABAIAC6wOAA0AAAwAAEyEVIYADAP0AA0BVAAAAAwCAAMADgALAAAMABwALAAA3ITUhNSE1ITUVITWAAwD9AAMA/QADAMBVgFbVVVUAAQEAAEADAACVAAMAACUhFSEBAAIA/gCVVQAAAAEA1QGVAysB6wAEAAATIRUhNdUCVv2qAetWVgABAWIAwAKeAsAABgAAAQcXBxcJAQGePMPDPAEA/wACwDzExDwBAAEAAAAAAAMAgADAA4ACwAADAAcACwAANyE1IREVITUBITUhgAIA/gADAP0AAwD9AMBVAatVVf7VVgADAFUAFQOrA2sAHAArADoAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjATQ3PgE3NjMyFhcBLgE1ASImJwEeARUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlj+qxobXT4+RztrK/4iIiYBVTtrKwHeIiYaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv5VRz4+XRsaJiL+IitrO/6rJiIB3itrO0c+Pl0bGgAAAAADAID/6wOAA5UAGAAkACwAAAEjLgEjIgYHIyIGFREUFjMhMjY1ETQmIzEhMhYVFAYjIiY1NDYBIREzFSE1MwMrsw1BKipBDbMjMjIjAlYjMjIj/tUSGRkSEhkZAT39qlYBqlYDQCUwMCUyI/1VIzIyIwKrIzIZEhEZGRESGf0AAquAgAACAK0AbwNTAxEABQASAAAlByc3HgETAQcnBxcHJzcXNyc3AWOOKI4KFMYBNB8e9z5Y9lg9ex4e/Y4ojgoUAgr+zB4eez1Y9lg+9x4fAAAAAAkAOf/5A8cDhwAPABMAFwAgACQALgAyADYAOgAABSEiJjURNDYzITIWFREUBgEjFTMBIREhJQcXByc3HgEXJyMVMyUHJwcnNx4BFzEBIxUzJSMVMzcjFTMDVf1WL0NDLwKqL0ND/dGqqgIA/jkBx/7cQkIpaWkKFQrcqqoB+ChBQihqGjUa/giqqgEd5OTjqqoHQy8Cqi9DQy/9Vi9DARyqAY7+crNCQShpagoUCturMShBQShpGjUaAZaqqqqqqgAAAAABANUAlQMrAusACwAAASERIxEhNSERMxEhAyv/AFb/AAEAVgEAAZX/AAEAVgEA/wAAAAAAAQFiAMACngLAAAYAAAEnCQE3JzcCnjz/AAEAPMPDAoQ8/wD/ADzExAAAAAACAFUAFQOrA2sAHAA5AAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv0AGhtdPj5HRz4+XRsaGhtdPj5HRz4+XRsaAAMAVQAVA6sDawAcADkAVgAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiM1IgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgAsJyc6ERAQETonJywsJyc6ERAQETonJyxYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcClRAROicnLCwnJzoREBAROicnLCwnJzoRENYiIXROTlhYTk50ISIiIXROTlhYTk50ISL9ABobXT4+R0c+Pl0bGhobXT4+R0c+Pl0bGgABAKsAawNVAxUACQAAAQcXIRUhBxcJAQIAPO79+QIH7jwBVf6rAxU87lbuPAFVAVUAAAAAAgCAAEADgANAAA4AGQAAAREhESMRFBYzITI2NREjBTcXByc3FxEzETEDK/2qVTIjAlYjMlX/AG481dU8blYBwP7VASv+1SMyMiMBKx1uPNXVPG4Bnf5jAAEBKwFVAtUCKwADAAABFzchASvV1f5WAivW1gABAZUA6wJrApUAAwAAAQcXEQJr1tYCldXVAaoAAQGVAOsCawKVAAMAACU3JxEBldbW69XV/lYAAAEBKwFVAtUCKwADAAABNxchASvV1f5WAVXW1gABAIkAogN3At4ABgAAAScHFwEnAQF3sjzuAgA8/jwBG7I97gIAPP49AAAAAAEBYgDAAp4CwAAGAAABBxcHFwkBAZ48w8M8AQD/AALAPMTEPAEAAQAAAAAAAQDVAZUDKwHrAAQAABMhFSE11QJW/aoB61ZWAAEBAAEiAwACXgAFAAABBycHCQECxMTEPAEAAQACXsPDPP8AAQAAAAADAFUA6wOrApUAGgAeADkAABM0NjsBNSMiBw4BBwYVFBceARcWOwE1IyImNRchNSElIxUzMhYVFAYrARUzMjc+ATc2NTQnLgEnJiOmTjeqqiwnJzoREREROicnLKqqN06vAVb+qgGAqqo3Tk43qqosJyc6ERERETonJywBwDdNURAROicnLCwnJzoREFFNNytWqlFNNzdNURAROicnLCwnJzoREAAAAAADAFUAQAOrA0AAFAAYADgAAAEjFTMyFhUUBgcXPgE1NCcuAScmIwcjFzMBFw4BFRQXHgEXFjsBNSMiJjU0NjcXIxUzFxUzFzcBBwLVqqo3TjgrPjRCERE6JycsKl5WCP2qhTpLERE6Jycsqqo3TkUxWB91YUmsNf03NwKVUU03LkYLPhplPiwnJzoREKpWAXWFGGpDLCcnOhEQUU03M0sFWFZhSas2Aso2AAAAAQAAAAEAAG2khpdfDzz1AAsEAAAAAADZaG3lAAAAANlobeUAAP/rA8cDlQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADxwABAAAAAAAAAAAAAAAAAAAAOgQAAAAAAAAAAAAAAAIAAAAEAAEABAAAOQQAAKsEAABVBAAA1QQAAIAEAACABAAAgAQAAHMEAACrBAAAqwQAAWIEAABrBAAA1QQAAFUEAACXBAAAqwQAAWIEAACTBAAAkwQAAIAEAAD3BAAAqwQAAI4EAACTBAAA9wQAAKsEAADkBAAAgAQAAIAEAAEABAAA1QQAAWIEAACABAAAVQQAAIAEAACtBAAAOQQAANUEAAFiBAAAVQQAAFUEAACrBAAAgAQAASsEAAGVBAABlQQAASsEAACJBAABYgQAANUEAAEABAAAVQQAAFUAAAAAAAoAFAAeADoAbACEAMgA5AEQATQBWAGGAZgB2AHuAiACPAK0AxIDLANCA64EAAQcBDgETgSGBMgE5AT+BToFSAVgBW4FfAWSBawGDAZOBnYG2AbyBwgHYAfgB/oIJgg0CEIIUAheCHQIigiYCKwJAAlWAAAAAQAAADoAVwAJAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAoAAAABAAAAAAACAAcAewABAAAAAAADAAoAPwABAAAAAAAEAAoAkAABAAAAAAAFAAsAHgABAAAAAAAGAAoAXQABAAAAAAAKABoArgADAAEECQABABQACgADAAEECQACAA4AggADAAEECQADABQASQADAAEECQAEABQAmgADAAEECQAFABYAKQADAAEECQAGABQAZwADAAEECQAKADQAyEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFJlZ3VsYXIAUgBlAGcAdQBsAGEAckFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n\n  font-weight: normal;\n\n  font-style: normal;\n}\n\n.ag-theme-material {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: normal;\n}\n\n[dir] .ag-theme-material {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab.ag-tab-selected {\n  border-bottom: 2px solid #7367F0;\n}\n\n[dir] .ag-theme-material label {\n  margin-bottom: 0;\n}\n\n.ag-theme-material * {\n  box-sizing: border-box;\n}\n\n.ag-theme-material *:focus, .ag-theme-material * *:before, .ag-theme-material * *:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.ag-theme-material .ag-tab {\n  box-sizing: content-box;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-theme-material .ag-cell .ag-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ag-theme-material .ag-checkbox, .ag-theme-material .ag-radio-button, .ag-theme-material .ag-toggle-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-theme-material .ag-checkbox, [dir] .ag-theme-material .ag-radio-button, [dir] .ag-theme-material .ag-toggle-button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label, [dir] .ag-theme-material .ag-radio-button label, [dir] .ag-theme-material .ag-toggle-button label {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label:empty, [dir] .ag-theme-material .ag-radio-button label:empty, [dir] .ag-theme-material .ag-toggle-button label:empty {\n  margin: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-cell {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-delta {\n  padding-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-delta {\n  padding-left: 2px;\n}\n\n.ag-theme-material .ag-value-change-delta-up {\n  color: #43a047;\n}\n\n.ag-theme-material .ag-value-change-delta-down {\n  color: #e53935;\n}\n\n.ag-theme-material .ag-value-change-value {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value {\n  background-color: transparent;\n  border-radius: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-value {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-value {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-value-change-value-highlight {\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value-highlight {\n  background-color: #00acc1;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]),\n.ag-theme-material .ag-input-wrapper input[type=text],\n.ag-theme-material .ag-input-wrapper input[type=number],\n.ag-theme-material .ag-input-wrapper input[type=tel],\n.ag-theme-material .ag-input-wrapper input[type=date],\n.ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]), [dir] .ag-theme-material .ag-input-wrapper input[type=text], [dir] .ag-theme-material .ag-input-wrapper input[type=number], [dir] .ag-theme-material .ag-input-wrapper input[type=tel], [dir] .ag-theme-material .ag-input-wrapper input[type=date], [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):focus,\n.ag-theme-material .ag-input-wrapper input[type=text]:focus,\n.ag-theme-material .ag-input-wrapper input[type=number]:focus,\n.ag-theme-material .ag-input-wrapper input[type=tel]:focus,\n.ag-theme-material .ag-input-wrapper input[type=date]:focus,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):focus, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=text]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=number]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=tel]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=date]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):disabled,\n.ag-theme-material .ag-input-wrapper input[type=text]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=number]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=tel]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=date]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input[type=date] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input[type=range] {\n  padding: 0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-header {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-right-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-right-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-left-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-left-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-header-row {\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-header-row {\n  border: none;\n}\n\n.ag-theme-material .ag-row {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-row {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-row:not(.ag-row-first) {\n  border-width: 1px 0 0;\n}\n\n[dir] .ag-theme-material .ag-row.ag-row-last {\n  border-bottom-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir] .ag-theme-material .ag-row-hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-cell {\n  text-align: left;\n}\n\n.ag-theme-material .ag-header-cell-label .ag-header-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-header-cell, [dir] .ag-theme-material .ag-header-group-cell {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell, [dir=ltr] .ag-theme-material .ag-header-group-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell, [dir=rtl] .ag-theme-material .ag-header-group-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n[dir] .ag-theme-material .ag-header-cell.ag-header-cell-moving, [dir] .ag-theme-material .ag-header-group-cell.ag-header-cell-moving {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell:not(.ag-header-group-cell-no-group), [dir] .ag-theme-material .ag-header-group-cell:not(.ag-header-group-cell-no-group) {\n  border-top-width: 1px;\n}\n\n[dir] .ag-theme-material .ag-header-row:first-child .ag-header-cell, [dir] .ag-theme-material .ag-header-row:first-child .ag-header-group-cell {\n  border-top-width: 0;\n}\n\n[dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:hover, [dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:hover, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-group-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-group-cell:first-of-type.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-cell:first-of-type.ag-column-resizing {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-select-all {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-select-all {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-cell {\n  line-height: 46px;\n}\n\n[dir] .ag-theme-material .ag-cell {\n  border: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n[dir=rtl] .ag-theme-material .ag-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-right: 23px;\n  padding-left: 23px;\n}\n\n.ag-theme-material .ag-row-drag {\n  min-width: 42px;\n}\n\n[dir] .ag-theme-material .ag-row-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n[dir] .ag-theme-material .ag-row-dragging, [dir] .ag-theme-material .ag-row-dragging .ag-row-drag {\n  cursor: move;\n}\n\n[dir] .ag-theme-material .ag-column-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ag-theme-material .ag-row-dragging {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  outline: initial;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  border: 1px solid #7367F0;\n}\n\n.ag-theme-material .ag-header-cell-resize {\n  width: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  padding: 0;\n}\n\n.ag-theme-material .ag-menu .ag-menu-list {\n  width: 100%;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-list {\n  cursor: default;\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-active {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-disabled {\n  opacity: 0.5;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-icon {\n  min-width: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-separator {\n  height: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-separator > span {\n  background-image: url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'16px'%20viewBox%3D'0%200%201%2016px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'8px'%20x2%3D'1'%20y2%3D'8px'%20stroke-width%3D'1'%20stroke%3D'%23E2E2E2'%2F%3E%3C%2Fsvg%3E\");\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  width: 34px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  text-align: center;\n}\n\n.ag-theme-material.ag-dnd-ghost {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  height: 56px !important;\n  line-height: 56px;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  border: 1px solid #e2e2e2;\n  margin: 0;\n  padding: 0 16px;\n  -webkit-transform: translateY(16px);\n          transform: translateY(16px);\n}\n\n.ag-theme-material.ag-dnd-ghost span,\n.ag-theme-material.ag-dnd-ghost div {\n  height: 100%;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost span, [dir] .ag-theme-material.ag-dnd-ghost div {\n  margin: 0;\n  padding: 0;\n}\n\n.ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-tab-header {\n  min-width: 220px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-theme-material .ag-tab-header {\n  background: #eee;\n}\n\n.ag-theme-material .ag-tab-header .ag-tab {\n  display: -webkit-box;\n  display: flex;\n  height: 32px;\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab {\n  border-bottom: 2px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-tab-body {\n  padding: 4px 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:first-child > span {\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > span {\n  padding-bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n  background-position-y: 0;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select, [dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-bottom: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select {\n  margin: 8px;\n}\n\n.ag-theme-material .ag-filter input[type=radio] {\n  width: 12px;\n  height: 17px;\n  vertical-align: top;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 3px 0 6px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 6px 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=text], [dir=ltr] .ag-theme-material .ag-filter input[type=date] {\n  padding-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=text], [dir=rtl] .ag-theme-material .ag-filter input[type=date] {\n  padding-right: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-list {\n  height: 240px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-item {\n  height: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-left: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-right: 5px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-header-container {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 4px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  line-height: 1.5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #7367F0;\n  font-family: inherit;\n  font-size: inherit;\n  text-transform: uppercase;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column {\n  height: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel {\n  border-top: 1px solid #e2e2e2;\n  padding-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 34px;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel {\n  height: 56px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel {\n  border-top: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel > div {\n  cursor: pointer;\n  margin: 0 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel {\n  width: 100%;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  -webkit-box-flex: 1;\n          flex: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  display: -webkit-box;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header {\n  padding: 0 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div {\n  margin: auto 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper {\n  padding-top: 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border: 1px solid #e2e2e2;\n  padding: 8px 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-left: 0;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-right: 0;\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel {\n  height: 56px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-select-panel {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 7px;\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 8px 0;\n  padding-bottom: 16px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 34px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 34px;\n  padding-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list {\n  cursor: default;\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop:last-child {\n  border-bottom: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-paging-panel {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-paging-panel {\n  border-top: 1px solid #e2e2e2;\n  padding: 0 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-panel > span {\n  margin-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-panel > span {\n  margin-right: 32px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  cursor: pointer;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  right: 0;\n  left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  left: 0;\n  right: 0;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled .ag-icon {\n  color: rgba(0, 0, 0, 0.38);\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel span {\n  margin: 0 8px;\n}\n\n[dir] .ag-theme-material .ag-row-selected {\n  background-color: #eee;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell), [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell) {\n  border: 1px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-left-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-right-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-1:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.2);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-2:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.3);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-3:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.4);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-4:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.5);\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top {\n  border-top: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top.ag-cell.ag-cell-range-selected {\n  border-top: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom {\n  border-bottom: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected {\n  border-bottom: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-range-handle, .ag-theme-material .ag-fill-handle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n}\n\n[dir] .ag-theme-material .ag-range-handle, [dir] .ag-theme-material .ag-fill-handle {\n  background-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle, [dir=ltr] .ag-theme-material .ag-fill-handle {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle, [dir=rtl] .ag-theme-material .ag-fill-handle {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-fill-handle {\n  cursor: cell;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle {\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle {\n  cursor: nesw-resize;\n}\n\n.ag-theme-material .ag-cell.ag-cell-inline-editing {\n  height: 72px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  padding: 24px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-popup-editor {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n  padding: 0;\n}\n\n.ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  height: auto;\n}\n\n[dir] .ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  padding: 24px;\n}\n\n.ag-theme-material .ag-virtual-list-container .ag-virtual-list-item {\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-rich-select {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-list {\n  width: 200px;\n  height: 312px;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-value {\n  height: 48px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 8px 0 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 24px 0 8px;\n}\n\n.ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item:hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-right: 24px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-rich-select-row-selected {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-floating-filter-button button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 18px;\n  width: 18px;\n}\n\n[dir] .ag-theme-material .ag-floating-filter-button button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-child-count {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-child-count {\n  margin-right: 2px;\n}\n\n.ag-theme-material .ag-selection-checkbox span {\n  position: relative;\n}\n\n.ag-theme-material .ag-column-drop-horizontal {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left,\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left, [dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-column-drop-empty-message {\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-column-drop-cell {\n  min-height: 32px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell {\n  background: #e2e2e2;\n  border-radius: 32px;\n  padding: 0 4px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-text {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  min-width: 32px;\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  margin: 0 4px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical .ag-column-drop-cell {\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-select-agg-func-popup {\n  height: 140px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background: #fff;\n  padding: 0;\n}\n\n.ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  line-height: 40px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir=ltr] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-set-filter-list,\n.ag-theme-material .ag-menu-column-select-wrapper {\n  width: auto;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed {\n  background-color: #00acc1 !important;\n}\n\n.ag-theme-material .ag-cell-data-changed-animation {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed-animation {\n  background-color: transparent;\n}\n\n[dir] .ag-theme-material .ag-stub-cell {\n  padding-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-ltr ;\n          animation-name:  spin-ltr ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-rtl ;\n          animation-name:  spin-rtl ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin-ltr {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin-ltr {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-rtl {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes spin-rtl {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n[dir] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-floating-top {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-floating-bottom {\n  border-top: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-status-bar {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: 1.5;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  background: #fff;\n  border: 1px solid #e2e2e2;\n  border-top-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-status-bar {\n  padding-right: 32px;\n  padding-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-status-bar {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ag-theme-material .ag-name-value-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n[dir] .ag-theme-material .ag-status-bar-center {\n  text-align: center;\n}\n\n[dir] .ag-theme-material .ag-name-value {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n[dir=ltr] .ag-theme-material .ag-name-value {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-name-value {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-details-row {\n  padding: 40px;\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-wrapper {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-center {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n}\n\n.ag-theme-material .ag-side-bar {\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  background-color: #fafafa;\n  border: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-left-width: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-right-width: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons {\n  width: 22px;\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons {\n  padding-top: 32px;\n  background: #fff;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  color: rgba(0, 0, 0, 0.87);\n  width: 100%;\n  min-height: 144px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background: transparent;\n  border: 0;\n  padding: 16px 0 16px 0;\n  margin: 0;\n  border-width: 1px 0 1px 0;\n  border-style: solid;\n  border-color: transparent;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n  border-color: #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-left: -1px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-right: -1px;\n  padding-right: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-column-drop {\n  min-height: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-group-component {\n  background-color: #fdfdfd;\n  padding: 0px;\n  border: 0 solid #efefef;\n  border-top-width: 1px;\n}\n\n.ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-label .ag-group-component-title, .ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-container {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  height: 18px;\n  font-size: inherit;\n  font-family: inherit;\n  height: 26px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  background-color: #f0f0f0;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-right: 0;\n}\n\n.ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar .ag-column-group-icons {\n  display: none;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-toolbar {\n  background-color: #f7f7f7;\n  padding: 8px;\n  border: 0 solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-item {\n  margin: 4px 0;\n}\n\n.ag-theme-material .ag-group-component .ag-group-item .ag-group-component-title-bar {\n  height: 18px;\n}\n\n.ag-theme-material .ag-labeled label {\n  white-space: nowrap;\n}\n\n[dir=ltr] .ag-theme-material .ag-labeled label {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-labeled label {\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-labeled.ag-label-align-top label {\n  margin-bottom: 4px;\n}\n\n[dir=ltr] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=ltr] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=rtl] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  border-radius: 12px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\n  background-color: #ffffff;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  top: 4px;\n  width: 6px;\n  height: 6px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  margin-top: -4px;\n  border-radius: 3px;\n  background-color: #4c4c4c;\n}\n\n[dir=ltr] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  left: 12px;\n  margin-left: -3px;\n}\n\n[dir=rtl] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  right: 12px;\n  margin-right: -3px;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  height: 18px;\n  width: 40px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  background-color: #fff;\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  right: calc(100% - 18px);\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  left: calc(100% - 18px);\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper {\n  background-color: #ff4081;\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  background: #fff;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-color-picker > .ag-wrapper > div {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button:hover {\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-dialog.ag-color-dialog {\n  border-radius: 5px;\n}\n\n[dir] .ag-theme-material .ag-color-panel {\n  padding: 8px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-color {\n  background-color: red;\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-tools {\n  padding: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: -webkit-gradient(linear, left top, right top, from(white), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: -webkit-gradient(linear, right top, left top, from(white), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to left, white, rgba(204, 154, 129, 0));\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-val {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  height: 12px;\n  width: 12px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  border-radius: 12px;\n  border: 1px solid white;\n  background: black;\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-hue-background {\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-alpha-background {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-hue-alpha {\n  height: 11px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-hue-alpha {\n  margin-bottom: 10px;\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  width: 13px;\n  height: 13px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  margin-top: -12px;\n  border-radius: 13px;\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-text-value {\n  font-weight: bold;\n  line-height: 20px;\n  color: #333;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-text-value:focus {\n  border: 1px solid #0d77e4;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-recent-colors > div {\n  margin: 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir=rtl] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir] .ag-theme-material .ag-panel {\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n}\n\n.ag-dragging-range-handle .ag-theme-material .ag-panel.ag-dialog, .ag-dragging-fill-handle .ag-theme-material .ag-panel.ag-dialog {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n  font-size: inherit;\n  font-weight: 600;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar {\n  background-color: #fff;\n  border-bottom: 1px solid #fcfcfc;\n  padding: 5px 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-right: 24px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  height: 20px;\n  width: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button .ag-icon {\n  line-height: 20px;\n  font-size: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:hover, [dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button.ag-has-popup {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-left: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  height: 30px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  background-color: #fff;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar button {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-tooltip {\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n\n[dir] .ag-theme-material .ag-tooltip {\n  background-color: #535353;\n  border-radius: 2px;\n  padding: 5px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n}\n\n.ag-theme-material .ag-tooltip.ag-tooltip-hiding {\n  opacity: 0;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu {\n  border-radius: 5px;\n  background: #fff;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu > span:hover {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-right: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-left: 2px;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail.ag-selected {\n  border-color: #7367F0;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: inherit-2;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-format .ag-chart-format-wrapper .ag-group-item {\n  margin: 9.6px 0;\n}\n\n.ag-theme-material .ag-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"agGridMaterial\";\n  speak: none;\n  font-size: 18px;\n  color: #333;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ag-theme-material .ag-icon-aggregation:before {\n  content: \"\\E900\";\n}\n\n.ag-theme-material .ag-icon-arrows:before {\n  content: \"\\E901\";\n}\n\n.ag-theme-material .ag-icon-asc:before {\n  content: \"\\E902\";\n}\n\n.ag-theme-material .ag-icon-cancel:before {\n  content: \"\\E903\";\n}\n\n.ag-theme-material .ag-icon-chart:before {\n  content: \"\\E904\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-color-picker:before {\n  content: \"\\E908\";\n}\n\n.ag-theme-material .ag-icon-column:before {\n  content: \"\\E909\";\n}\n\n.ag-theme-material .ag-icon-columns:before {\n  content: \"\\E90A\";\n}\n\n.ag-theme-material .ag-icon-contracted:before {\n  content: \"\\E90B\";\n}\n\n.ag-theme-material .ag-icon-copy:before {\n  content: \"\\E90C\";\n}\n\n.ag-theme-material .ag-icon-cross:before {\n  content: \"\\E90D\";\n}\n\n.ag-theme-material .ag-icon-cut:before {\n  content: \"\\E90E\";\n}\n\n.ag-theme-material .ag-icon-data:before {\n  content: \"\\E90F\";\n}\n\n.ag-theme-material .ag-icon-desc:before {\n  content: \"\\E910\";\n}\n\n.ag-theme-material .ag-icon-expanded:before {\n  content: \"\\E911\";\n}\n\n.ag-theme-material .ag-icon-eye-slash:before {\n  content: \"\\E912\";\n}\n\n.ag-theme-material .ag-icon-eye:before {\n  content: \"\\E913\";\n}\n\n.ag-theme-material .ag-icon-filter:before {\n  content: \"\\E914\";\n}\n\n.ag-theme-material .ag-icon-first:before {\n  content: \"\\E915\";\n}\n\n.ag-theme-material .ag-icon-grip:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-icon-group:before {\n  content: \"\\E917\";\n}\n\n.ag-theme-material .ag-icon-indeterminate:before {\n  content: \"\\E918\";\n}\n\n.ag-theme-material .ag-icon-last:before {\n  content: \"\\E919\";\n}\n\n.ag-theme-material .ag-icon-left:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-linked:before {\n  content: \"\\E934\";\n}\n\n.ag-theme-material .ag-icon-loading:before {\n  content: \"\\E91B\";\n}\n\n.ag-theme-material .ag-icon-maximize:before {\n  content: \"\\E91C\";\n}\n\n.ag-theme-material .ag-icon-menu:before {\n  content: \"\\E91D\";\n}\n\n.ag-theme-material .ag-icon-minimize:before {\n  content: \"\\E91E\";\n}\n\n.ag-theme-material .ag-icon-minus:before {\n  content: \"\\E91F\";\n}\n\n.ag-theme-material .ag-icon-next:before {\n  content: \"\\E920\";\n}\n\n.ag-theme-material .ag-icon-none:before {\n  content: \"\\E921\";\n}\n\n.ag-theme-material .ag-icon-not-allowed:before {\n  content: \"\\E922\";\n}\n\n.ag-theme-material .ag-icon-paste:before {\n  content: \"\\E923\";\n}\n\n.ag-theme-material .ag-icon-pin:before {\n  content: \"\\E924\";\n}\n\n.ag-theme-material .ag-icon-pivot:before {\n  content: \"\\E925\";\n}\n\n.ag-theme-material .ag-icon-plus:before {\n  content: \"\\E926\";\n}\n\n.ag-theme-material .ag-icon-previous:before {\n  content: \"\\E927\";\n}\n\n.ag-theme-material .ag-icon-radio-button-off:before {\n  content: \"\\E928\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on:before {\n  content: \"\\E929\";\n}\n\n.ag-theme-material .ag-icon-right:before {\n  content: \"\\E92A\";\n}\n\n.ag-theme-material .ag-icon-save:before {\n  content: \"\\E92B\";\n}\n\n.ag-theme-material .ag-icon-small-down:before {\n  content: \"\\E92C\";\n}\n\n.ag-theme-material .ag-icon-small-left:before {\n  content: \"\\E92D\";\n}\n\n.ag-theme-material .ag-icon-small-right:before {\n  content: \"\\E92E\";\n}\n\n.ag-theme-material .ag-icon-small-up:before {\n  content: \"\\E92F\";\n}\n\n.ag-theme-material .ag-icon-tick:before {\n  content: \"\\E930\";\n}\n\n.ag-theme-material .ag-icon-tree-closed:before {\n  content: \"\\E931\";\n}\n\n.ag-theme-material .ag-icon-tree-indeterminate:before {\n  content: \"\\E932\";\n}\n\n.ag-theme-material .ag-icon-tree-open:before {\n  content: \"\\E933\";\n}\n\n.ag-theme-material .ag-icon-unlinked:before {\n  content: \"\\E935\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-unchecked {\n  line-height: 18px;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate, [dir] .ag-theme-material .ag-icon-checkbox-unchecked {\n  background-color: transparent;\n  border-radius: 3px;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked-readonly, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate-readonly, [dir] .ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  cursor: default;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-row-drag:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E92A\";\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl {\n  text-align: left;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: left;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 8px;\n  padding-right: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 8px;\n  padding-left: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 0;\n  margin-right: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 0;\n  margin-left: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox,\n.ag-theme-material .ag-rtl .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-expanded,\n.ag-theme-material .ag-rtl .ag-group-contracted {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-left: unset;\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-right: unset;\n  margin-left: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-right: 0;\n  margin-left: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n.ag-theme-material .sass-variables::after {\n  content: '{ \"autoSizePadding\": \"24px\", \"headerHeight\": \"56px\", \"groupPaddingSize\": \"42px\", \"footerPaddingAddition\": \"32px\", \"virtualItemHeight\": \"40px\", \"aggFuncPopupHeight\": \"140px\", \"checkboxIndentWidth\": \"26px\", \"leafNodePadding\": \"24px\", \"rowHeight\": \"48px\", \"gridSize\": \"8px\", \"iconSize\": \"18px\" }';\n  display: none;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-radio-button-on,\n.ag-theme-material .ag-icon-radio-button-off {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  line-height: 24px;\n}\n\n.ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  -webkit-transition: background-color 0.5s;\n  transition: background-color 0.5s;\n}\n\n[dir] .ag-theme-material .ag-cell-highlight {\n  background-color: #fce4ec !important;\n}\n\n.ag-theme-material .ag-cell-highlight-animation {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-menu-option {\n  height: 38px;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  border-bottom: 0;\n  border-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons button {\n  color: rgba(0, 0, 0, 0.54);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons button {\n  border: 0;\n  background: transparent;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background-color: transparent;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-filter-toolpanel-body {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  border-top-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0;\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 0;\n  margin-right: 0;\n  padding-right: 0;\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-group-expanded .ag-icon-contracted:empty:before {\n  content: \"\\E933\";\n}\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.ag-grid-table {\n  color: inherit !important;\n  height: calc(var(--vh, 1vh) * 100 - 30rem);\n}\n\n@media screen and (max-height: 800px) {\n  .ag-grid-table {\n    height: 620px;\n  }\n}\n\n.ag-grid-table .ag-header-cell .ag-cell-label-container .ag-header-icon.ag-filter-icon {\n  display: none;\n}\n\n[dir] .ag-grid-table .ag-filter-select {\n  padding: 0.3rem;\n  background: transparent;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.ag-grid-table .ag-filter-filter {\n  height: 25px !important;\n}\n\n[dir] .ag-grid-table .ag-filter-filter {\n  padding-bottom: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 10px;\n  margin-bottom: 14px !important;\n}\n\n[dir=ltr] .ag-grid-table .ag-filter-filter {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n[dir=rtl] .ag-grid-table .ag-filter-filter {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n[dir] .ag-grid-table .ag-input-text-wrapper input {\n  padding-bottom: 0 !important;\n}\n\n.ag-grid-table .ag-floating-filter-body {\n  height: unset;\n}\n\n.ag-grid-table .ag-cell-inline-editing {\n  height: 62px !important;\n}\n\n[dir] .ag-grid-table .ag-cell-inline-editting, [dir] .ag-grid-table .ag-popup-editor {\n  padding-bottom: 12px;\n}\n\n@media screen and (max-width: 614px) {\n  .ag-grid-table .ag-grid-table-actions-right {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n  }\n}\n\n@media screen and (max-width: 614px) and (min-width: 443px) {\n  .ag-grid-table .ag-grid-table-actions-left {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n}\n\n.ag-grid-table .ag-horizontal-left-spacer, .ag-grid-table .ag-horizontal-right-spacer {\n  overflow-x: auto;\n}\n\n.ag-grid-table .ag-icon-checkbox-checked,\n.ag-grid-table .ag-icon-checkbox-indeterminate {\n  font-size: 22px;\n  color: rgba(var(--vs-primary), 1) !important;\n}\n\n.ag-grid-table .ag-icon-checkbox-unchecked {\n  color: #b8c2cc !important;\n  font-size: 22px;\n}\n\n.ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 20px;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material {\n  background: transparent;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  color: #fff;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  background: transparent;\n  border-bottom-color: #414561;\n}\n\n[dir=ltr] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-right-color: #414561 !important;\n}\n\n[dir=rtl] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-left-color: #414561 !important;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  border-bottom-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-hover, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell:hover {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-selected {\n  background: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-group-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-pinned-left-header, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-left-spacer, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-right-spacer {\n  border-color: #414561;\n}\n\n.theme-dark .ag-grid-table .ag-icon-checkbox-unchecked,\n.theme-dark .ag-grid-table .ag-icon-filter,\n.theme-dark .ag-grid-table .ag-icon-asc,\n.theme-dark .ag-grid-table .ag-icon-desc {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-body-wrapper {\n  background-color: #262c49;\n}\n\n.theme-dark .ag-grid-table .ag-filter-select {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-select {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table option {\n  background-color: #10163a;\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #7367F0;\n  border-radius: 20px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-track {\n  background: #262c49;\n  border-radius: 20px;\n}\n\n.ag-grid-cell-chip {\n  top: 50%;\n  line-height: 1;\n}\n\n[dir] .ag-grid-cell-chip {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}", ""]);

// exports


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
          _c(
            "vs-button",
            {
              attrs: {
                color: "success",
                disabled: _vm.selected.length <= 0,
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-check-square"
              },
              on: {
                click: function($event) {
                  return _vm.gridApi.deselectAll()
                }
              }
            },
            [_vm._v("Clear")]
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
                      return _vm.$refs.addStudyInfo.show(_vm.selected)
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
      _c("ag-grid-vue", {
        staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
        staticStyle: { height: "900px" },
        attrs: {
          columnDefs: _vm.columnDefs,
          defaultColDef: _vm.defaultColDef,
          rowSelection: "multiple",
          pagination: true,
          paginationPageSize: 150,
          animateRows: true,
          rowData: _vm.all_students
        },
        on: {
          "grid-ready": _vm.onGridReady,
          "selection-changed": _vm.onSelectionChanged
        }
      }),
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
      _c("add-study-info", {
        ref: "addStudyInfo",
        on: {
          finished: function($event) {
            _vm.selected = []
          }
        }
      }),
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



/***/ }),

/***/ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!***********************************************************************!*\
  !*** ./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./agGridStyleOverride.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);