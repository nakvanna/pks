import axios from  'axios'
const state = {
    study_classes:[]
};
const getters = {
    get_study_classes:function (state) {
        return state.study_classes
    }
};
const actions = {
    async fetchStudyClasses({commit}){
        if (!state.study_classes.length) {
            try {
                const res = await axios.get(route('study-class.index'));
                commit('SET_STUDY_CLASS', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeStudyClass({commit},name){
        try {
            const res = await axios.post(route('study-class.store'),name);
            commit('ADD_STUDY_CLASS',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyStudyClass({commit}, id){
        try {
            const res = await axios.delete(route('study-class.destroy', id));
            commit('REMOVE_STUDY_CLASS', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_STUDY_CLASS:function (state,data) {
        state.study_classes = data
    },
    ADD_STUDY_CLASS:function (state,data) {
        state.study_classes.unshift(data);
    },
    REMOVE_STUDY_CLASS: function (state, id) {
        state.study_classes = state.study_classes.filter(study_class => study_class.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}