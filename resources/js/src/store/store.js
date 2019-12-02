/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);
//Module
import users from './modules/user';
import group_section from './modules/setting/group_section';
import section from './modules/setting/section';
import study_class from './modules/setting/study_class';
import level from './modules/setting/level';
import year from './modules/setting/year';
import shift from './modules/setting/shift';
import collection from './modules/setting/collection';
import service from './modules/service/service';
import position from './modules/employee/position';
import degree_note from './modules/employee/degree_note';
import employee from './modules/employee/employee';
import student from './modules/student/student';
import study_info from './modules/study_info/study_info';
import service_info from './modules/service_info/service_info';
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        users,
        group_section,
        section,
        study_class,
        level,
        year,
        shift,
        collection,
        service,
        position,
        degree_note,
        employee,
        student,
        study_info,
        service_info,
    }
})
