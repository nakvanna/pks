import axios from  'axios'
const state = {
    collections:[]
};
const getters = {
    get_collections:function (state) {
        return state.collections
    }
};
const actions = {
    async fetchCollections({commit}){
        try {
            const res = await axios.get(route('collection.index'));
            commit('SET_COLLECTION',res.data);
        }catch (e) {
            return false
        }
    },
    async storeCollection({commit},collections){
        try {
            const res = await axios.post(route('collection.store'),collections);
            commit('ADD_COLLECTION',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateCollection({commit},collections){
        try {
            const res = await axios.put(route('collection.update', collections.id), collections);
            commit('UPDATE_COLLECTION', collections);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyCollection({commit}, id){
        try {
            const res = await axios.delete(route('collection.destroy', id));
            commit('REMOVE_COLLECTION', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_COLLECTION:function (state,data) {
        state.collections = data
    },
    ADD_COLLECTION:function (state,data) {
        state.collections.unshift(data);
    },
    UPDATE_COLLECTION: function(state, data){
        const index = state.collections.findIndex(collection => collection.id === data.id);
        if(index !== -1){
            state.collections.splice(index, 1, {
                id            : data.id,
                group_section : data.group_section,
                section       : data.section,
                level         : data.level,
                shift         : data.shift,
                class_name    : data.class_name,
                cost_one      : data.cost_one,
                cost_three    : data.cost_three,
                cost_six      : data.cost_six,
                cost_twelve   : data.cost_twelve,
            });
        }
    },
    REMOVE_COLLECTION: function (state, id) {
        state.collections = state.collections.filter(collection => collection.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}