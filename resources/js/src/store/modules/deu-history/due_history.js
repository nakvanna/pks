
const state = {
    due_history: [],
    all_due_history: [],
};
const getters = {
    get_due_histories:function (state) {
        return state.due_history;
    },

    get_all_due_histories: function (state) {
        return state.all_due_history;
    }
};
const actions = {
    async fetchDueHistories({commit}){
        try {
            const res = await axios.get(route('due-history.index'));
            commit('SET_DUE_HISTORY', res.data);
        } catch (e) {
            return false
        }
    },
    async fetchDueHistoryOnly({commit}, inv_id){
        try {
            const res = await axios.get(route('due-history.only', inv_id));
            commit('SET_DUE_HISTORY', res.data);
        } catch (e) {
            return false
        }
    },
    async storeDueHistory({commit}, due_histories){
        try {
            const res = await axios.post(route('due-history.store'), due_histories);
            commit('ADD_DUE_HISTORY', res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateDueHistory({commit},invoices){
        try {
            const res = await axios.put(route('due-history.update', invoices.id), invoices);
            commit('UPDATE_INVOICE', invoices);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyDueHistorie({commit}, id){
        try {
            const res = await axios.delete(route('due-history.destroy', id));
            commit('REMOVE_INVOICE', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
     SET_DUE_HISTORY: async function (state,data) {
        /*console.log(data);
        state.due_history = [];
        for (var i = 0; i < data.length; i ++){
            state.due_history.push({
                id              : data[i].id,
                invoice_id      : data[i].invoice_id,
                pay_due         : data[i].pay_due,
                date_reduce_due : data[i].date_reduce_due,
                desc            : data[i].desc,
            })
        }*/
        state.due_history = [];
       data.map(function (dta) {
           state.due_history.push(dta);
       });
    },
    SET_ALL_DUE_HISTORY:function (state, data) {
        state.all_due_history = [];
        for (var i = 0; i < data.length; i ++){
            state.all_due_history.push({
                id              : data[i].id,
                invoice_id      : data[i].invoice_id,
                pay_due         : data[i].pay_due,
                date_reduce_due : data[i].date_reduce_due,
                desc            : data[i].desc,
            })
        }
    },
    ADD_DUE_HISTORY:function (state, data) {
        // state.due_history.unshift(data);
        state.due_history.unshift({
            invoice_id: data.invoice_id,
            date_reduce_due: data.date_reduce_due,
            pay_due: data.pay_due,
            desc: data.desc,
        })
    },
    UPDATE_INVOICE: function(state, data){
        const index = state.invoices.findIndex(invoice => invoice.id === data.id);
        if(index !== -1){
            state.invoices.splice(index, 1, {
                id: data.id,
                student_id: data.student_id,
                balance : data.balance,
                discount : data.discount,
                after_discount : data.after_discount,
                payment_status : data.payment_status,
                invoice_date : data.invoice_date
            });
        }
    },
    REMOVE_INVOICE: function (state, id) {
        state.invoices = state.invoices.filter(invoice => invoice.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}