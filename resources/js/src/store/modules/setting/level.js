
const state = {
    levels:[]
};
const getters = {
    get_levels:function (state) {
        return state.levels
    }
};
const actions = {
    async fetchLevels({commit}){
        if (!state.levels.length) {
            try {
                const res = await axios.get(route('level.index'));
                commit('SET_LEVEL', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeLevel({commit},name){
        try {
            const res = await axios.post(route('level.store'),name);
            commit('ADD_LEVEL',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyLevel({commit}, id){
        try {
            const res = await axios.delete(route('level.destroy', id));
            commit('REMOVE_LEVEL', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_LEVEL:function (state,data) {
        state.levels = data
    },
    ADD_LEVEL:function (state,data) {
        state.levels.unshift(data);
    },
    REMOVE_LEVEL: function (state, id) {
        state.levels = state.levels.filter(level => level.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}