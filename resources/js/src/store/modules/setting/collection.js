
const state = {
    collections:[],
    total:null,
    collections_extracts:[],
};
const getters = {
    get_collections:function (state) {
        return state.collections;
    }
};
const actions = {
    async fetchCollections({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.collections.length >= state.total) {
            try {
                axios.post(route('collection.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_COLLECTION', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_COLLECTION', _data);
                                await f(_data.next_page_url);
                            });
                        }
                    }
                    await f(data.next_page_url)
                });
            } catch (e) {
                return false
            }
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
            commit('UPDATE_COLLECTION', res.data);
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
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.collections.push(item);
        });
    },
    ADD_COLLECTION:function (state,data) {
        state.collections.unshift(data)
    },
    UPDATE_COLLECTION: function(state, data){
        const index = state.collections.findIndex(collection => collection.id === data.id);
        state.collections.splice(index,1,data)
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