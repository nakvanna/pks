import axios from  'axios'
const state = {
    study_infos:[]
};
const getters = {
    get_study_infos:function (state) {
        return state.study_infos
    }
};
const actions = {
    async fetchStudyInfos({commit}){
        try {
            const res = await axios.get(route('study-info.index'));
            commit('SET_STUDY_INFO',res.data);
        }catch (e) {
            return false
        }
    },
    async storeStudyInfo({commit},study_infos){
        try {
            const res = await axios.post(route('study-info.store'),study_infos);
            commit('ADD_STUDY_INFO',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateStudyInfo({commit}, study_infos){
        try {
            const res = await axios.put(route('study-info.update', study_infos.id), study_infos);
            commit('UPDATE_STUDY_INFO', study_infos);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyStudyInfo({commit}, id){
        try {
            const res = await axios.delete(route('study-info.destroy', id));
            commit('REMOVE_STUDY_INFO', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_STUDY_INFO:function (state,data) {
        state.study_infos = data
    },
    ADD_STUDY_INFO:function (state,data) {
        state.study_infos.unshift(data);
    },
    UPDATE_STUDY_INFO: function(state, data){
        const index = state.study_infos.findIndex(study_info => study_info.id === data.id);
        if(index !== -1){
            state.study_infos.splice(index, 1, {
                id          : data.id,
            });
        }
    },
    REMOVE_STUDY_INFO: function (state, id) {
        state.study_infos = state.study_infos.filter(service => service.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}