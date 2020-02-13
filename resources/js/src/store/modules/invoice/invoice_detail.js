
const state = {
    invoice_details:[],
};
const getters = {
    get_invoice_details:function (state) {
        return state.invoice_details
    },
};
const actions = {
    async fetchInvoiceDetails({commit}){
        if (!state.invoice_details.length) {
            try {
                const res = await axios.get(route('invoice-detail.index'));
                commit('SET_INVOICE_DETAIL', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async showInvoiceDetail({commit}, id){
        try {
            const res = await axios.get(route('invoice-detail.show', id));
            commit('SET_INVOICE_DETAIL', res.data)
        } catch (e) {
            return false
        }
    },
    async storeInvoiceDetail({commit}, invoice_details){
        try {
            const res = await axios.post(route('invoice-detail.store'),invoice_details);
            commit('ADD_INVOICE_DETAIL',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateInvoiceDetail({commit},invoice_details){
        try {
            const res = await axios.put(route('invoice-detail.update', invoice_details.id), invoice_details);
            commit('UPDATE_INVOICE_DETAIL', invoice_details);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyInvoiceDetail({commit}, id){
        try {
            const res = await axios.delete(route('invoice-detail.destroy', id));
            commit('REMOVE_INVOICE_DETAIL', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_PAYMENT:function (state,data) {
        state.payments = data
    },
    SET_INVOICE_DETAIL:function (state,data) {
        state.invoice_details = data
    },
    ADD_INVOICE_DETAIL:function (state,data) {
        state.invoice_details.unshift(data);
    },
    UPDATE_INVOICE_DETAIL: function(state, data){
        const index = state.invoice_details.findIndex(invoice_detail => invoice_detail.id === data.id);
        if(index !== -1){
            state.invoice_details.splice(index, 1, data);
        }
    },
    REMOVE_INVOICE_DETAIL: function (state, id) {
        state.invoice_details = state.invoice_details.filter(invoice_detail => invoice_detail.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}