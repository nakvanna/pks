(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0SrF":function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),i=a.n(s),n=a("mgSd"),r=a("w48C"),c=a.n(r),o=(a("K+Wz"),a("QBvj"));a("7emp");function l(e,t,a,s,i,n,r){try{var c=e[n](r),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(s,i)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(s,i){var n=e.apply(t,a);function r(e){l(n,s,i,r,c,"next",e)}function c(e){l(n,s,i,r,c,"throw",e)}r(void 0)}))}}var u,v,f={name:"ServiceInfo",components:{AddServiceInfo:n.a,flatPickr:c.a,AgGridVue:o.AgGridVue},data:function(){return{users:[],selected:[],gridApi:null,columnDefs:[{headerName:"ឆ្នាំសិក្សា",field:"year",checkboxSelection:!0,pinned:!0},{headerName:"ឈ្មោះសិស្ស",field:"name"},{headerName:"ឈ្មោះឡាតាំ",field:"latin"},{headerName:"ភេទ",field:"gender"},{headerName:"ថ្ងៃខែឆ្នាំកំណើត",field:"dob"},{headerName:"កំពុងប្រើប្រាស់សេវាកម្ម",field:"service"},{headerName:"ថ្ងៃត្រូវបង់លុយ",field:"date_pay"},{headerName:"ស្ថានភាព",field:"is_used",cellRenderer:function(e){return"នៅប្រើ"===e.data.is_used?'<span class="text-success">'.concat(e.data.is_used,"</span>"):'<span class="text-danger">'.concat(e.data.is_used,"</span>")}}],defaultColDef:{sortable:!0,resizable:!0,filter:!0},service_info_extract:[],new_last_date_pay:null}},computed:{getServiceInfos:function(){return this.$store.getters.get_service_infos}},created:(v=d(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.service_info_extract,this.getServiceInfos.map(function(){var e=d(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push({id:a.id,year:a.year,student_id:a.students.id,name:a.students.name,latin:a.students.latin,gender:a.students.gender,dob:a.students.dob,service:a.services.type+"-"+a.services.service,date_pay:a.date_pay,last_term:a.last_term,last_date_pay:a.last_date_pay,is_used:!0===a.is_used?"នៅប្រើ":"បានផ្អាក"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),methods:{onGridReady:function(e){this.gridApi=e.api},onSelectionChanged:function(){this.selected=this.gridApi.getSelectedRows()},updateServiceInfo:(u=d(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.new_last_date_pay){e.next=6;break}return(t=this).$vs.loading(),a=t.selected.map(function(){var e=d(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.last_date_pay=t.new_last_date_pay,a.is_used=!1,e.next=4,t.$store.dispatch("updateServiceInfo",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(a).then((function(){t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានកែប្រែ",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.selected=[],t.$vs.loading.close()}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})}},p=a("KHd+"),h=Object(p.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{"no-shadow":""}},[a("vs-row",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-start"}},[a("h5",[e._v("ចំនួនដែលបានជ្រើសរើស: "+e._s(e.selected.length))])]),e._v(" "),a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[e.selected.length?a("div",{staticClass:"flex btn-group"},[a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return e.$refs.addServiceInfo.show(e.selected,!1)}}},[e._v("\n                    បន្ថែមសេវាកម្ម\n                ")]),e._v(" "),a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-refresh-ccw"},on:{click:function(t){return e.$modal.show("stopService")}}},[e._v("\n                    ផ្ដាច់សេវាកម្ម\n                ")])],1):e._e()])],1),e._v(" "),a("vs-divider"),e._v(" "),a("ag-grid-vue",{staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowSelection:"multiple",pagination:!0,paginationPageSize:100,animateRows:!0,rowData:e.service_info_extract},on:{"grid-ready":e.onGridReady,"selection-changed":e.onSelectionChanged}}),e._v(" "),a("add-service-info",{ref:"addServiceInfo"}),e._v(" "),a("modal",{attrs:{width:"500",height:"auto",scrollable:!0,pivotY:.2,adaptive:!0,clickToClose:!1,name:"stopService"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("stopService")}}},[e._v("close")])]),e._v(" "),a("h4",{staticClass:"ml-2"},[a("u",[e._v(" ផ្ដាច់សេវាកម្ម")])]),e._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-col flex"},[a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់ផ្ដាច់",name:"date-pay"},model:{value:e.new_last_date_pay,callback:function(t){e.new_last_date_pay=t},expression:"new_last_date_pay"}})],1),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.updateServiceInfo}},[e._v("ផ្ដាច់សេវាកម្ម")])],1)],1)],1)],1)}),[],!1,null,"366e3a51",null);t.default=h.exports},mgSd:function(e,t,a){"use strict";var s=a("o0o1"),i=a.n(s),n=a("ksP6"),r=a.n(n),c=(a("Hj/Q"),a("w48C")),o=a.n(c);a("K+Wz");function l(e,t,a,s,i,n,r){try{var c=e[n](r),o=c.value}catch(e){return void a(e)}c.done?t(o):Promise.resolve(o).then(s,i)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(s,i){var n=e.apply(t,a);function r(e){l(n,s,i,r,c,"next",e)}function c(e){l(n,s,i,r,c,"throw",e)}r(void 0)}))}}var u,v,f={name:"addServiceService",components:{flatPickr:o.a,vueDropzone:r.a},data:function(){return{checked:!1,data:{year:"",date_pay:null,last_date_pay:null,service_infos:[{service_id:null}]},student_ids:[],service_infos:[],dropzoneOptions:{url:route("file.upload"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ដាក់រូបភាពសិស្ស",thumbnailWidth:150,thumbnailHeight:150}}},computed:{getYears:function(){return this.$store.getters.get_years},getServices:function(){return this.$store.getters.get_services}},created:(v=d(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchYears");case 2:return e.next=4,this.$store.dispatch("fetchServices");case 4:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),methods:{show:function(e,t){if(this.$modal.show("addServiceService"),!0===t)for(var a=0;a<e.length;a++)this.student_ids.push(e[a].id);else for(var s=0;s<e.length;s++)this.student_ids.push(e[s].student_id)},plus:function(){this.data.service_infos.push({service_id:null})},minus:function(e){this.data.service_infos.splice(e,1)},successUpload:function(e,t){this.data.photo=t.path},clearForm:function(){this.checked=!1,this.data={year:"",date_pay:null,last_date_pay:null,service_infos:[{service_id:null}]}},storeServiceInfo:(u=d(i.a.mark((function e(){var t,a,s,n,r,c,o,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this,a=this.data.year,s=this.data.date_pay,n=this.data.last_date_pay,r=this.data.service_infos,c=this.student_ids,o=0;o<c.length;o++)for(l=0;l<r.length;l++)t.service_infos.push({year:a,date_pay:s,last_date_pay:n,student_id:c[o],service_id:r[l].service_id});return this.$vs.loading({type:"material"}),u=t.service_infos.map(function(){var e=d(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("storeServiceInfo",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=11,Promise.all(u).then((function(){t.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងសេវាកម្ម!",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.service_infos=[],t.student_ids=[],t.clearForm(),t.$vs.loading.close()}));case 11:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})}},p=a("KHd+"),h=Object(p.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{width:"700",height:"auto",scrollable:!0,pivotY:.2,adaptive:!0,clickToClose:!1,name:"addServiceService"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("addServiceService")}}},[e._v("close")])]),e._v(" "),a("h4",{staticClass:"ml-2"},[a("u",[e._v(" សេវាកម្ម")])]),e._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col lg:w-1/3 w-full"},[a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:"ឆ្នាំសិក្សា",type:"primary"},model:{value:e.data.year,callback:function(t){e.$set(e.data,"year",t)},expression:"data.year"}},e._l(e.getYears,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.name,text:e.name}})})),1)],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("vs-checkbox",{attrs:{color:"#720ea8"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង",name:"date-pay",disabled:!e.checked},model:{value:e.data.date_pay,callback:function(t){e.$set(e.data,"date_pay",t)},expression:"data.date_pay"}})],1),e._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយចុងក្រោយ",name:"date-pay"},model:{value:e.data.last_date_pay,callback:function(t){e.$set(e.data,"last_date_pay",t)},expression:"data.last_date_pay"}})],1)]),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"vx-row"},e._l(e.data.service_infos,(function(t,s){return a("div",{key:s,staticClass:"vx-col w-full"},[a("vx-input-group",{staticClass:"mb-base "},[a("div",{staticClass:"flex"},[a("vs-select",{staticClass:"w-5/6",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសសេវាកម្ម"},model:{value:t.service_id,callback:function(a){e.$set(t,"service_id",a)},expression:"service_info.service_id"}},e._l(e.getServices,(function(t,s){return t.year===e.data.year?a("vs-select-item",{key:s,attrs:{value:t.id,text:t.year+" "+t.type+" -> "+t.service}}):e._e()})),1),e._v(" "),a("div",{staticClass:"append-text flex w-1/6 btn-addon"},[a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-minus"},on:{click:function(t){return e.minus(s)}}}),e._v(" "),e.data.service_infos.length===s+1?a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus"},on:{click:e.plus}}):e._e()],1)],1)])],1)})),0),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.storeServiceInfo}},[e._v("រក្សាទុក")])],1)],1)],1)}),[],!1,null,"40a309ee",null);t.a=h.exports}}]);