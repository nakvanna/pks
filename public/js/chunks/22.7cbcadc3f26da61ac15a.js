(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{vu0H:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),s=a.n(n),d=a("w48C"),u=a.n(d);a("K+Wz");function i(e,t,a,n,s,d,u){try{var i=e[d](u),r=i.value}catch(e){return void a(e)}i.done?t(r):Promise.resolve(r).then(n,s)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(n,s){var d=e.apply(t,a);function u(e){i(d,n,s,u,r,"next",e)}function r(e){i(d,n,s,u,r,"throw",e)}u(void 0)}))}}var o,c,l,_,p={name:"PayDue",components:{flatPickr:u.a},data:function(){return{students:{label_data:"ជ្រើសរើសសិស្ស",gender:"ភេទ",dob:"ថ្ងៃខែឆ្នាំកំណើត",photo:"images/placeholder/placeholder.png"},student_id:null,gender:null,dob:null,photo:null,name:null,latin:null,balance:0,default_discount:null,today_date:this.moment().format("YYYY-MM-DD"),date_reduce_due:this.moment().format("YYYY-MM-DD"),pay_due:0,desc:"",invoice_id:null,total_due:0,is_selected:!1,all_invoice_stu:[],all_due_reduce:[]}},computed:{all_students:function(){return this.$store.getters.all_students},get_invoice_stu:function(){return this.$store.getters.get_invoice_stu},student_options:function(){return this.all_students.map((function(e){return{id:e.id,name:e.name,latin:e.latin,label_data:"".concat(e.name,"-").concat(e.latin,"-").concat(e.gender,"-").concat(e.dob),gender:e.gender,dob:e.dob,photo:e.photo,balance:e.balance,discount:e.discount}}))},get_all_dueHistory:function(){return this.$store.getters.get_due_histories},get_SumRow:function(){var e=0;return this.get_all_dueHistory.map((function(t){e+=parseFloat(t.pay_due)})),e}},methods:{calculate:(_=r(s.a.mark((function e(){var t,a,n,d,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=this.all_invoice_stu,n=this.all_due_reduce,d=this.all_invoice_stu,u=0,i=a.map((function(e){n.map((function(t){e.id===t.invoice_id&&(d[u].due_balance=parseFloat(d[u].due_balance)+parseFloat(t.pay_due))})),console.log(d[u]),u+=1})),e.next=8,Promise.all(i).then((function(){d.map((function(e){(null!==t.date_reduce_due||t.pay_due>0)&&(t.$vs.loading({type:"material"}),-1*parseFloat(e.due_balance)<=t.pay_due?0!==parseFloat(e.due_balance)&&(t.$store.dispatch("updateIncrementDue",{id:t.student_id,due:-1*parseFloat(e.due_balance)}).then(),t.$store.dispatch("storeDueHistory",{invoice_id:e.id,date_reduce_due:t.date_reduce_due,pay_due:-1*parseFloat(e.due_balance),desc:t.desc}).then((function(e){e&&t.$vs.loading.close()})),t.pay_due=parseFloat(t.pay_due)+parseFloat(e.due_balance)):0!==parseFloat(e.due_balance)&&(t.$store.dispatch("updateIncrementDue",{id:t.student_id,due:parseFloat(t.pay_due)}).then(),t.$store.dispatch("storeDueHistory",{invoice_id:e.id,date_reduce_due:t.date_reduce_due,pay_due:parseFloat(t.pay_due),desc:t.desc}).then((function(e){e&&t.$vs.loading.close()})),t.pay_due=parseFloat(t.pay_due)+parseFloat(e.due_balance)))}))}));case 8:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)}),passStudentInfo:(l=r(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.all_due_reduce=[],this.student_id=this.students.id,this.gender=this.students.gender,this.dob=this.students.dob,this.photo=this.students.photo,this.name=this.students.name,this.latin=this.students.latin,this.balance=this.students.balance,this.default_discount=this.students.discount,this.is_selected=!0,e.next=12,this.$store.dispatch("fetchInvoiceByStuID",this.student_id);case 12:this.all_invoice_stu=this.get_invoice_stu,this.fetchAllDueByInv();case 14:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),fetchAllDueByInv:(c=r(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=this.get_invoice_stu.map(function(){var e=r(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchDueHistoryOnly",a.id);case 2:t.get_all_dueHistory.map((function(e){void 0!==e&&(console.log(e),t.all_due_reduce.push(e))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(a).then((function(){}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),preFixZero:function(e,t){for(var a=""+e;a.length<t;)a="0"+a;return a},storeDueHistory:(o=r(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==(t=this).date_reduce_due||t.pay_due>0)){e.next=7;break}return t.$vs.loading({type:"material"}),e.next=5,t.$store.dispatch("updateIncrementDue",{id:t.student_id,due:t.pay_due});case 5:return e.next=7,t.$store.dispatch("storeDueHistory",{invoice_id:t.invoice_id,date_reduce_due:t.date_reduce_due,pay_due:t.pay_due,desc:t.desc}).then((function(e){e&&(t.$vs.loading.close(),t.pay_due=0)}));case 7:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}},v=a("KHd+"),h=Object(v.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"no-shadow"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-5/6"},[a("v-select",{staticClass:"w-full",attrs:{clearable:!1,placeholder:"ជ្រើសរើសឈ្មោះសិស្ស",options:e.student_options,label:"label_data"},on:{input:e.passStudentInfo},model:{value:e.students,callback:function(t){e.students=t},expression:"students"}})],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/6"},[a("flat-pickr",{staticClass:"w-full",attrs:{placeholder:"ថ្ងៃបង់លុយ"},model:{value:e.today_date,callback:function(t){e.today_date=t},expression:"today_date"}})],1)]),e._v(" "),a("h5",{staticClass:"pt-2"},[e._v("ជំពាក់សរុប៖ "+e._s(e.$formatter.format(-1*e.balance)))]),e._v(" "),e.is_selected?a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-1/2 mr-2"},[a("flat-pickr",{staticClass:"w-full mr-2",attrs:{placeholder:"ថ្ងៃបង់លុយ"},model:{value:e.date_reduce_due,callback:function(t){e.date_reduce_due=t},expression:"date_reduce_due"}})],1),e._v(" "),a("div",{staticClass:"w-1/2 mr-2"},[a("vs-input-number",{attrs:{label:"សាច់ប្រាក់សង $:",mix:"0",max:-1*e.balance,"icon-inc":"expand_less","icon-dec":"expand_more"},model:{value:e.pay_due,callback:function(t){e.pay_due=t},expression:"pay_due"}})],1)]),e._v(" "),a("div",{staticClass:"w-full mt-3"},[a("vs-textarea",{attrs:{label:"Note"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}})],1),e._v(" "),e.is_selected?a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:e.calculate}},[e._v("\n            ទូទាត់ការជំពាក់\n        ")]):e._e(),e._v(" "),a("br"),e._v(" "),a("vs-table",{attrs:{data:e.all_due_reduce},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return e._l(n,(function(t,s){return a("vs-tr",{key:s,attrs:{data:t}},[a("vs-td",{attrs:{data:s}},[e._v("\n                        "+e._s(s+1)+"\n                    ")]),e._v(" "),a("vs-td",{attrs:{data:n[s].invoice_id}},[e._v("\n                        "+e._s(n[s].invoice_id)+"\n                    ")]),e._v(" "),a("vs-td",{attrs:{data:n[s].pay_due}},[e._v("\n                        "+e._s(e.$formatter.format(n[s].pay_due))+"\n                    ")]),e._v(" "),a("vs-td",{attrs:{data:n[s].desc}},[e._v("\n                        "+e._s(n[s].desc)+"\n                    ")]),e._v(" "),a("vs-td",{attrs:{data:n[s].date_reduce_due}},[e._v("\n                        "+e._s(n[s].date_reduce_due)+"\n                    ")])],1)}))}}],null,!1,3633972915)},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"indextr"}},[e._v("ល.រ")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"invoice_id"}},[e._v("វិក័យបត្រ")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"pay_due"}},[e._v("ចំនូនសង")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"desc"}},[e._v("ពិពណ៌នា")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"date_reduce_due"}},[e._v("ថ្ងៃទីសង")])],1)],2)],1):e._e()],1)}),[],!1,null,"24e4d0c7",null);t.default=h.exports}}]);