(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0SrF":function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),n=a.n(s),r=a("mgSd"),i=a("w48C"),c=a.n(i);a("K+Wz");function o(e,t,a,s,n,r,i){try{var c=e[r](i),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(s,n)}function l(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var r=e.apply(t,a);function i(e){o(r,s,n,i,c,"next",e)}function c(e){o(r,s,n,i,c,"throw",e)}i(void 0)}))}}var d,v,u={name:"ServiceInfo",components:{AddServiceInfo:r.a,flatPickr:c.a},data:function(){return{users:[],selected:[],service_info_extract:[],new_last_date_pay:null}},computed:{getServiceInfos:function(){return this.$store.getters.get_service_infos}},created:(v=l(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchServiceInfos");case 2:t=this.service_info_extract,this.getServiceInfos.map(function(){var e=l(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push({id:a.id,year:a.year,student_id:a.students.id,name:a.students.name,latin:a.students.latin,gender:a.students.gender,dob:a.students.dob,service:a.services.type+"-"+a.services.service,date_pay:a.date_pay,last_term:a.last_term,last_date_pay:a.last_date_pay,is_used:!0===a.is_used?"នៅប្រើ":"បានផ្អាក"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),methods:{updateServiceInfo:(d=l(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.new_last_date_pay){e.next=6;break}return(t=this).$vs.loading(),a=t.selected.map(function(){var e=l(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.last_date_pay=t.new_last_date_pay,a.is_used=!1,e.next=4,t.$store.dispatch("updateServiceInfo",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(a).then((function(){t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានកែប្រែ",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.selected=[],t.$vs.loading.close()}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})}},_=a("KHd+"),p=Object(_.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{"no-shadow":""}},[a("vs-row",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-start"}},[a("h5",[e._v("ចំនួនដែលបានជ្រើសរើស: "+e._s(e.selected.length))])]),e._v(" "),a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[e.selected.length?a("div",{staticClass:"flex btn-group"},[a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return e.$refs.addServiceInfo.show(e.selected,!1)}}},[e._v("\n                    បន្ថែមសេវាកម្ម\n                ")]),e._v(" "),a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-refresh-ccw"},on:{click:function(t){return e.$modal.show("stopService")}}},[e._v("\n                    ផ្ដាច់សេវាកម្ម\n                ")])],1):e._e()])],1),e._v(" "),a("vs-divider"),e._v(" "),a("vs-table",{attrs:{multiple:"",pagination:"","max-items":"5",search:"",data:e.service_info_extract},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,n){return a("vs-tr",{key:n,attrs:{data:t}},[a("vs-td",{attrs:{data:s[n].year}},[e._v("\n                    "+e._s(s[n].year)+"\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].name}},[e._v("\n                    "+e._s(s[n].name)+"\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].latin}},[e._v("\n                    "+e._s(s[n].latin)+"\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].gender}},[e._v("\n                    "+e._s(s[n].gender)+"\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].dob}},[e._v("\n                    "+e._s(s[n].dob)+"\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].service}},[e._v("\n                    "+e._s(s[n].service)+"\n                ")]),e._v(" "),null!==s[n].date_pay?a("vs-td",{attrs:{data:s[n].date_pay}},[e._v("\n                    "+e._s(s[n].date_pay.substr(0,10))+"\n                ")]):a("vs-td",{attrs:{data:s[n].date_pay}},[e._v("\n                    មិនបានកំណត់\n                ")]),e._v(" "),a("vs-td",{attrs:{data:s[n].is_used}},["នៅប្រើ"===s[n].is_used?a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(s[n].is_used))]):a("vs-chip",{attrs:{color:"danger"}},[e._v(e._s(s[n].is_used))])],1)],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"year"}},[e._v("ឆ្នាំសិក្សា")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"name"}},[e._v("ឈ្មោះសិស្ស")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"latin"}},[e._v("ឈ្មោះឡាតាំ")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"gender"}},[e._v("ភេទ")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"dob"}},[e._v("ថ្ងៃខែឆ្នាំកំណើត")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"class_name"}},[e._v("កំពុងប្រើប្រាស់សេវាកម្ម")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"date_pay"}},[e._v("ថ្ងៃត្រូវបង់លុយ")]),e._v(" "),a("vs-th",{attrs:{"sort-key":"is_used"}},[e._v("ស្ថានភាព")])],1)],2),e._v(" "),a("add-service-info",{ref:"addServiceInfo"}),e._v(" "),a("modal",{attrs:{width:"500",height:"auto",scrollable:!0,pivotY:.2,adaptive:!0,clickToClose:!1,name:"stopService"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("stopService")}}},[e._v("close")])]),e._v(" "),a("h4",{staticClass:"ml-2"},[a("u",[e._v(" ផ្ដាច់សេវាកម្ម")])]),e._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-col flex"},[a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់ផ្ដាច់",name:"date-pay"},model:{value:e.new_last_date_pay,callback:function(t){e.new_last_date_pay=t},expression:"new_last_date_pay"}})],1),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.updateServiceInfo}},[e._v("ផ្ដាច់សេវាកម្ម")])],1)],1)],1)],1)}),[],!1,null,"c5c8e8ce",null);t.default=p.exports},mgSd:function(e,t,a){"use strict";var s=a("o0o1"),n=a.n(s),r=a("ksP6"),i=a.n(r),c=(a("Hj/Q"),a("w48C")),o=a.n(c);a("K+Wz");function l(e,t,a,s,n,r,i){try{var c=e[r](i),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(s,n)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var r=e.apply(t,a);function i(e){l(r,s,n,i,c,"next",e)}function c(e){l(r,s,n,i,c,"throw",e)}i(void 0)}))}}var v,u,_={name:"addServiceService",components:{flatPickr:o.a,vueDropzone:i.a},data:function(){return{checked:!1,data:{year:"",date_pay:null,last_date_pay:null,service_infos:[{service_id:null}]},student_ids:[],service_infos:[],dropzoneOptions:{url:route("file.upload"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ដាក់រូបភាពសិស្ស",thumbnailWidth:150,thumbnailHeight:150}}},computed:{getYears:function(){return this.$store.getters.get_years},getServices:function(){return this.$store.getters.get_services}},created:(u=d(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchYears");case 2:return e.next=4,this.$store.dispatch("fetchServices");case 4:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)}),methods:{show:function(e,t){if(this.$modal.show("addServiceService"),!0===t)for(var a=0;a<e.length;a++)this.student_ids.push(e[a].id);else for(var s=0;s<e.length;s++)this.student_ids.push(e[s].student_id)},plus:function(){this.data.service_infos.push({service_id:null})},minus:function(e){this.data.service_infos.splice(e,1)},successUpload:function(e,t){this.data.photo=t.path},clearForm:function(){this.checked=!1,this.data={year:"",date_pay:null,last_date_pay:null,service_infos:[{service_id:null}]}},storeServiceInfo:(v=d(n.a.mark((function e(){var t,a,s,r,i,c,o,l,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this,a=this.data.year,s=this.data.date_pay,r=this.data.last_date_pay,i=this.data.service_infos,c=this.student_ids,o=0;o<c.length;o++)for(l=0;l<i.length;l++)t.service_infos.push({year:a,date_pay:s,last_date_pay:r,student_id:c[o],service_id:i[l].service_id});return this.$vs.loading({type:"material"}),v=t.service_infos.map(function(){var e=d(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("storeServiceInfo",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=11,Promise.all(v).then((function(){t.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងសេវាកម្ម!",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.service_infos=[],t.clearForm(),t.$vs.loading.close()}));case 11:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})}},p=a("KHd+"),f=Object(p.a)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{width:"700",height:"auto",scrollable:!0,pivotY:.2,adaptive:!0,clickToClose:!1,name:"addServiceService"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("addServiceService")}}},[e._v("close")])]),e._v(" "),a("h4",{staticClass:"ml-2"},[a("u",[e._v(" សេវាកម្ម")])]),e._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col lg:w-1/3 w-full"},[a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:"ឆ្នាំសិក្សា",type:"primary"},model:{value:e.data.year,callback:function(t){e.$set(e.data,"year",t)},expression:"data.year"}},e._l(e.getYears,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.name,text:e.name}})})),1)],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("vs-checkbox",{attrs:{color:"#720ea8"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង",name:"date-pay",disabled:!e.checked},model:{value:e.data.date_pay,callback:function(t){e.$set(e.data,"date_pay",t)},expression:"data.date_pay"}})],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយចុងក្រោយ",name:"date-pay"},model:{value:e.data.last_date_pay,callback:function(t){e.$set(e.data,"last_date_pay",t)},expression:"data.last_date_pay"}})],1)]),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"vx-row"},e._l(e.data.service_infos,(function(t,s){return a("div",{key:s,staticClass:"vx-col w-full"},[a("vx-input-group",{staticClass:"mb-base "},[a("div",{staticClass:"flex"},[a("vs-select",{staticClass:"w-5/6",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសសេវាកម្ម"},model:{value:t.service_id,callback:function(a){e.$set(t,"service_id",a)},expression:"service_info.service_id"}},e._l(e.getServices,(function(t,s){return t.year===e.data.year?a("vs-select-item",{key:s,attrs:{value:t.id,text:t.year+" "+t.type+" -> "+t.service}}):e._e()})),1),e._v(" "),a("div",{staticClass:"append-text flex w-1/6 btn-addon"},[a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-minus"},on:{click:function(t){return e.minus(s)}}}),e._v(" "),e.data.service_infos.length===s+1?a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus"},on:{click:e.plus}}):e._e()],1)],1)])],1)})),0),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.storeServiceInfo}},[e._v("រក្សាទុក")])],1)],1)],1)}),[],!1,null,"5247f326",null);t.a=f.exports}}]);