(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/AM8":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}\n.con-example-images {\n  height: 500px;\n  overflow: auto;\n}",""])},WdiR:function(e,t,s){"use strict";var a=s("xkAy");s.n(a).a},mxq3:function(e,t,s){"use strict";s.r(t);var a=s("o0o1"),o=s.n(a),i=s("+jP+"),r=s("ksP6"),n=s.n(r),l=(s("Hj/Q"),{name:"Create",components:{Datepicker:i.a,vueDropzone:n.a},data:function(){return{is_update:!1,images:[],date:null,createPopup:!1,positionPopup:!1,degreeNotePopup:!1,dropzoneOptions:{url:route("file.upload"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ជ្រើសរើសរូបភាព​ Profile",thumbnailWidth:150,thumbnailHeight:150},position:"",degree_note:"",employees:{id:"",profile:"images/placeholder/placeholder.png",kh_name:"",en_name:"",gender:null,dob:null,position:"",degree_note:"",start_work:null,contact:"",pob:"",addr:""}}},computed:{getPositions:function(){return this.$store.getters.get_positions},getDegreeNotes:function(){return this.$store.getters.get_degree_notes}},methods:{showCreatePopup:function(e){this.is_update=!0,this.$modal.show("add-employee");var t=this.employees,s=e[0];"inner"!==e?(t.id=s.id,t.profile=s.profile,t.kh_name=s.kh_name,t.en_name=s.en_name,t.gender=s.gender,t.dob=s.dob,t.position=s.position,t.degree_note=s.degree_note,t.start_work=s.start_work,t.contact=s.contact,t.pob=s.pob,t.addr=s.addr):this.clearEmployeeForm()},successUpload:function(e,t){this.images.unshift(t)},storePosition:function(){var e=this;""===e.position?e.$vs.notify({title:"ប្រតិបត្តិការណ៍បរាជ័យ",text:"ទិន្នន័យមិនមាន!",color:"danger",iconPack:"feather",icon:"icon-alert-octagon",position:"top-center"}):(this.$vs.loading({type:"material"}),e.$store.dispatch("storePosition",{position:e.position}).then((function(t){t&&(e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានរក្សាទុក",color:"primary",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.position="",e.$vs.loading.close())})))},storeDegreeNote:function(){var e=this;""===e.degree_note?e.$vs.notify({title:"ប្រតិបត្តិការណ៍បរាជ័យ",text:"ទិន្នន័យមិនមាន!",color:"danger",iconPack:"feather",icon:"icon-alert-octagon",position:"top-center"}):(this.$vs.loading({type:"material"}),e.$store.dispatch("storeDegreeNote",{degree_note:e.degree_note}).then((function(t){t&&(e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានរក្សាទុក",color:"primary",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.degree_note="",e.$vs.loading.close())})))},storeEmployee:function(){var e=this;this.$validator.validateAll().then((function(t){t?(e.employees.profile=e.images[0].path,e.$vs.loading({type:"material"}),e.$store.dispatch("storeEmployee",e.employees).then((function(t){t&&(e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានរក្សាទុក",color:"primary",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.clearEmployeeForm(),e.$vs.loading.close())}))):e.$vs.notify({title:"ប្រតិបត្តិការណ៍បរាជ័យ",text:"ទិន្នន័យមិនមានគ្រប់គ្រាន់!",color:"danger",iconPack:"feather",icon:"icon-alert-octagon",position:"top-center"})}))},clearEmployeeForm:function(){this.is_update=!1;var e=this.employees;e.profile="",e.kh_name="",e.en_name="",e.gender=null,e.dob=null,e.position="",e.degree_note="",e.start_work=null,e.contact="",e.pob="",e.addr=""},updateEmployee:function(){var e=this;e.images.length&&(e.employees.profile=e.images[0].path),this.$validator.validateAll().then((function(t){t?(e.$vs.loading({type:"material"}),e.$store.dispatch("updateEmployee",e.employees).then((function(t){t&&(e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានកែប្រែ",color:"primary",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.$modal.hide("add-employee"),e.clearEmployeeForm(),e.$vs.loading.close())}))):e.$vs.notify({title:"ប្រតិបត្តិការណ៍បរាជ័យ",text:"ទិន្នន័យមិនមានគ្រប់គ្រាន់!",color:"danger",iconPack:"feather",icon:"icon-alert-octagon",position:"top-center"})}))}}}),c=s("KHd+"),v=Object(c.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-row",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[s("div",{staticClass:"flex btn-group"},[s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return e.showCreatePopup("inner")}}},[e._v("\n                    បន្ថែម\n                ")])],1)])],1),e._v(" "),s("modal",{attrs:{width:"70%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"add-employee"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("add-employee")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("form",[s("vs-row",[s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"start","vs-align":"center","vs-w":"3"}},[s("vue-dropzone",{ref:"myVueDropzone",staticClass:"max-content p-1",attrs:{duplicateCheck:"",id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-success":e.successUpload}})],1),e._v(" "),s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"start","vs-align":"center","vs-w":"9"}},[s("div",{staticClass:"w-1/3 mr-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"ឈ្មោះខ្មែរ","label-placeholder":"ឈ្មោះខ្មែរ"},model:{value:e.employees.kh_name,callback:function(t){e.$set(e.employees,"kh_name",t)},expression:"employees.kh_name"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ឈ្មោះខ្មែរ"),expression:"errors.has('ឈ្មោះខ្មែរ')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ឈ្មោះខ្មែរ")))])],1),e._v(" "),s("div",{staticClass:"w-1/3 mr-1"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះឡាតាំង",name:"ឈ្មោះឡាតាំង"},model:{value:e.employees.en_name,callback:function(t){e.$set(e.employees,"en_name",t)},expression:"employees.en_name"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ឈ្មោះឡាតាំង"),expression:"errors.has('ឈ្មោះឡាតាំង')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ឈ្មោះឡាតាំង")))])],1),e._v(" "),s("div",{staticClass:"w-1/3 ml-1 mt-5"},[s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសភេទ",name:"ភេទ"},model:{value:e.employees.gender,callback:function(t){e.$set(e.employees,"gender",t)},expression:"employees.gender"}},[s("vs-select-item",{attrs:{value:"Female",text:"Female"}}),e._v(" "),s("vs-select-item",{attrs:{value:"Male",text:"Male"}})],1),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ភេទ"),expression:"errors.has('ភេទ')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ភេទ")))])],1)])],1),e._v(" "),s("div",{staticClass:"flex mb-5"},[s("div",{staticClass:"w-1/4 mt-5 mr-2"},[s("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"ថ្ងៃខែឆ្នាំកំណើត",placeholder:"ថ្ងៃខែឆ្នាំកំណើត"},model:{value:e.employees.dob,callback:function(t){e.$set(e.employees,"dob",t)},expression:"employees.dob"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ថ្ងៃខែឆ្នាំកំណើត"),expression:"errors.has('ថ្ងៃខែឆ្នាំកំណើត')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ថ្ងៃខែឆ្នាំកំណើត")))])],1),e._v(" "),s("div",{staticClass:"w-1/3 ml-1 mt-5"},[s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{autocomplete:"",placeholder:"តួនាទី",name:"តួនាទី"},model:{value:e.employees.position,callback:function(t){e.$set(e.employees,"position",t)},expression:"employees.position"}},e._l(e.getPositions,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.position,text:e.position}})})),1),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("តួនាទី"),expression:"errors.has('តួនាទី')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("តួនាទី")))])],1),e._v(" "),s("vs-button",{staticClass:"mt-5 mr-1",attrs:{color:"primary",type:"gradient","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$modal.show("add-position")}}}),e._v(" "),s("div",{staticClass:"w-1/3 ml-1 mt-5"},["TEACHER"===e.employees.position.toUpperCase()?s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{autocomplete:"",placeholder:"កម្រិតសម្គាល់",type:"primary",name:"កម្រិតសម្គាល់"},model:{value:e.employees.degree_note,callback:function(t){e.$set(e.employees,"degree_note",t)},expression:"employees.degree_note"}},e._l(e.getDegreeNotes,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.degree_note,text:e.degree_note}})})),1):s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{autocomplete:"",placeholder:"កម្រិតសម្គាល់",type:"primary",name:"កម្រិតសម្គាល់"},model:{value:e.employees.degree_note,callback:function(t){e.$set(e.employees,"degree_note",t)},expression:"employees.degree_note"}},[s("vs-select-item",{attrs:{value:"none",text:"None"}})],1),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("កម្រិតសម្គាល់"),expression:"errors.has('កម្រិតសម្គាល់')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("កម្រិតសម្គាល់")))])],1),e._v(" "),s("vs-button",{staticClass:"mt-5 mr-1",attrs:{color:"primary",type:"gradient","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$modal.show("add-degree-note")}}}),e._v(" "),s("div",{staticClass:"w-1/4 ml-2 mt-5"},[s("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"ថ្ងៃចូលធ្វើការ",placeholder:"ថ្ងៃចូលធ្វើការ"},model:{value:e.employees.start_work,callback:function(t){e.$set(e.employees,"start_work",t)},expression:"employees.start_work"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ថ្ងៃចូលធ្វើការ"),expression:"errors.has('ថ្ងៃចូលធ្វើការ')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ថ្ងៃចូលធ្វើការ")))])],1)],1),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"w-full mr-2 mb-5"},[s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"ទំនាក់ទំនង",label:"ទំនាក់ទំនង"},model:{value:e.employees.contact,callback:function(t){e.$set(e.employees,"contact",t)},expression:"employees.contact"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ទំនាក់ទំនង"),expression:"errors.has('ទំនាក់ទំនង')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ទំនាក់ទំនង")))])],1),e._v(" "),s("div",{staticClass:"flex mb-2"},[s("div",{staticClass:"w-1/2 mr-2"},[s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"ទីកន្លែងកំណើត",label:"ទីកន្លែងកំណើត"},model:{value:e.employees.pob,callback:function(t){e.$set(e.employees,"pob",t)},expression:"employees.pob"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("ទីកន្លែងកំណើត"),expression:"errors.has('ទីកន្លែងកំណើត')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("ទីកន្លែងកំណើត")))])],1),e._v(" "),s("div",{staticClass:"w-1/2 ml-2"},[s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"អាស័យដ្ឋានបច្ចុប្បន្ន",label:"អាស័យដ្ឋានបច្ចុប្បន្ន"},model:{value:e.employees.addr,callback:function(t){e.$set(e.employees,"addr",t)},expression:"employees.addr"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("អាស័យដ្ឋានបច្ចុប្បន្ន"),expression:"errors.has('អាស័យដ្ឋានបច្ចុប្បន្ន')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("អាស័យដ្ឋានបច្ចុប្បន្ន")))])],1)])],1),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"flex justify-end btn-group"},[!1===e.is_update?s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return t.preventDefault(),e.storeEmployee(t)}}},[e._v("\n                    រក្សាទុក\n                ")]):e._e(),e._v(" "),!0===e.is_update?s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[e._v("\n                    កែប្រែ\n                ")]):e._e()],1)],1)],1),e._v(" "),s("modal",{attrs:{width:"40%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"add-position"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("add-position")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("vx-input-group",{staticClass:"mb-base"},[s("vs-input",{staticClass:"inputx",attrs:{placeholder:"មុខដំណែង"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.storePosition(t)}},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}),e._v(" "),s("template",{slot:"append"},[s("div",{staticClass:"append-text btn-addon"},[""!==e.position?s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:e.storePosition}},[e._v("បន្ថែម")]):e._e()],1)])],2)],1)],1),e._v(" "),s("modal",{attrs:{width:"40%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"add-degree-note"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("add-degree-note")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("vx-input-group",{staticClass:"mb-base"},[s("vs-input",{staticClass:"inputx",attrs:{placeholder:"កម្រិតសម្គាល់"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.storeDegreeNote(t)}},model:{value:e.degree_note,callback:function(t){e.degree_note=t},expression:"degree_note"}}),e._v(" "),s("template",{slot:"append"},[s("div",{staticClass:"append-text btn-addon"},[""!==e.degree_note?s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:e.storeDegreeNote}},[e._v("បន្ថែម")]):e._e()],1)])],2)],1)],1)],1)}),[],!1,null,"4f84bcd1",null).exports;function d(e,t,s,a,o,i,r){try{var n=e[i](r),l=n.value}catch(e){return void s(e)}n.done?t(l):Promise.resolve(l).then(a,o)}function p(e){return function(){var t=this,s=arguments;return new Promise((function(a,o){var i=e.apply(t,s);function r(e){d(i,a,o,r,n,"next",e)}function n(e){d(i,a,o,r,n,"throw",e)}r(void 0)}))}}var m,u={components:{Datepicker:i.a,Create:v},name:"Employee",data:function(){return{date:null,users:[],selected:[],show_employees:{id:"",profile:"",kh_name:"",en_name:"",gender:null,dob:null,position:null,degree_note:null,start_work:null,contact:"",pob:"",addr:""},is_update:!1,showEmployeePopup:!1}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768},getEmployees:function(){return this.$store.getters.get_employees},placeholder:function(){return this.$store.getters.getAppUrl+"images/placeholder/placeholder.png"}},methods:{destroyEmployee:(m=p(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,this.$vs.loading({type:"material"}),s=t.selected.map(function(){var e=p(o.a.mark((function e(s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("destroyEmployee",s.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(s).then((function(){t.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យត្រូវបានលុប!",color:"danger",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.selected=[],t.$vs.loading.close()}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),openAlert:function(e){this.colorAlert=e,this.$vs.dialog({color:this.colorAlert,title:"លុបទិន្នន័យ",text:"តើអ្នកប្រាកដជាចង់លុបឬ?",accept:this.acceptAlert})},acceptAlert:function(){this.destroyEmployee()},showEmployee:function(){this.$modal.show("show-employee");var e=this.show_employees,t=this.selected[0];e.id=this.preFixZero(t.id,5),e.profile=t.profile,e.kh_name=t.kh_name,e.en_name=t.en_name,e.gender=t.gender,e.dob=t.dob,e.position=t.position,e.degree_note=t.degree_note,e.start_work=t.start_work,e.contact=t.contact,e.pob=t.pob,e.addr=t.addr},preFixZero:function(e,t){for(var s=""+e;s.length<t;)s="0"+s;return s},showCreateEmployee:function(){this.$refs.createEmployee.showCreatePopup(this.selected),this.selected=[]}}},_=(s("WdiR"),Object(c.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{"no-shadow":""}},[s("Create",{ref:"createEmployee"}),e._v(" "),s("vs-divider"),e._v(" "),s("vs-table",{attrs:{multiple:"",pagination:"","max-items":"5",search:"",data:e.getEmployees},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,o){return s("vs-tr",{key:o,attrs:{data:t}},[s("vs-td",{attrs:{data:a[o].kh_name}},[e._v("\n                    "+e._s(a[o].kh_name)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].en_name}},[e._v("\n                    "+e._s(a[o].en_name)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].gender}},[e._v("\n                    "+e._s(a[o].gender)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].position}},[e._v("\n                    "+e._s(a[o].position)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].degree_note}},[e._v("\n                    "+e._s(a[o].degree_note)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].start_work}},[e._v("\n                    "+e._s(a[o].start_work)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[o].contact}},[e._v("\n                    "+e._s(a[o].contact)+"\n                ")])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"kh_name"}},[e._v("ឈ្មោះ")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"en_name"}},[e._v("ឡាតាំង")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"gender"}},[e._v("ភេទ")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"position"}},[e._v("មុខតំណែង")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"degree_note"}},[e._v("កម្រិតសម្គាល់")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"start_work"}},[e._v("ថ្ងៃចូលធ្វើការ")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"contact"}},[e._v("ទំនាក់ទំនង")])],1)],2),e._v(" "),s("div",{staticClass:"flex btn-group"},[e.selected.length?s("vs-button",{staticClass:"mb-2",attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash-2"},on:{click:function(t){return e.openAlert("danger")}}},[e._v("\n            លុប\n        ")]):e._e(),e._v(" "),1===e.selected.length?s("vs-button",{staticClass:"mb-2",attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:e.showEmployee}},[e._v("\n            បង្ហាញ\n        ")]):e._e(),e._v(" "),1===e.selected.length?s("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"},on:{click:e.showCreateEmployee}},[e._v("\n            កែប្រែ\n        ")]):e._e()],1),e._v(" "),s("div",{staticClass:"demo-alignment"},[s("vs-popup",{attrs:{fullscreen:"",title:"ពត៍មានលម្អិត",active:e.showEmployeePopup},on:{"update:active":function(t){e.showEmployeePopup=t}}},[s("div",{staticClass:"vx-row mt-10"},[s("div",{staticClass:"vx-col md:w-full"},[s("h4",[e._v("អត្តលេខ: PKS-"+e._s(e.show_employees.id))])])]),e._v(" "),s("div",{staticClass:"vx-row mt-4"},[s("div",{staticClass:"vx-col lg:w-1/4"},[s("img",{staticClass:"p-10",staticStyle:{height:"250px"},attrs:{src:e.show_employees.profile}})]),e._v(" "),s("div",{staticClass:"vx-col lg:w-3/4 mt-10"},[s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ឈ្មោះខ្មែរ:"),s("b",[e._v(" "+e._s(e.show_employees.kh_name)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("ឈ្មោះឡាតាំង:"),s("b",[e._v(" "+e._s(e.show_employees.en_name)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("ភេទ:"),s("b",[e._v("Male")])])])]),e._v(" "),s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ថ្ងៃខែឆ្នាំកំណើត:"),s("b",[e._v(" "+e._s(e.show_employees.dob)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("តួនាទី:"),s("b",[e._v(" "+e._s(e.show_employees.position)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("គម្រិតសម្គាល់:"),s("b",[e._v(" "+e._s(e.show_employees.degree_note)+" ")])])])]),e._v(" "),s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ថ្ងៃខែឆ្នាំចូលធ្វើការ:"),s("b",[e._v(e._s(e.show_employees.start_work))])])])])])]),e._v(" "),s("div",{staticClass:"vx-row mt-10"},[s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("ទំនាក់ទំនង់:")])]),e._v(" "),s("br"),e._v(" "),e._l(e.show_employees.contact.split("\n"),(function(t,a){return s("b",{key:a},[e._v(" "+e._s(t)),s("br")])}))],2),e._v(" "),s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("អាស័យដ្ឋានបច្ចុប្បន្ន:")])]),s("br"),e._v(" "),s("b",[e._v(e._s(e.show_employees.addr))])]),e._v(" "),s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("អាស័យដ្ឋានកំណើត:")])]),s("br"),e._v(" "),s("b",[e._v(e._s(e.show_employees.pob))])])])])],1),e._v(" "),s("modal",{attrs:{width:"90%",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"show-employee"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("show-employee")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-full"},[s("h4",[e._v("អត្តលេខ: PKS-"+e._s(e.show_employees.id))])])]),e._v(" "),s("div",{staticClass:"vx-row mt-4"},[s("div",{staticClass:"vx-col lg:w-1/4"},[s("img",{staticClass:"p-10",staticStyle:{height:"250px"},attrs:{src:e.show_employees.profile}})]),e._v(" "),s("div",{staticClass:"vx-col lg:w-3/4 mt-10"},[s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ឈ្មោះខ្មែរ:"),s("b",[e._v(" "+e._s(e.show_employees.kh_name)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("ឈ្មោះឡាតាំង:"),s("b",[e._v(" "+e._s(e.show_employees.en_name)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("ភេទ:"),s("b",[e._v("Male")])])])]),e._v(" "),s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ថ្ងៃខែឆ្នាំកំណើត:"),s("b",[e._v(" "+e._s(e.show_employees.dob)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("តួនាទី:"),s("b",[e._v(" "+e._s(e.show_employees.position)+" ")])])]),e._v(" "),s("div",{staticClass:"w-1/3"},[s("i",[e._v("គម្រិតសម្គាល់:"),s("b",[e._v(" "+e._s(e.show_employees.degree_note)+" ")])])])]),e._v(" "),s("div",{staticClass:"flex mb-10"},[s("div",{staticClass:"w-1/3"},[s("i",[e._v("ថ្ងៃខែឆ្នាំចូលធ្វើការ:"),s("b",[e._v(e._s(e.show_employees.start_work))])])])])])]),e._v(" "),s("div",{staticClass:"vx-row mt-10"},[s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("ទំនាក់ទំនង់:")])]),e._v(" "),s("br"),e._v(" "),e._l(e.show_employees.contact.split("\n"),(function(t,a){return s("b",{key:a},[e._v(" "+e._s(t)),s("br")])}))],2),e._v(" "),s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("អាស័យដ្ឋានបច្ចុប្បន្ន:")])]),s("br"),e._v(" "),s("b",[e._v(e._s(e.show_employees.addr))])]),e._v(" "),s("div",{staticClass:"vx-col md:w-1/3"},[s("h3",[s("i",[e._v("អាស័យដ្ឋានកំណើត:")])]),s("br"),e._v(" "),s("b",[e._v(e._s(e.show_employees.pob))])])])])],1)],1)}),[],!1,null,null,null));t.default=_.exports},xkAy:function(e,t,s){var a=s("/AM8");"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,o);a.locals&&(e.exports=a.locals)}}]);