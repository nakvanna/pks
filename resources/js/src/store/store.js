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
import group_section from './modules/group_section';
import section from './modules/section';
import study_class from './modules/study_class';
import level from './modules/level';
import shift from './modules/shift';
import collection from './modules/collection';
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
        shift,
        collection,
    }
})
