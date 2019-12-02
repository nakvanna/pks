import axios from  'axios'
const state = {
    service_infos:[]
};
const getters = {
    get_service_infos:function (state) {
        return state.service_infos
    }
};
const actions = {
    async fetchServiceInfos({commit}){
        try {
            const res = await axios.get(route('service-info.index'));
            commit('SET_SERVICE_INFO',res.data);
        }catch (e) {
            return false
        }
    },
    async storeServiceInfo({commit},service_infos){
        try {
            const res = await axios.post(route('service-info.store'),service_infos);
            commit('ADD_SERVICE_INFO',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateServiceInfo({commit}, service_infos){
        try {
            const res = await axios.put(route('service-info.update', service_infos.id), service_infos);
            commit('UPDATE_SERVICE_INFO', service_infos);
            return res.data
        }catch (e) {
            return false
        }
    },
    async toggleService({commit}, id){
        try {
            const res = await axios.delete(route('service-info.destroy',id));
            commit('UPDATE_SERVICE_INFO',res.data);
            console.log(res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async destroyServiceInfo({commit}, id){
        try {
            const res = await axios.delete(route('service-info.destroy', id));
            commit('REMOVE_SERVICE_INFO', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_SERVICE_INFO:function (state,data) {
        state.service_infos = data
    },
    ADD_SERVICE_INFO:function (state,data) {
        state.service_infos.unshift(data);
    },
    UPDATE_SERVICE_INFO: function(state, data){
        const index = state.service_infos.findIndex(service_info => service_info.id === data.id);
        state.service_infos.splice(index, 1, data);
    },
    REMOVE_SERVICE_INFO: function (state, id) {
        state.service_infos = state.service_infos.filter(service => service.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}