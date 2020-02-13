
const state = {
    group_sections:[]
};
const getters = {
    get_group_sections:function (state) {
        return state.group_sections
    }
};
const actions = {
    async fetchGroupSections({commit}){
        if (!state.group_sections.length) {
            try {
                const res = await axios.get(route('group-section.index'));
                commit('SET_GROUP_SECTION', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeGroupSection({commit},name){
        try {
            const res = await axios.post(route('group-section.store'),name);
            commit('ADD_GROUP_SECTION',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyGroupSection({commit}, id){
        try {
            const res = await axios.delete(route('group-section.destroy', id));
            commit('REMOVE_GROUP_SECTION', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_GROUP_SECTION:function (state,data) {
        state.group_sections = data
    },
    ADD_GROUP_SECTION:function (state,data) {
        state.group_sections.unshift(data);
    },
    REMOVE_GROUP_SECTION: function (state, id) {
        state.group_sections = state.group_sections.filter(group_section => group_section.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}