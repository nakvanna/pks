
const state = {
    invoices:[],
    invoice_extract: [],
    invoice_by_stu: [],
};
const getters = {
    get_invoices:function (state) {
        return state.invoice_extract;
    },
    get_invoice_stu: function (state) {
        return state.invoice_by_stu;
    }
};
const actions = {
    async fetchInvoices({commit}){
            try {
                const res = await axios.get(route('invoice.index'));
                commit('SET_INVOICE', res.data);
            } catch (e) {
                return false
            }
    },
    async fetchInvoiceByStuID({commit}, stu_id){
        try {
            const res = await axios.get(route('invoice.get', stu_id));
            commit('SET_INVOICE_STU', res.data);
        } catch (e) {
            return false
        }
    },
    async storeInvoice({commit}, invoices){
        try {
            const res = await axios.post(route('invoice.store'), invoices);
            commit('ADD_INVOICE', res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateInvoice({commit},invoices){
        try {
            const res = await axios.put(route('invoice.update', invoices.id), invoices);
            commit('UPDATE_INVOICE', invoices);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyInvoice({commit}, id){
        try {
            const res = await axios.delete(route('invoice.destroy', id));
            commit('REMOVE_INVOICE', id);
            return res.data;
        }catch (e) {
            return false;
        }
    },
    async deleteInvoice({commit},id){
        try {
            await axios.delete(route('invoice.delete',id));
            commit('DELETE_INVOICE',id);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_INVOICE:function (state,data) {
        state.invoice_extract = [];
        for (var i = 0; i < data.length; i ++){
            state.invoice_extract.push({
                student_id     : data[i].student_id,
                name           : data[i].students.name,
                latin          : data[i].students.latin,
                gender         : data[i].students.gender,
                balance        : data[i].balance,
                discount       : data[i].discount,
                after_discount : data[i].after_discount,
                due_balance    : data[i].due_balance,
                invoice_date   : data[i].invoice_date,
                payment_status : data[i].payment_status,
                id             : data[i].id,
                receive_balance: data[i].receive_balance,
            })
        }
    },
    SET_INVOICE_STU: function (state, data){
        state.invoice_by_stu = data;
    },
    ADD_INVOICE:function (state, data) {
        // state.invoice_extract.unshift(data);
        state.invoice_extract.unshift({
            student_id: data.student_id,
            name: data.students.name,
            latin: data.students.latin,
            balance: data.balance,
            discount: data.discount,
            after_discount: data.after_discount,
            due_balance: data.due_balance,
            invoice_date: data.invoice_date,
            payment_status: data.payment_status,
            receive_balance: data.receive_balance,
            id: data.id,
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
    },
    DELETE_INVOICE:function (state,id) {
        return state.invoice_extract = state.invoice_extract.filter(function (invoice,index) {
            return invoice.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}