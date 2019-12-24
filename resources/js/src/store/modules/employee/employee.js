import axios from  'axios'
const state = {
    employees:[]
};
const getters = {
    get_employees:function (state) {
        return state.employees
    }
};
const actions = {
    async fetchEmployees({commit}){
        if (!state.employees.length) {
            try {
                const res = await axios.get(route('employee.index'));
                commit('SET_EMPLOYEE', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeEmployee({commit},employees){
        try {
            const res = await axios.post(route('employee.store'),employees);
            commit('ADD_EMPLOYEE',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateEmployee({commit}, employees){
        try {
            const res = await axios.put(route('employee.update', employees.id), employees);
            commit('UPDATE_EMPLOYEE', employees);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyEmployee({commit}, id){
        try {
            const res = await axios.delete(route('employee.destroy', id));
            commit('REMOVE_EMPLOYEE', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_EMPLOYEE:function (state,data) {
        state.employees = data
    },
    ADD_EMPLOYEE:function (state,data) {
        state.employees.unshift(data);
    },
    UPDATE_EMPLOYEE: function(state, data){
        const index = state.employees.findIndex(employee => employee.id === data.id);
        if(index !== -1){
            state.employees.splice(index, 1, {
                id          : data.id,
                profile     : data.profile,
                kh_name     : data.kh_name,
                en_name     : data.en_name,
                gender      : data.gender,
                dob         : data.dob,
                position    : data.position,
                degree_note : data.degree_note,
                start_work  : data.start_work,
                contact     : data.contact,
                pob         : data.pob,
                addr        : data.addr,
            });
        }
    },
    REMOVE_EMPLOYEE: function (state, id) {
        state.employees = state.employees.filter(employee => employee.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}