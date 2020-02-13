
const state = {
    sections:[]
};
const getters = {
    get_sections:function (state) {
        return state.sections
    }
};
const actions = {
    async fetchSections({commit}){
        if (!state.sections.length) {
            try {
                const res = await axios.get(route('section.index'));
                commit('SET_SECTION', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeSection({commit},name){
        try {
            const res = await axios.post(route('section.store'),name);
            commit('ADD_SECTION',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroySection({commit}, id){
        try {
            const res = await axios.delete(route('section.destroy', id));
            commit('REMOVE_SECTION', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_SECTION:function (state,data) {
        state.sections = data
    },
    ADD_SECTION:function (state,data) {
        state.sections.unshift(data);
    },
    REMOVE_SECTION: function (state, id) {
        state.sections = state.sections.filter(section => section.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}