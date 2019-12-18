(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PrintInvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrintInvoice */ "./resources/js/src/views/payment/PrintInvoice.vue");


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
=======
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Payment",
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    PrintInvoice: _PrintInvoice__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    all_students: function all_students() {
      return this.$store.getters.all_students;
    },
    getPayments: function getPayments() {
      return this.$store.getters.get_payments;
    },
    totalPayment: function totalPayment() {
      var self = this;
      var payments = 0;
      var vm = this.all_infos;

      for (var i = 0; i < vm.length; i++) {
        payments += parseFloat(vm[i].term_selected);
      }

      self.total_payment = payments;
      self.after_discount = payments;
      return payments;
    },
    getCurYear: function getCurYear() {
      return this.$store.getters.get_cur_year;
    },
    getInvoices: function getInvoices() {
      return this.$store.getters.get_invoices;
    },
    getInvoicesDetail: function getInvoicesDetail() {
      return this.$store.getters.get_invoice_details;
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
              return this.$store.dispatch('fetchStudent');

            case 2:
              _context.next = 4;
              return this.$store.dispatch('fetchCurYear');

            case 4:
              _context.next = 6;
              return this.$store.dispatch('fetchInvoices');

            case 6:
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
  data: function data() {
    return {
      discount: 0,
      after_discount: 0,
      cash_discount: 0,
      users: [],
      selected: [],
      students: '',
      //all info
      student_id: '',
      gender: '',
      dob: null,
      photo: 'https://data.whicdn.com/images/300580381/original.jpg',
      all_infos: [],
      total_payment: 0,
      today_date: this.moment().format('YYYY-MM-DD')
    };
  },
  methods: {
    cashDiscount: function cashDiscount() {
      this.discount = parseFloat(this.cash_discount * 100 / this.total_payment).toFixed(2);
      this.after_discount = this.total_payment - this.cash_discount;
    },
    percentDiscount: function percentDiscount() {
      this.cash_discount = parseFloat(this.total_payment * this.discount / 100).toFixed(2);
      this.after_discount = this.total_payment - this.cash_discount;
    },
    getCostOne: function getCostOne(one, date_pay, i) {
      var price = one;
      var temp_next_date = this.moment(date_pay).add('month', 1).format('YYYY-MM-DD');

      if (temp_next_date > this.all_infos[i].last_date_pay) {
        this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
        var a = this.moment(date_pay);
        var b = this.moment(this.all_infos[i].last_date_pay);
        var over_days = b.diff(a, 'days');
        price = (parseFloat(one) / 30 * over_days).toFixed();
      } else {
        this.all_infos[i].next_date_pay = temp_next_date;
      }

      this.all_infos[i].term_selected = price;
      return price;
    },
    getCostThree: function getCostThree(three, date_pay, i) {
      var price = three;
      var temp_next_date = this.moment(date_pay).add('month', 3).format('YYYY-MM-DD');

      if (temp_next_date > this.all_infos[i].last_date_pay) {
        this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
        var a = this.moment(date_pay);
        var b = this.moment(this.all_infos[i].last_date_pay);
        var over_days = b.diff(a, 'days');
        price = (parseFloat(three) / 91.25 * over_days).toFixed(2);
      } else {
        this.all_infos[i].next_date_pay = temp_next_date;
      }

      this.all_infos[i].term_selected = price;
      return price;
    },
    getCostSix: function getCostSix(six, date_pay, i) {
      var price = six;
      var temp_next_date = this.moment(date_pay).add('months', 6).format('YYYY-MM-DD');

      if (temp_next_date > this.all_infos[i].last_date_pay) {
        this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
        var a = this.moment(date_pay);
        var b = this.moment(this.all_infos[i].last_date_pay);
        var over_days = b.diff(a, 'days');
        price = (parseFloat(six) / 182.5 * over_days).toFixed(2);
      } else {
        this.all_infos[i].next_date_pay = temp_next_date;
      }

      this.all_infos[i].term_selected = price;
      return price;
    },
    getCostTwelve: function getCostTwelve(twelve, date_pay, i) {
      var price = twelve;
      var temp_next_date = this.moment(date_pay).add('months', 12).format('YYYY-MM-DD');

      if (temp_next_date > this.all_infos[i].last_date_pay) {
        this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
        var a = this.moment(date_pay);
        var b = this.moment(this.all_infos[i].last_date_pay);
        var over_days = b.diff(a, 'days');
        price = (parseFloat(twelve) / 365 * over_days).toFixed(2);
      } else {
        this.all_infos[i].next_date_pay = temp_next_date;
      }

      this.all_infos[i].term_selected = price;
      return price;
    },
    getServiceStudy: function () {
      var _getServiceStudy = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(payment) {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vm = this;
                vm.all_infos = [];
                _context4.next = 4;
                return this.$store.dispatch('fetchPayments', payment);

              case 4:
                this.getPayments.services.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            vm.all_infos.push({
                              year: data.year,
                              // service_id : data.service_id,
                              service_id: data.id,
                              name: data.services.service,
                              date_pay: data.date_pay,
                              next_date_pay: null,
                              last_date_pay: data.last_date_pay,
                              last_term: data.last_term,
                              cost_one: data.services.cost_one,
                              cost_three: data.services.cost_three,
                              cost_six: data.services.cost_six,
                              cost_twelve: data.services.cost_twelve,
                              is_used: data.is_used,
                              term_selected: 0
                            });

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                this.getPayments.studies.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            vm.all_infos.push({
                              year: data.year,
                              // study_id   : data.collection_id,
                              study_id: data.id,
                              name: data.study_infos.level + '' + data.study_infos.class_name,
                              date_pay: data.date_pay,
                              next_date_pay: null,
                              last_date_pay: data.last_date_pay,
                              last_term: data.last_term,
                              cost_one: data.study_infos.cost_one,
                              cost_three: data.study_infos.cost_three,
                              cost_six: data.study_infos.cost_six,
                              cost_twelve: data.study_infos.cost_twelve,
                              is_used: data.is_used,
                              term_selected: 0
                            });

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getServiceStudy(_x) {
        return _getServiceStudy.apply(this, arguments);
      }

      return getServiceStudy;
    }(),
    passStudentInfo: function passStudentInfo(students) {
      this.selected = [];
      this.all_infos = [];
      var student_arr = students.split(',');
      this.student_id = student_arr[0];
      this.gender = student_arr[1];
      this.dob = student_arr[2];
      this.photo = student_arr[3];
      this.getServiceStudy({
        'id': student_arr[0],
        'cur_year': this.getCurYear
      });
    },
    updateStudyInfo: function () {
      var _updateStudyInfo = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(update_study_items) {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                this.$vs.loading({
                  type: 'material'
                });
                promises = update_study_items.map(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return self.$store.dispatch('updateStudyInfo', data);

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                _context6.next = 5;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    title: 'ប្រតិបត្តិការណ៍ជោគជ័យ',
                    text: 'ទិន្នន័យឆ្នាំសិក្សាត្រូវកែប្រែ!',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateStudyInfo(_x4) {
        return _updateStudyInfo.apply(this, arguments);
      }

      return updateStudyInfo;
    }(),
    updateServiceInfo: function () {
      var _updateServiceInfo = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(update_service_items) {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                self = this;
                this.$vs.loading({
                  type: 'material'
                });
                promises = update_service_items.map(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return self.$store.dispatch('updateServiceInfo', data);

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));
=======
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c

                  return function (_x7) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context8.next = 5;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    title: 'ប្រតិបត្តិការណ៍ជោគជ័យ',
                    text: 'ទិន្នន័យសេវាកម្ម​​ត្រូវកែប្រែ!',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

<<<<<<< HEAD
      function updateServiceInfo(_x6) {
        return _updateServiceInfo.apply(this, arguments);
      }
=======
// module
exports.push([module.i, "[dir] #page-login .social-login-buttons .bg-facebook {\n  background-color: #1551b1;\n}\n[dir] #page-login .social-login-buttons .bg-twitter {\n  background-color: #00aaff;\n}\n[dir] #page-login .social-login-buttons .bg-google {\n  background-color: #4285F4;\n}\n[dir] #page-login .social-login-buttons .bg-github {\n  background-color: #333;\n}", ""]);
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c

      return updateServiceInfo;
    }(),
    storeInvoice: function () {
      var _storeInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var self, vm, update_study_items, update_service_items, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.$vs.loading({
                  type: 'material'
                });
                self = this;
                vm = this.all_infos;
                update_study_items = [];
                update_service_items = [];

                for (i = 0; i < vm.length; i++) {
                  if (vm[i].study_id === undefined) {
                    update_service_items.push({
                      id: vm[i].service_id,
                      date_pay: vm[i].next_date_pay,
                      last_term: vm[i].last_term,
                      last_date_pay: vm[i].last_date_pay,
                      is_used: vm[i].is_used
                    });
                  } else {
                    update_study_items.push({
                      id: vm[i].study_id,
                      date_pay: vm[i].next_date_pay,
                      last_term: vm[i].last_term
                    });
                  }
                }

                if (update_study_items.length) {
                  this.updateStudyInfo(update_study_items);
                }

                if (update_service_items.length) {
                  this.updateServiceInfo(update_service_items);
                }

<<<<<<< HEAD
                _context10.next = 10;
                return self.$store.dispatch('storeInvoice', {
                  student_id: this.student_id,
                  invoice_date: this.today_date,
                  balance: this.total_payment,
                  after_discount: this.after_discount,
                  discount: this.discount,
                  payment_status: false
                }).then(function (data_res) {
                  if (data_res) {
                    console.log(data_res);
                    self.all_infos.map(
                    /*#__PURE__*/
                    function () {
                      var _ref5 = _asyncToGenerator(
                      /*#__PURE__*/
                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(data) {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return self.$store.dispatch('storeInvoiceDetail', {
                                  invoice_id: data_res.id,
                                  item: data.name,
                                  term: data.last_term,
                                  balance: data.term_selected
                                });

                              case 2:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x8) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                    self.$vs.notify({
                      title: 'ប្រតិបត្តិការណ៍ជោគជ័យ',
                      text: 'ទិន្នន័យត្រូវបានរក្សាទុក',
                      color: 'primary',
                      iconPack: 'feather',
                      icon: 'icon-check',
                      position: 'top-center'
                    });
                    self.$vs.loading.close();
                    self.$refs.PrintInvoice.show({});
                  }
                });
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c

              case 10:
                _context10.next = 12;
                return this.$store.dispatch('fetchInvoices');

<<<<<<< HEAD
              case 12:
                this.discount = 0;
                this.cash_discount = 0;
                this.all_infos = [];
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function storeInvoice() {
        return _storeInvoice.apply(this, arguments);
      }

      return storeInvoice;
    }(),
    removeItem: function removeItem(i) {
      this.all_infos.splice(i, 1);
    },
    showInvoiceDetail: function () {
      var _showInvoiceDetail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.$modal.show('show-invoice-detail');
                _context11.next = 3;
                return this.$store.dispatch('showInvoiceDetail', id);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function showInvoiceDetail(_x9) {
        return _showInvoiceDetail.apply(this, arguments);
      }

      return showInvoiceDetail;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PrintInvoice",
  methods: {
    show: function show() {
      this.$modal.show('print-invoice');
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8& ***!
  \*************************************************************************************************************************************************************************************************************/
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
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
<<<<<<< HEAD
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
                  return _vm.$modal.show("add-payment")
                }
              }
            },
            [_vm._v("\n            បង់លុយ\n        ")]
          )
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
            "max-items": "5",
            search: "",
            data: _vm.getInvoices
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
                      _c("vs-td", { attrs: { data: data[indextr].balance } }, [
                        _vm._v(
                          "\n                    $ " +
                            _vm._s(data[indextr].balance) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].discount } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].discount) +
                            " %\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].after_discount } },
                        [
                          _vm._v(
                            "\n                    $ " +
                              _vm._s(data[indextr].after_discount) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].invoice_date } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].invoice_date) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      data[indextr].payment_status === true
                        ? _c(
                            "vs-td",
                            [
                              _c("vs-chip", { attrs: { color: "success" } }, [
                                _c("span", [_vm._v("បានទទូល")])
                              ])
                            ],
                            1
                          )
                        : _c(
                            "vs-td",
                            [
                              _c("vs-chip", { attrs: { color: "danger" } }, [
                                _c("span", [_vm._v("មិនទាន់ទទូល")])
                              ])
                            ],
                            1
                          ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        [
                          _c(
                            "vs-button",
                            {
                              attrs: {
                                size: "small",
                                radius: "",
                                color: "primary",
                                type: "relief",
                                "icon-pack": "feather"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.showInvoiceDetail(data[indextr].id)
                                }
                              }
                            },
                            [_vm._v(" លម្អិត")]
                          )
                        ],
                        1
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
              _c("vs-th", { attrs: { "sort-key": "name" } }, [
                _vm._v("ឈ្មោះសិស្ស")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "latin" } }, [
                _vm._v("ឈ្មោះឡាតាំង")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "class_name" } }, [
                _vm._v("តម្លៃដើម")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "date_pay" } }, [
                _vm._v("បញ្ចុះតម្លៃ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "is_used" } }, [
                _vm._v("តម្លៃក្រោយបញ្ចុះតម្លៃ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "is_used" } }, [
                _vm._v("ថ្ងៃបង់លុយ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "is_used" } }, [
                _vm._v("បានទទូល")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "is_used" } }, [
                _vm._v("បង្ហាញ")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            width: "60%",
            height: "auto",
            scrollable: true,
            pivotY: 0.07,
            adaptive: true,
            clickToClose: false,
            name: "show-invoice-detail"
          }
        },
        [
          _c("div", { staticClass: "flex justify-end" }, [
            _c(
              "i",
              {
                staticClass:
                  "vs-icon vs-popup--close material-icons text-warning",
                staticStyle: { background: "rgb(255, 255, 255)" },
                on: {
                  click: function($event) {
                    return _vm.$modal.hide("show-invoice-detail")
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
              _c(
                "vs-table",
                {
                  attrs: {
                    pagination: "",
                    "max-items": "10",
                    data: _vm.getInvoicesDetail
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
                              _c("vs-td", { attrs: { data: indextr } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(indextr + 1) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].item } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].item) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].term } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].term) +
                                      " ខែ\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].balance } },
                                [
                                  _vm._v(
                                    "\n                            $ " +
                                      _vm._s(data[indextr].balance) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].created_at } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].created_at) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        })
                      }
                    }
                  ])
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "indextr" } }, [
                        _vm._v("ល.រ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "item" } }, [
                        _vm._v("ប្រភេទត្រូវបង់")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "term" } }, [
                        _vm._v("រយៈពេលបង់")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "balance" } }, [
                        _vm._v("តម្លៃ")
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
              _c("vs-divider")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            width: "95%",
            height: "auto",
            scrollable: true,
            pivotY: 0.07,
            adaptive: true,
            clickToClose: false,
            name: "add-payment"
          }
        },
        [
          _c("div", { staticClass: "flex justify-end" }, [
            _c(
              "i",
              {
                staticClass:
                  "vs-icon vs-popup--close material-icons text-warning",
                staticStyle: { background: "rgb(255, 255, 255)" },
                on: {
                  click: function($event) {
                    return _vm.$modal.hide("add-payment")
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
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-3/4 flex mt-20" },
                  [
                    _c(
                      "vs-select",
                      {
                        staticClass: "w-1/4",
                        attrs: {
                          autocomplete: "",
                          placeholder: "ជ្រើសរើសឈ្មោះសិស្ស"
                        },
                        on: {
                          change: function($event) {
                            return _vm.passStudentInfo(_vm.students)
                          }
                        },
                        model: {
                          value: _vm.students,
                          callback: function($$v) {
                            _vm.students = $$v
                          },
                          expression: "students"
                        }
                      },
                      _vm._l(_vm.all_students, function(item, i) {
                        return _c("vs-select-item", {
                          key: i,
                          attrs: {
                            value:
                              item.id +
                              "," +
                              item.gender +
                              "," +
                              item.dob +
                              "," +
                              item.photo,
                            text: item.name + " " + item.latin
                          }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-1/4 ml-2 mr-2",
                      attrs: { placeholder: "ភេទ", disabled: "" },
                      model: {
                        value: _vm.gender,
                        callback: function($$v) {
                          _vm.gender = $$v
                        },
                        expression: "gender"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-1/4" },
                      [
                        _c("flat-pickr", {
                          staticClass: "w-full",
                          attrs: {
                            placeholder: "ថ្ងៃខែឆ្នាំកំណើត",
                            disabled: ""
                          },
                          model: {
                            value: _vm.dob,
                            callback: function($$v) {
                              _vm.dob = $$v
                            },
                            expression: "dob"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-1/4" },
                      [
                        _c("flat-pickr", {
                          staticClass: "w-full ml-2",
                          attrs: { placeholder: "ថ្ងៃបង់លុយ" },
                          model: {
                            value: _vm.today_date,
                            callback: function($$v) {
                              _vm.today_date = $$v
                            },
                            expression: "today_date"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col lg:w-1/4 justify-end" }, [
                  _c("img", {
                    staticStyle: { height: "150px" },
                    attrs: { src: _vm.photo }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "vs-table",
                {
                  attrs: {
                    pagination: "",
                    "max-items": "5",
                    search: "",
                    data: _vm.all_infos
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
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].year } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].year) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].name } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-select",
                                    {
                                      staticClass: "w-full",
                                      attrs: {
                                        autocomplete: "",
                                        placeholder: "ជ្រើសរើសរយៈពេល"
                                      },
                                      model: {
                                        value: data[indextr].last_term,
                                        callback: function($$v) {
                                          _vm.$set(
                                            data[indextr],
                                            "last_term",
                                            $$v
                                          )
                                        },
                                        expression: "data[indextr].last_term"
                                      }
                                    },
                                    [
                                      _c("vs-select-item", {
                                        attrs: { value: "1", text: "1" }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-select-item", {
                                        attrs: { value: "3", text: "3" }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-select-item", {
                                        attrs: { value: "6", text: "6" }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-select-item", {
                                        attrs: { value: "12", text: "12" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              data[indextr].last_term === 1 ||
                              data[indextr].last_term === "1"
                                ? _c("vs-td", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.getCostOne(
                                            data[indextr].cost_one,
                                            data[indextr].date_pay,
                                            indextr
                                          )
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              data[indextr].last_term === 3 ||
                              data[indextr].last_term === "3"
                                ? _c("vs-td", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.getCostThree(
                                            data[indextr].cost_three,
                                            data[indextr].date_pay,
                                            indextr
                                          )
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              data[indextr].last_term === 6 ||
                              data[indextr].last_term === "6"
                                ? _c("vs-td", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.getCostSix(
                                            data[indextr].cost_six,
                                            data[indextr].date_pay,
                                            indextr
                                          )
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              data[indextr].last_term === 12 ||
                              data[indextr].last_term === "12"
                                ? _c("vs-td", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.getCostTwelve(
                                            data[indextr].cost_twelve,
                                            data[indextr].date_pay,
                                            indextr
                                          )
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              data[indextr].last_term === 0
                                ? _c("vs-td", [
                                    _vm._v(
                                      "\n                            0\n                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              data[indextr].date_pay !== null
                                ? _c(
                                    "vs-td",
                                    [
                                      _c("flat-pickr", {
                                        staticClass: "w-full",
                                        attrs: {
                                          value: data[indextr].date_pay.substr(
                                            0,
                                            10
                                          ),
                                          placeholder: "ថ្ងៃត្រូវបង់លុយដំបូង",
                                          disabled: ""
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "vs-td",
                                    [
                                      _c("flat-pickr", {
                                        staticClass: "w-full",
                                        attrs: {
                                          placeholder: "ថ្ងៃត្រូវបង់លុយដំបូង"
                                        },
                                        model: {
                                          value: data[indextr].date_pay,
                                          callback: function($$v) {
                                            _vm.$set(
                                              data[indextr],
                                              "date_pay",
                                              $$v
                                            )
                                          },
                                          expression: "data[indextr].date_pay"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c("flat-pickr", {
                                    staticClass: "w-full",
                                    attrs: {
                                      placeholder: "ថ្ងៃត្រូវបង់លុយដំបូង",
                                      disabled: ""
                                    },
                                    model: {
                                      value: data[indextr].next_date_pay,
                                      callback: function($$v) {
                                        _vm.$set(
                                          data[indextr],
                                          "next_date_pay",
                                          $$v
                                        )
                                      },
                                      expression: "data[indextr].next_date_pay"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c("vs-button", {
                                    attrs: {
                                      radius: "",
                                      color: "danger",
                                      type: "relief",
                                      "icon-pack": "feather",
                                      icon: "icon-trash"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeItem(indextr)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        })
                      }
                    }
                  ])
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "year" } }, [
                        _vm._v("ឆ្នាំសិក្សា")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "name" } }, [
                        _vm._v("ប្រភេទត្រូវបង់")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("រយៈពេលបង់")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("តម្លៃ")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("ថ្ងៃខែឆ្នាំត្រូវបង់")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("ថ្ងៃខែឆ្នាំត្រូវបង់បន្ទាប់")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("គ្រប់ឬនៅ")])
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "centerx" }, [
                _c("h3", [
                  _c("span", [
                    _vm._v("តម្លៃសរុប: "),
                    _c("b", [
                      _vm._v(
                        _vm._s(_vm.totalPayment.toFixed(2)) +
                          "$​ -> " +
                          _vm._s(_vm.after_discount.toFixed(2)) +
                          "$"
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex" }, [
                  _c(
                    "div",
                    { staticClass: "flex mt-5" },
                    [
                      _c("vs-input-number", {
                        attrs: {
                          label: "បញ្ចុះភាគរយ %:",
                          min: "0",
                          max: "100",
                          "icon-inc": "expand_less",
                          "icon-dec": "expand_more"
                        },
                        on: { input: _vm.percentDiscount },
                        model: {
                          value: _vm.discount,
                          callback: function($$v) {
                            _vm.discount = $$v
                          },
                          expression: "discount"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex mt-5" },
                    [
                      _c("vs-input-number", {
                        attrs: {
                          label: "បញ្ចុះជាសាច់ប្រាក់ $:",
                          min: "0",
                          max: _vm.total_payment,
                          "icon-inc": "expand_less",
                          "icon-dec": "expand_more"
                        },
                        on: { input: _vm.cashDiscount },
                        model: {
                          value: _vm.cash_discount,
                          callback: function($$v) {
                            _vm.cash_discount = $$v
                          },
                          expression: "cash_discount"
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-end btn-group" },
                [
                  _vm.all_infos.length
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            icon: "icon-save",
                            "icon-pack": "feather",
                            type: "relief"
                          },
                          on: { click: _vm.storeInvoice }
                        },
                        [_vm._v("រក្សាទុក")]
                      )
                    : _vm._e()
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
      _c("print-invoice", { ref: "PrintInvoice" })
    ],
    1
=======
    "div",
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "vx-row no-gutter justify-center items-center"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col hidden lg:block lg:w-1/2" },
                      [
                        _c("img", {
                          staticClass: "mx-auto",
                          attrs: {
                            src: __webpack_require__(/*! @assets/images/pages/login.png */ "./resources/assets/images/pages/login.png"),
                            alt: "login"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                      },
                      [
                        _c("div", { staticClass: "p-8 login-tabs-container" }, [
                          _c("div", { staticClass: "vx-card__title mb-4" }, [
                            _c("h4", { staticClass: "mb-4" }, [
                              _vm._v("Login")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Welcome back, please login to your account."
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  name: "email",
                                  "icon-no-border": "",
                                  icon: "icon icon-user",
                                  "icon-pack": "feather",
                                  "label-placeholder": "Email"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  name: "password",
                                  "icon-no-border": "",
                                  icon: "icon icon-lock",
                                  "icon-pack": "feather",
                                  "label-placeholder": "Password"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-wrap justify-between my-5"
                                },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      staticClass: "mb-3",
                                      model: {
                                        value: _vm.checkbox_remember_me,
                                        callback: function($$v) {
                                          _vm.checkbox_remember_me = $$v
                                        },
                                        expression: "checkbox_remember_me"
                                      }
                                    },
                                    [_vm._v("Remember Me")]
                                  ),
                                  _vm._v(" "),
                                  _c("router-link", { attrs: { to: "" } }, [
                                    _vm._v("Forgot Password?")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-button", { attrs: { type: "border" } }, [
                                _vm._v("Register")
                              ]),
                              _vm._v(" "),
                              _c("vs-button", { staticClass: "float-right" }, [
                                _vm._v("Login")
                              ]),
                              _vm._v(" "),
                              _c("vs-divider", [_vm._v("OR")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "social-login-buttons flex flex-wrap items-center mt-4"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9",
                                          attrs: {
                                            "aria-hidden": "true",
                                            focusable: "false",
                                            "data-prefix": "fab",
                                            "data-icon": "facebook-f",
                                            role: "img",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 264 512"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              fill: "currentColor",
                                              d:
                                                "M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "text-white h-4 w-4 svg-inline--fa fa-twitter fa-w-16",
                                          attrs: {
                                            "aria-hidden": "true",
                                            focusable: "false",
                                            "data-prefix": "fab",
                                            "data-icon": "twitter",
                                            role: "img",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 512 512"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              fill: "currentColor",
                                              d:
                                                "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "text-white h-4 w-4 svg-inline--fa fa-google fa-w-16",
                                          attrs: {
                                            "aria-hidden": "true",
                                            focusable: "false",
                                            "data-prefix": "fab",
                                            "data-icon": "google",
                                            role: "img",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 488 512"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              fill: "currentColor",
                                              d:
                                                "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15",
                                          attrs: {
                                            "aria-hidden": "true",
                                            focusable: "false",
                                            "data-prefix": "fab",
                                            "data-icon": "github-alt",
                                            role: "img",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 480 512"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              fill: "currentColor",
                                              d:
                                                "M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ]
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true& ***!
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
        width: "60%",
        height: "auto",
        scrollable: true,
        pivotY: 0.07,
        adaptive: true,
        clickToClose: false,
        name: "print-invoice"
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
                return _vm.$modal.hide("print-invoice")
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
                    icon: "icon-printer",
                    "icon-pack": "feather",
                    type: "relief"
                  }
                },
                [_vm._v("បោះពុម្ភ")]
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

=======
/***/ "./resources/assets/images/pages/login.png":
/*!*************************************************!*\
  !*** ./resources/assets/images/pages/login.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c

module.exports = "/images/login.png?d814adb752d2d047b8292d6de603025f";

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/payment/Payment.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/payment/Payment.vue ***!
  \****************************************************/
=======
/***/ "./resources/js/src/views/pages/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue ***!
  \************************************************/
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment.vue?vue&type=template&id=27bf6e43&scoped=true& */ "./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true&");
/* harmony import */ var _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba09a9b8& */ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
  false,
  null,
  "27bf6e43",
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/payment/Payment.vue"
=======
component.options.__file = "resources/js/src/views/pages/Login.vue"
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=template&id=27bf6e43&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/Payment.vue?vue&type=template&id=27bf6e43&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_27bf6e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/payment/PrintInvoice.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/payment/PrintInvoice.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true& */ "./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true&");
/* harmony import */ var _PrintInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f6d30d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/payment/PrintInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true& ***!
  \****************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8& ***!
  \*******************************************************************************/
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/payment/PrintInvoice.vue?vue&type=template&id=5f6d30d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintInvoice_vue_vue_type_template_id_5f6d30d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=ba09a9b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 6b3229d3f46ac3b9ea1e291fa806637f7708c60c



/***/ })

}]);