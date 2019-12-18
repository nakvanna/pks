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
    }
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