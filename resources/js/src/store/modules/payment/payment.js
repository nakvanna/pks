import axios from  'axios'
const state = {
    payments:[],
};
const getters = {
    get_payments:function (state) {
        return state.payments
    }
};
const actions = {
    async fetchPayments({commit}, payment){
        if (!state.payments.length) {
            try {
                const res = await axios.post(route('payment.get-info', {payment}));
                commit('SET_PAYMENT', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async updateIncrementDue({commit}, data){
        try {
            const res = await axios.post(route('student.increment-due', {data}));
        } catch (e) {
            return false;
        }
    },
    async updateDecrementDue({commit}, data){
        try {
            const res = await axios.post(route('student.decrement-due', {data}));
        } catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_PAYMENT:function (state,data) {
        state.payments = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}