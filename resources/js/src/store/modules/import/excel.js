import axios from  'axios'
const state = {
    excels:[]
};
const getters = {
    get_excels:function (state) {
        return state.excels
    }
};
const actions = {
    async importStudent({commit},data){
        try {
            await axios.post(route('import.student'),data);
            return true
        }catch (e) {
            return false
        }
    },
    async importCollection({commit},data){
        try {
            await axios.post(route('import.collection'),data);
            return true
        }catch (e) {
            return false
        }
    },
    async importService({commit},data){
        try {
            await axios.post(route('import.service'),data);
            return true
        }catch (e) {
            return false
        }
    },
    async importEmployee({commit},data){
        try {
            await axios.post(route('import.employee'),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_EXCEL:function (state,data) {
        state.excels = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}