import axios from  'axios'
const state = {
    services:[]
};
const getters = {
    get_services:function (state) {
        return state.services
    }
};
const actions = {
    async fetchServices({commit}){
        try {
            const res = await axios.get(route('service.index'));
            commit('SET_SERVICE',res.data);
        }catch (e) {
            return false
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
            commit('UPDATE_SERVICE', services);
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
        state.services = [];
        for (var i = 0; i < data.length; i ++){
            state.services.push({
                id            : data[i].id,
                year          : data[i].year,
                type          : data[i].type,
                service       : data[i].service,
                cost_one      : data[i].cost_one,
                cost_three    : data[i].cost_three,
                cost_six      : data[i].cost_six,
                cost_twelve   : data[i].cost_twelve,
                employee_id   : data[i].employee_id,
                employee_name : data[i].employees.kh_name +' '+ data[i].employees.en_name
            })
        }
    },
    ADD_SERVICE:function (state,data) {
        state.services.unshift({
            id: data.id,
            year : data.year,
            type : data.type,
            service : data.service,
            cost_one : data.cost_one,
            cost_three : data.cost_three,
            cost_six : data.cost_six,
            cost_twelve : data.cost_twelve,
            employee_id : data.employee_id,
            employee_name: data.employees.kh_name + ' ' + data.employees.en_name,
        });
    },
    UPDATE_SERVICE: function(state, data){
        const index = state.services.findIndex(service => service.id === data.id);
        if(index !== -1){
            state.services.splice(index, 1, {
                id          : data.id,
                year        : data.year,
                type        : data.type,
                service     : data.service,
                cost_one    : data.cost_one,
                cost_three  : data.cost_three,
                cost_six    : data.cost_six,
                cost_twelve : data.cost_twelve,
                employee_id : data.employee_id,
            });
        }
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