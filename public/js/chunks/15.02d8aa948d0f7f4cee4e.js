(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8yFd":function(t,e,a){"use strict";var s=a("o0o1"),n=a.n(s),r=a("ksP6"),i=a.n(r),o=(a("Hj/Q"),a("w48C")),c=a.n(o);a("K+Wz");function d(t,e,a,s,n,r,i){try{var o=t[r](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(s,n)}function l(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var r=t.apply(e,a);function i(t){d(r,s,n,i,o,"next",t)}function o(t){d(r,s,n,i,o,"throw",t)}i(void 0)}))}}var u,v,f={name:"addStudyInfo",components:{flatPickr:c.a,vueDropzone:i.a},data:function(){return{checked:!1,data:{year:"",date_pay:null,last_date_pay:null,study_infos:[{collection_id:null}]},student_ids:[],study_infos:[],dropzoneOptions:{url:route("file.upload"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ដាក់រូបភាពសិស្ស",thumbnailWidth:150,thumbnailHeight:150}}},computed:{getYears:function(){return this.$store.getters.get_years},getCollection:function(){return this.$store.getters.get_collections}},created:(v=l(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchYears");case 2:return t.next=4,this.$store.dispatch("fetchCollections");case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),methods:{show:function(t,e){if(this.$modal.show("addStudyInfo"),!0===e)for(var a=0;a<t.length;a++)this.student_ids.push(t[a].id);else for(a=0;a<t.length;a++)this.student_ids.push(t[a].student_id)},plus:function(){this.data.study_infos.push({collection_id:null})},minus:function(t){this.data.study_infos.splice(t,1)},successUpload:function(t,e){this.data.photo=e.path},clearForm:function(){this.checked=!1,this.data={year:"",date_pay:null,last_date_pay:null,study_infos:[{collection_id:null}]}},storeStudyInfo:(u=l(n.a.mark((function t(){var e,a,s,r,i,o,c,d,u;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=this,a=this.data.year,s=this.data.date_pay,r=this.data.last_date_pay,i=this.data.study_infos,o=this.student_ids,c=0;c<o.length;c++)for(d=0;d<i.length;d++)e.study_infos.push({year:a,date_pay:s,last_date_pay:r,student_id:o[c],collection_id:i[d].collection_id});return this.$vs.loading({type:"material"}),u=e.study_infos.map(function(){var t=l(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("storeStudyInfo",a);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11,Promise.all(u).then((function(){e.$vs.notify({title:"ប្រតិបត្តិការណ៍ជោគជ័យ",text:"ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងឆ្នាំសិក្សា!",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.study_infos=[],e.clearForm(),e.$vs.loading.close()}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})}},_=a("KHd+"),p=Object(_.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{width:"700",height:"auto",scrollable:!0,pivotY:.2,adaptive:!0,clickToClose:!1,name:"addStudyInfo"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("addStudyInfo")}}},[t._v("close")])]),t._v(" "),a("h4",{staticClass:"ml-2"},[a("u",[t._v(" ការសិក្សា")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col lg:w-1/3 w-full"},[a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:"ឆ្នាំសិក្សា",type:"primary"},model:{value:t.data.year,callback:function(e){t.$set(t.data,"year",e)},expression:"data.year"}},t._l(t.getYears,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.name,text:t.name}})})),1)],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("vs-checkbox",{attrs:{color:"#720ea8"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់លុយដំបូង",name:"date-pay",disabled:!t.checked},model:{value:t.data.date_pay,callback:function(e){t.$set(t.data,"date_pay",e)},expression:"data.date_pay"}})],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 flex"},[a("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"ថ្ងៃត្រូវបង់ចុងក្រោយ",name:"date-pay"},model:{value:t.data.last_date_pay,callback:function(e){t.$set(t.data,"last_date_pay",e)},expression:"data.last_date_pay"}})],1)]),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"vx-row"},t._l(t.data.study_infos,(function(e,s){return a("div",{key:s,staticClass:"vx-col w-full"},[a("vx-input-group",{staticClass:"mb-base "},[a("div",{staticClass:"flex"},[a("vs-select",{staticClass:"w-5/6",attrs:{autocomplete:"",placeholder:"ជ្រើសរើសពត៍មានការសិក្សា"},model:{value:e.collection_id,callback:function(a){t.$set(e,"collection_id",a)},expression:"study_info.collection_id"}},t._l(t.getCollection,(function(e,s){return e.year===t.data.year?a("vs-select-item",{key:s,attrs:{value:e.id,text:e.year+" "+e.group_section+" -> "+e.section+" -> "+e.level+e.class_name+" -> "+e.shift}}):t._e()})),1),t._v(" "),a("div",{staticClass:"append-text flex w-1/6 btn-addon"},[a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-minus"},on:{click:function(e){return t.minus(s)}}}),t._v(" "),t.data.study_infos.length===s+1?a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus"},on:{click:t.plus}}):t._e()],1)],1)])],1)})),0),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:t.storeStudyInfo}},[t._v("រក្សាទុក")])],1)],1)],1)}),[],!1,null,"561b2aa4",null);e.a=p.exports},hrn2:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function r(t,e,a,s,n,r,i){try{var o=t[r](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(s,n)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function o(t){r(i,s,n,o,c,"next",t)}function c(t){r(i,s,n,o,c,"throw",t)}o(void 0)}))}}var o,c={name:"StudyYear",components:{AddStudyInfo:a("8yFd").a},data:function(){return{users:[],selected:[],study_info_extract:[]}},computed:{getStudyInfos:function(){return this.$store.getters.get_study_infos}},created:(o=i(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchStudyInfos");case 2:e=this.study_info_extract,this.getStudyInfos.map(function(){var t=i(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push({id:a.id,year:a.year,student_id:a.students.id,name:a.students.name,latin:a.students.latin,gender:a.students.gender,dob:a.students.dob,class_name:a.study_infos.level+a.study_infos.class_name,shift:a.study_infos.shift,date_pay:a.date_pay,last_term:a.last_term});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},d=a("KHd+"),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{"no-shadow":""}},[a("vs-row",{attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-start"}},[a("h5",[t._v("ចំនួនដែលបានជ្រើសរើស: "+t._s(t.selected.length))])]),t._v(" "),a("vs-col",{staticClass:"1/2",attrs:{"vs-type":"flex","vs-justify":"flex-end"}},[t.selected.length?a("div",{staticClass:"flex btn-group"},[a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(e){return t.$refs.addStudyInfo.show(t.selected,!1)}}},[t._v("\n                    ឡើងថ្នាក់\n                ")]),t._v(" "),a("vs-button",{attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"}},[t._v("\n                    ប្តូរថ្នាក់\n                ")]),t._v(" "),a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-refresh-ccw"}},[t._v("\n                    ឈប់រៀន\n                ")])],1):t._e()])],1),t._v(" "),a("vs-divider"),t._v(" "),a("vs-table",{attrs:{multiple:"",pagination:"","max-items":"5",search:"",data:t.study_info_extract},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,n){return a("vs-tr",{key:n,attrs:{data:e}},[a("vs-td",{attrs:{data:s[n].year}},[t._v("\n                    "+t._s(s[n].year)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].name}},[t._v("\n                    "+t._s(s[n].name)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].latin}},[t._v("\n                    "+t._s(s[n].latin)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].gender}},[t._v("\n                    "+t._s(s[n].gender)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].dob}},[t._v("\n                    "+t._s(s[n].dob)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].class_name}},[t._v("\n                    "+t._s(s[n].class_name)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[n].shift}},[t._v("\n                    "+t._s(s[n].shift)+"\n                ")]),t._v(" "),null!==s[n].date_pay?a("vs-td",{attrs:{data:s[n].date_pay}},[t._v("\n                    "+t._s(s[n].date_pay.substr(0,10))+"\n                ")]):a("vs-td",{attrs:{data:s[n].date_pay}},[t._v("\n                    មិនបានកំណត់\n                ")])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"year"}},[t._v("ឆ្នាំសិក្សា")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("ឈ្មោះសិស្ស")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"latin"}},[t._v("ឈ្មោះឡាតាំ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"gender"}},[t._v("ភេទ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"dob"}},[t._v("ថ្ងៃខែឆ្នាំកំណើត")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"class_name"}},[t._v("កំពុងរៀនថ្នាក់ទី")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"shift"}},[t._v("ពេលសិក្សា")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"date_pay"}},[t._v("ថ្ងៃត្រូវបង់លុយ")])],1)],2),t._v(" "),a("add-study-info",{ref:"addStudyInfo"})],1)}),[],!1,null,"7375ab14",null);e.default=l.exports}}]);