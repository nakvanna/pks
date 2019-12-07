import axios from  'axios'
const state = {
    years:[],
    cur_year: '',
};
const getters = {
    get_years:function (state) {
        return state.years
    },
    get_cur_year: function (state) {
        return state.cur_year;
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
    async fetchCurYear({commit}){
        try {
            const res = await axios.get(route('current.year'));
            commit('SET_CUR_YEAR',res.data);
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
    async updateYear({commit},years){
        try {
            const res = await axios.put(route('year.update', years.id), years);
            commit('UPDATE_YEAR', years);
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
    SET_CUR_YEAR:function (state,data) {
        state.cur_year = data[0].name
    },
    ADD_YEAR:function (state,data) {
        state.years.unshift(data);
    },
    REMOVE_YEAR: function (state, id) {
        state.years = state.years.filter(year => year.id !== id);
    },
    UPDATE_YEAR: function(state, data){
        const index = state.years.findIndex(year => year.id === data.id);
        if(index !== -1){
            state.years.splice(index, 1, {
                id      : data.id,
                name    : data.name,
                current : data.current,
            });
        }
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
}