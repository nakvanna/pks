import axios from  'axios'
const state = {
    payments:[],
    invoice_payment: [],
    invoice_detail_payment: [],
};
const getters = {
    get_payments:function (state) {
        return state.payments
    },
    get_invoice_payments:function (state) {
        return state.invoice_payment
    },
    get_invoice_detail_payments:function (state) {
        return state.invoice_detail_payment
    },
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
    async fetchInvoicePayment({commit}, data){
            try {
                const res = await axios.post(route('payment.get-invoice', {data}));
                commit('SET_INVOICE_PAYMENT', res.data);
            } catch (e) {
                return false
            }
    },
    async fetchInvoiceDetailPayment({commit}, data){
            try {
                const res = await axios.post(route('payment.get-invoice-detail', {data}));
                commit('SET_INVOICE_DETAIL_PAYMENT', res.data);
            } catch (e) {
                return false
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
    },
    SET_INVOICE_PAYMENT:function (state,data) {
        state.invoice_payment = data
    },
    SET_INVOICE_DETAIL_PAYMENT:function (state,data) {
        state.invoice_detail_payment = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}