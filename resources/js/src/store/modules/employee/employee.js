
const state = {
    employees:[],
    total:null
};
const getters = {
    get_employees:function (state) {
        return state.employees
    }
};
const actions = {
    async fetchEmployees({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.employees.length >= state.total) {
            try {
                axios.post(route('employee.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_EMPLOYEE', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_EMPLOYEE', _data);
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
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.employees.push(item);
        });
    },
    ADD_EMPLOYEE:function (state,data) {
        state.employees.unshift(data);
    },
    UPDATE_EMPLOYEE: function(state, data){
        const index = state.employees.findIndex(employee => employee.id === data.id);
        state.employees.splice(index,1,data)
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