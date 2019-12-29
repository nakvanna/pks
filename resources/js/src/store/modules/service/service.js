import axios from  'axios'
const state = {
    services:[],
    total:null,
};
const getters = {
    get_services:function (state) {
        return state.services
    }
};
const actions = {
    async fetchServices({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.services.length >= state.total) {
            try {
                axios.post(route('service.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_SERVICE', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_SERVICE', _data);
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
    async storeService({commit},services){
        try {
            const res = await axios.post(route('service.store'),services);
            commit('ADD_SERVICE',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateService({commit}, services){
        try {
            const res = await axios.put(route('service.update', services.id), services);
            commit('UPDATE_SERVICE', res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyService({commit}, id){
        try {
            const res = await axios.delete(route('service.destroy', id));
            commit('REMOVE_SERVICE', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_SERVICE:function (state,data) {
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.services.push(item);
        });
    },
    ADD_SERVICE:function (state,data) {
        state.services.unshift(data)
    },
    UPDATE_SERVICE: function(state, data){
        const index = state.services.findIndex(service => service.id === data.id);
        state.services.splice(index,1,data)
    },
    REMOVE_SERVICE: function (state, id) {
        state.services = state.services.filter(service => service.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}