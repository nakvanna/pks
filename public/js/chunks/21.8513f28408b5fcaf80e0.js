(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ZfvG:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),n=s.n(a),i=s("w48C"),o=s.n(i),r=(s("K+Wz"),s("rdXg")),c=s.n(r);function l(t,e,s,a,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(a,n)}function _(t){return function(){var e=this,s=arguments;return new Promise((function(a,n){var i=t.apply(e,s);function o(t){l(i,a,n,o,r,"next",t)}function r(t){l(i,a,n,o,r,"throw",t)}o(void 0)}))}}var d,v,u={name:"PrintInvoice",data:function(){return{master_item:[],list_item:[]}},methods:{show:function(t,e){this.moment.locale("km"),this.$refs.print_invoice.open(),this.master_item=t,this.list_item=e},_print:(v=_(n.a.mark((function t(){var e,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#print-invoice"),s={type:"dataURL"},t.next=4,this.$html2canvas(e,s);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),printHtml:(d=_(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c()({printable:"section-to-print",type:"html",css:["https://fonts.googleapis.com/css?family=Battambang&display=swap","https://pks.dev.siqware.app/css/main.css","https://pks.dev.siqware.app/css/vuesax.css","https://pks.dev.siqware.app/css/app.css"]});case 1:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)})}},p=s("KHd+"),m=Object(p.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("sweet-modal",{ref:"print_invoice",attrs:{title:"Print Invoice",blocking:!0,width:t.mobilecheck()?"":"50%"}},[s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"pb-4",attrs:{id:"section-to-print"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("img",{staticClass:"w-full",attrs:{src:"images/placeholder/pks.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"vx-row mb-3 mt-3"},[s("div",{staticClass:"vx-col w-full"},[s("table",{staticClass:"w-full"},[s("tr",[s("td",{staticClass:"w-1/3 print:w-1/3"},[s("h5",[t._v("ឈ្មោះ​​ ៖​ "+t._s(t.master_item.name))])]),t._v(" "),s("td",{staticClass:"w-1/3 print:w-1/3"},[s("h5",[t._v("ឡាតាំង ៖ "+t._s(t.master_item.latin))])]),t._v(" "),s("td",{staticClass:"w-1/3 print:w-1/3"},[s("h5",[t._v("ភេទ: "+t._s(t.master_item.gender))])])])])])]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("table",{staticClass:"custom"},[s("tbody",[s("tr",[s("th",{staticClass:"custom"},[t._v("ល.រ")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("រាយមុខសេវាកម្ម")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("រយៈពេលបង់")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("ចំនួនទឹកប្រាក់")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("អ្នកទទូលបន្ទុក")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("ចាប់ផ្ដើមពីថ្ងៃទី")]),t._v(" "),s("th",{staticClass:"custom"},[t._v("រហូតដល់ថ្ងៃទី")])]),t._v(" "),t._l(t.list_item,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"custom"},[t._v(t._s(a+1))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.item))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.term))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.balance))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.emp_name))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.date_pay))]),t._v(" "),s("td",{staticClass:"custom"},[t._v(t._s(e.next_date_pay))])])}))],2),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"custom text-right",attrs:{colspan:"3"}},[s("b",[t._v("ទឹកប្រាក់សរុប:")])]),t._v(" "),s("td",{staticClass:"custom"},[s("b",[t._v(t._s(t.$formatter.format(t.master_item.total)))])]),t._v(" "),s("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("\n                                ម៉ោង "),s("b",[t._v(t._s(t.moment().format("h:mm:ss A")))]),t._v(" ថ្ងៃទីៈ "),s("b",[t._v(t._s(t.moment().format("D")))]),t._v(" ខែ "),s("b",[t._v(t._s(t.moment().format("MMM")))]),t._v(" ឆ្នាំ "),s("b",[t._v(t._s(t.moment().format("Y")))])])]),t._v(" "),s("tr",[s("td",{staticClass:"custom text-right",attrs:{colspan:"3"}},[s("b",[t._v("បញ្ចុះតម្លៃ:")])]),t._v(" "),s("td",{staticClass:"custom"},[s("b",[t._v(t._s(t.master_item.discount)+" %")])]),t._v(" "),s("td"),t._v(" "),s("td",{staticClass:"text-center"},[s("h5",[t._v("បេឡា")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticClass:"custom text-right",attrs:{colspan:"3"}},[s("b",[t._v("ទឹកប្រាក់ត្រូវបង់:")])]),t._v(" "),s("td",{staticClass:"custom"},[s("b",[t._v(t._s(t.$formatter.format(t.master_item.after)))])]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])])])]),t._v(" "),s("div",{staticClass:"vx-row mt-3"},[s("div",{staticClass:"vx-col w-full"},[s("table",[s("tr",[s("td",{staticClass:"text-danger"},[t._v("\n                                1: ទឹកប្រាក់បង់ហើយមិនអាចដកវិញបានទេ 2: សូមរក្សាបង្កាន់ដៃបង់ប្រាក់ដើម្បីផ្ទៀងផ្ទាត់\n                            ")])]),t._v(" "),s("tr",[s("td",{staticClass:"text-danger"},[t._v("\n                                3: តម្លៃខាងលើ គឺសម្រាប់តែសេវាកម្មអប់រំប៉ុណ្ណោះ ចំពោះការគ្រោះថ្នាក់ជាយថាហេតុជាបន្ទុករបស់ មាតាបិតា ឬអាណាព្យាបាលសិស្ស\n                            ")])])])])])]),t._v(" "),s("vs-divider"),t._v(" "),s("div",{staticClass:"flex justify-end btn-group"},[s("vs-button",{attrs:{icon:"icon-printer","icon-pack":"feather",type:"relief"},on:{click:t.printHtml}},[t._v("បោះពុម្ភ")])],1)],1)],1)}),[],!1,null,"4f02fe6e",null).exports;function h(t,e,s,a,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(a,n)}function f(t){return function(){var e=this,s=arguments;return new Promise((function(a,n){var i=t.apply(e,s);function o(t){h(i,a,n,o,r,"next",t)}function r(t){h(i,a,n,o,r,"throw",t)}o(void 0)}))}}var y,x,w,g,k,b,C,$={name:"Payment",components:{flatPickr:o.a,PrintInvoice:m},computed:{all_students:function(){return this.$store.getters.all_students},getPayments:function(){return this.$store.getters.get_payments},totalPayment:function(){for(var t=0,e=this.all_infos,s=0;s<e.length;s++)t+=parseFloat(e[s].term_selected);return this.total_payment=t,this.after_discount=t,t},getCurYear:function(){return this.$store.getters.get_cur_year},getInvoices:function(){return this.$store.getters.get_invoices},getInvoicesDetail:function(){return this.$store.getters.get_invoice_details}},created:(C=f(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchStudent");case 2:return t.next=4,this.$store.dispatch("fetchCurYear");case 4:return t.next=6,this.$store.dispatch("fetchInvoices");case 6:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),data:function(){return{discount:0,after_discount:0,cash_discount:0,users:[],selected:[],students:"",student_id:"",gender:"",dob:null,photo:"https://data.whicdn.com/images/300580381/original.jpg",name:"",latin:"",all_infos:[],total_payment:0,today_date:this.moment().format("YYYY-MM-DD")}},methods:{cashDiscount:function(){this.discount=parseFloat(100*this.cash_discount/this.total_payment).toFixed(2),this.after_discount=this.total_payment-this.cash_discount},percentDiscount:function(){this.cash_discount=parseFloat(this.total_payment*this.discount/100).toFixed(2),this.after_discount=this.total_payment-this.cash_discount},getCostOne:function(t,e,s){var a=t,n=this.moment(e).add("month",1).format("YYYY-MM-DD");if(n>this.all_infos[s].last_date_pay){this.all_infos[s].next_date_pay=this.all_infos[s].last_date_pay;var i=this.moment(e),o=this.moment(this.all_infos[s].last_date_pay).diff(i,"days");a=(parseFloat(t)/30*o).toFixed()}else this.all_infos[s].next_date_pay=n;return this.all_infos[s].term_selected=a,a},getCostThree:function(t,e,s){var a=t,n=this.moment(e).add("month",3).format("YYYY-MM-DD");if(console.log(this.moment().add("months",2).format("YYYY-MM-DD")),n>this.all_infos[s].last_date_pay){this.all_infos[s].next_date_pay=this.all_infos[s].last_date_pay;var i=this.moment(e),o=this.moment(this.all_infos[s].last_date_pay).diff(i,"days");a=(parseFloat(t)/91.25*o).toFixed(2)}else this.all_infos[s].next_date_pay=n;return this.all_infos[s].term_selected=a,a},getCostSix:function(t,e,s){var a=t,n=this.moment(e).add("months",6).format("YYYY-MM-DD");if(n>this.all_infos[s].last_date_pay){this.all_infos[s].next_date_pay=this.all_infos[s].last_date_pay;var i=this.moment(e),o=this.moment(this.all_infos[s].last_date_pay).diff(i,"days");a=(parseFloat(t)/182.5*o).toFixed(2)}else this.all_infos[s].next_date_pay=n;return this.all_infos[s].term_selected=a,a},getCostTwelve:function(t,e,s){var a=t,n=this.moment(e).add("months",12).format("YYYY-MM-DD");if(n>this.all_infos[s].last_date_pay){this.all_infos[s].next_date_pay=this.all_infos[s].last_date_pay;var i=this.moment(e),o=this.moment(this.all_infos[s].last_date_pay).diff(i,"days");a=(parseFloat(t)/365*o).toFixed(2)}else this.all_infos[s].next_date_pay=n;return this.all_infos[s].term_selected=a,a},getServiceStudy:(b=f(n.a.mark((function t(e){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=this).all_infos=[],t.next=4,this.$store.dispatch("fetchPayments",e);case 4:this.getPayments.services.map(function(){var t=f(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===e.services.employee_id?s.all_infos.push({year:e.year,service_id:e.id,name:e.services.service,date_pay:e.date_pay,next_date_pay:null,last_date_pay:e.last_date_pay,last_term:e.last_term,cost_one:e.services.cost_one,cost_three:e.services.cost_three,cost_six:e.services.cost_six,cost_twelve:e.services.cost_twelve,is_used:e.is_used,term_selected:0,employee_name:"គ្មានអ្នកទទួលបន្ទុក"}):s.all_infos.push({year:e.year,service_id:e.id,name:e.services.service,date_pay:e.date_pay,next_date_pay:null,last_date_pay:e.last_date_pay,last_term:e.last_term,cost_one:e.services.cost_one,cost_three:e.services.cost_three,cost_six:e.services.cost_six,cost_twelve:e.services.cost_twelve,is_used:e.is_used,term_selected:0,employee_name:e.services.employees.kh_name});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.getPayments.studies.map(function(){var t=f(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===e.study_infos.employee_id?s.all_infos.push({year:e.year,study_id:e.id,name:e.study_infos.level+""+e.study_infos.class_name,date_pay:e.date_pay,next_date_pay:null,last_date_pay:e.last_date_pay,last_term:e.last_term,cost_one:e.study_infos.cost_one,cost_three:e.study_infos.cost_three,cost_six:e.study_infos.cost_six,cost_twelve:e.study_infos.cost_twelve,is_used:e.is_used,term_selected:0,employee_name:"គ្មានអ្នកទទួលបន្ទុក"}):s.all_infos.push({year:e.year,study_id:e.id,name:e.study_infos.level+""+e.study_infos.class_name,date_pay:e.date_pay,next_date_pay:null,last_date_pay:e.last_date_pay,last_term:e.last_term,cost_one:e.study_infos.cost_one,cost_three:e.study_infos.cost_three,cost_six:e.study_infos.cost_six,cost_twelve:e.study_infos.cost_twelve,is_used:e.is_used,term_selected:0,employee_name:e.study_infos.employees.kh_name});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t,this)}))),function(t){return b.apply(this,arguments)}),passStudentInfo:function(t){this.selected=[],this.all_infos=[];var e=t.split(",");this.student_id=e[0],this.gender=e[1],this.dob=e[2],this.photo=e[3],this.name=e[4],this.latin=e[5],this.getServiceStudy({id:e[0],cur_year:this.getCurYear})},updateStudyInfo:(k=f(n.a.mark((function t(e){var s,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=this,this.$vs.loading({type:"material"}),a=e.map(function(){var t=f(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$store.dispatch("updateStudyInfo",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=5,Promise.all(a).then((function(){s.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យឆ្នាំសិក្សាត្រូវកែប្រែ!",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),s.$vs.loading.close()}));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)}),updateServiceInfo:(g=f(n.a.mark((function t(e){var s,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=this,this.$vs.loading({type:"material"}),a=e.map(function(){var t=f(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.$store.dispatch("updateServiceInfo",e);case 2:console.log(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=5,Promise.all(a).then((function(){s.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យសេវាកម្ម​​ត្រូវកែប្រែ!",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),s.$vs.loading.close()}));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)}),storeInvoice:(w=f(n.a.mark((function t(){var e,s,a,i,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.$vs.loading({type:"material"}),e=this,s=this.all_infos,a=[],i=[],o=0;o<s.length;o++)void 0===s[o].study_id?i.push({id:s[o].service_id,date_pay:s[o].next_date_pay,last_term:s[o].last_term,last_date_pay:s[o].last_date_pay,is_used:s[o].is_used}):a.push({id:s[o].study_id,date_pay:s[o].next_date_pay,last_term:s[o].last_term,year:s[o].year,last_date_pay:s[o].last_date_pay,from_class:null,to_class:null,date_change:null,is_used:!0});return a.length&&this.updateStudyInfo(a),i.length&&this.updateServiceInfo(i),t.next=10,e.$store.dispatch("storeInvoice",{student_id:this.student_id,invoice_date:this.today_date,balance:this.total_payment,after_discount:this.after_discount,discount:this.discount,payment_status:!1}).then((function(t){if(t){var s=[];e.all_infos.map(function(){var a=f(n.a.mark((function a(i){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.push({invoice_id:t.id,item:i.name,term:i.last_term,balance:i.term_selected,date_pay:i.date_pay,next_date_pay:i.next_date_pay,emp_name:i.employee_name}),a.next=3,e.$store.dispatch("storeInvoiceDetail",{invoice_id:t.id,item:i.name,term:i.last_term,balance:i.term_selected,date_pay:i.date_pay,next_date_pay:i.next_date_pay,emp_name:i.employee_name});case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានរក្សាទុក",color:"primary",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.$vs.loading.close(),e.$refs.PrintInvoice.show({name:e.name,latin:e.latin,gender:e.gender,total:e.total_payment,after:e.after_discount,discount:e.discount},s)}}));case 10:this.discount=0,this.cash_discount=0,this.all_infos=[];case 13:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)}),removeItem:function(t){this.all_infos.splice(t,1)},showInvoiceDetail:(x=f(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$modal.show("show-invoice-detail"),t.next=3,this.$store.dispatch("showInvoiceDetail",e);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return x.apply(this,arguments)}),printInvoice:(y=f(n.a.mark((function t(e,s,a,i,o,r,c){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("showInvoiceDetail",e);case 2:this.$refs.PrintInvoice.show({name:s,latin:a,gender:i,total:o,after:r,discount:c},this.getInvoicesDetail);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,s,a,n,i,o){return y.apply(this,arguments)})},mounted:function(){this.moment.locale("en")}},I=Object(p.a)($,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex btn-group"},[s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(e){return t.$modal.show("add-payment")}}},[t._v("\n            បង់លុយ\n        ")])],1),t._v(" "),s("vs-table",{attrs:{multiple:"",pagination:"","max-items":"5",search:"",data:t.getInvoices},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,n){return s("vs-tr",{key:n,attrs:{data:e}},[s("vs-td",{attrs:{data:a[n].name}},[t._v("\n                    "+t._s(a[n].name)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].latin}},[t._v("\n                    "+t._s(a[n].latin)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].balance}},[t._v("\n                    $ "+t._s(a[n].balance)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].discount}},[t._v("\n                    "+t._s(a[n].discount)+" %\n                ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].after_discount}},[t._v("\n                    $ "+t._s(a[n].after_discount)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].invoice_date}},[t._v("\n                    "+t._s(a[n].invoice_date)+"\n                ")]),t._v(" "),!0===a[n].payment_status?s("vs-td",[s("vs-chip",{attrs:{color:"success"}},[s("span",[t._v("បានទទូល")])])],1):s("vs-td",[s("vs-chip",{attrs:{color:"danger"}},[s("span",[t._v("មិនទាន់ទទូល")])])],1),t._v(" "),s("vs-td",[s("div",{staticClass:"btn-group"},[s("vs-button",{attrs:{size:"small",color:"success",type:"line","icon-pack":"feather",icon:"icon-eye"},on:{click:function(e){return t.showInvoiceDetail(a[n].id)}}},[t._v(" លម្អិត\n                        ")]),t._v(" "),s("vs-button",{attrs:{size:"small",color:"primary",type:"line","icon-pack":"feather",icon:"icon-printer"},on:{click:function(e){return t.printInvoice(a[n].id,a[n].name,a[n].latin,a[n].gender,a[n].balance,a[n].after_discount,a[n].discount)}}},[t._v("បោះពុម្ភ\n                        ")])],1)])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"name"}},[t._v("ឈ្មោះសិស្ស")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"latin"}},[t._v("ឈ្មោះឡាតាំង")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"class_name"}},[t._v("តម្លៃដើម")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"date_pay"}},[t._v("បញ្ចុះតម្លៃ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"is_used"}},[t._v("តម្លៃក្រោយបញ្ចុះតម្លៃ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"is_used"}},[t._v("ថ្ងៃបង់លុយ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"is_used"}},[t._v("បានទទូល")]),t._v(" "),s("vs-th",[t._v("ប្រតិបត្តិការណ៌")])],1)],2),t._v(" "),s("modal",{attrs:{width:"60%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"show-invoice-detail"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("show-invoice-detail")}}},[t._v("close")])]),t._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("vs-table",{attrs:{pagination:"","max-items":"10",data:t.getInvoicesDetail},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,n){return s("vs-tr",{key:n,attrs:{data:e}},[s("vs-td",{attrs:{data:n}},[t._v("\n                            "+t._s(n+1)+"\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].item}},[t._v("\n                            "+t._s(a[n].item)+"\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].term}},[t._v("\n                            "+t._s(a[n].term)+" ខែ\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].balance}},[t._v("\n                            $ "+t._s(a[n].balance)+"\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].created_at}},[t._v("\n                            "+t._s(a[n].created_at)+"\n                        ")])],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"indextr"}},[t._v("ល.រ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"item"}},[t._v("ប្រភេទត្រូវបង់")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"term"}},[t._v("រយៈពេលបង់")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"balance"}},[t._v("តម្លៃ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"created_at"}},[t._v("កាលបរិច្ឆេទ")])],1)],2),t._v(" "),s("vs-divider")],1)],1),t._v(" "),s("modal",{attrs:{width:"95%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"add-payment"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-payment")}}},[t._v("close")])]),t._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-3/4 flex mt-20"},[s("vs-select",{staticClass:"w-1/4",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសឈ្មោះសិស្ស"},on:{change:function(e){return t.passStudentInfo(t.students)}},model:{value:t.students,callback:function(e){t.students=e},expression:"students"}},t._l(t.all_students,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.id+","+t.gender+","+t.dob+","+t.photo+","+t.name+","+t.latin,text:t.name+" "+t.latin}})})),1),t._v(" "),s("vs-input",{staticClass:"w-1/4 ml-2 mr-2",attrs:{placeholder:"ភេទ",disabled:""},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}}),t._v(" "),s("div",{staticClass:"w-1/4"},[s("flat-pickr",{staticClass:"w-full",attrs:{placeholder:"ថ្ងៃខែឆ្នាំកំណើត",disabled:""},model:{value:t.dob,callback:function(e){t.dob=e},expression:"dob"}})],1),t._v(" "),s("div",{staticClass:"w-1/4"},[s("flat-pickr",{staticClass:"w-full ml-2",attrs:{placeholder:"ថ្ងៃបង់លុយ"},model:{value:t.today_date,callback:function(e){t.today_date=e},expression:"today_date"}})],1)],1),t._v(" "),s("div",{staticClass:"vx-col lg:w-1/4 justify-end"},[s("img",{staticStyle:{height:"150px"},attrs:{src:t.photo}})])]),t._v(" "),s("vs-table",{attrs:{pagination:"","max-items":"5",search:"",data:t.all_infos},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,n){return s("vs-tr",{key:n,attrs:{data:e}},[s("vs-td",{attrs:{data:a[n].year}},[t._v("\n                            "+t._s(a[n].year)+"\n                        ")]),t._v(" "),s("vs-td",{attrs:{data:a[n].name}},[t._v("\n                            "+t._s(a[n].name)+"\n                        ")]),t._v(" "),s("vs-td",[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសរយៈពេល"},model:{value:a[n].last_term,callback:function(e){t.$set(a[n],"last_term",e)},expression:"data[indextr].last_term"}},[s("vs-select-item",{attrs:{value:"1",text:"1"}}),t._v(" "),s("vs-select-item",{attrs:{value:"3",text:"3"}}),t._v(" "),s("vs-select-item",{attrs:{value:"6",text:"6"}}),t._v(" "),s("vs-select-item",{attrs:{value:"12",text:"12"}})],1)],1),t._v(" "),1===a[n].last_term||"1"===a[n].last_term?s("vs-td",[t._v("\n                            "+t._s(t.getCostOne(a[n].cost_one,a[n].date_pay,n))+"\n                        ")]):t._e(),t._v(" "),3===a[n].last_term||"3"===a[n].last_term?s("vs-td",[t._v("\n                            "+t._s(t.getCostThree(a[n].cost_three,a[n].date_pay,n))+"\n                        ")]):t._e(),t._v(" "),6===a[n].last_term||"6"===a[n].last_term?s("vs-td",[t._v("\n                            "+t._s(t.getCostSix(a[n].cost_six,a[n].date_pay,n))+"\n                        ")]):t._e(),t._v(" "),12===a[n].last_term||"12"===a[n].last_term?s("vs-td",[t._v("\n                            "+t._s(t.getCostTwelve(a[n].cost_twelve,a[n].date_pay,n))+"\n                        ")]):t._e(),t._v(" "),0===a[n].last_term?s("vs-td",[t._v("\n                            0\n                        ")]):t._e(),t._v(" "),null!==a[n].date_pay?s("vs-td",[s("flat-pickr",{staticClass:"w-full",attrs:{value:a[n].date_pay,placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង",disabled:""}})],1):s("vs-td",[s("flat-pickr",{staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង"},model:{value:a[n].date_pay,callback:function(e){t.$set(a[n],"date_pay",e)},expression:"data[indextr].date_pay"}})],1),t._v(" "),s("vs-td",[s("flat-pickr",{staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង",disabled:""},model:{value:a[n].next_date_pay,callback:function(e){t.$set(a[n],"next_date_pay",e)},expression:"data[indextr].next_date_pay"}})],1),t._v(" "),s("vs-td",[s("vs-button",{attrs:{radius:"",color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash"},on:{click:function(e){return t.removeItem(n)}}})],1)],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"year"}},[t._v("ឆ្នាំសិក្សា")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"name"}},[t._v("ប្រភេទត្រូវបង់")]),t._v(" "),s("vs-th",[t._v("រយៈពេលបង់")]),t._v(" "),s("vs-th",[t._v("តម្លៃ")]),t._v(" "),s("vs-th",[t._v("ថ្ងៃខែឆ្នាំត្រូវបង់")]),t._v(" "),s("vs-th",[t._v("ថ្ងៃខែឆ្នាំត្រូវបង់បន្ទាប់")]),t._v(" "),s("vs-th",[t._v("គ្រប់ឬនៅ")])],1)],2),t._v(" "),s("div",{staticClass:"centerx"},[s("h3",[s("span",[t._v("តម្លៃសរុប: "),s("b",[t._v(t._s(t.totalPayment.toFixed(2))+"$​ -> "+t._s(t.after_discount.toFixed(2))+"$")])])]),t._v(" "),s("div",{staticClass:"flex"},[s("div",{staticClass:"flex mt-5"},[s("vs-input-number",{attrs:{label:"បញ្ចុះភាគរយ %:",min:"0",max:"100","icon-inc":"expand_less","icon-dec":"expand_more"},on:{input:t.percentDiscount},model:{value:t.discount,callback:function(e){t.discount=e},expression:"discount"}})],1),t._v(" "),s("div",{staticClass:"flex mt-5"},[s("vs-input-number",{attrs:{label:"បញ្ចុះជាសាច់ប្រាក់ $:",min:"0",max:t.total_payment,"icon-inc":"expand_less","icon-dec":"expand_more"},on:{input:t.cashDiscount},model:{value:t.cash_discount,callback:function(e){t.cash_discount=e},expression:"cash_discount"}})],1)])]),t._v(" "),s("vs-divider"),t._v(" "),s("div",{staticClass:"flex justify-end btn-group"},[t.all_infos.length?s("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:t.storeInvoice}},[t._v("រក្សាទុក")]):t._e()],1)],1)],1),t._v(" "),s("print-invoice",{ref:"PrintInvoice"})],1)}),[],!1,null,"8aa0e426",null);e.default=I.exports}}]);