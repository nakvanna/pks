import axios from  'axios'
const state = {
    years:[]
};
const getters = {
    get_years:function (state) {
        return state.years
    }
};
const actions = {
    async fetchYears({commit}){
        try {
            const res = await axios.get(route('year.index'));
            commit('SET_YEAR',res.data);
        }catch (e) {
            return false
        }
    },
    async storeYear({commit},name){
        try {
            const res = await axios.post(route('year.store'),name);
            commit('ADD_YEAR',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyYear({commit}, id){
        try {
            const res = await axios.delete(route('year.destroy', id));
            commit('REMOVE_YEAR', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_YEAR:function (state,data) {
        state.years = data
    },
    ADD_YEAR:function (state,data) {
        state.years.unshift(data);
    },
    REMOVE_YEAR: function (state, id) {
        state.years = state.years.filter(year => year.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}