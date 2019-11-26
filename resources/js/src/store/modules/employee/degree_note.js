import axios from  'axios'
const state = {
    degree_notes:[]
};
const getters = {
    get_degree_notes:function (state) {
        return state.degree_notes
    }
};
const actions = {
    async fetchDegreeNote({commit}){
        try {
            const res = await axios.get(route('degree-note.index'));
            commit('SET_DEGREE_NOTE',res.data);
        }catch (e) {
            return false
        }
    },
    async storeDegreeNote({commit}, degree_note){
        try {
            const res = await axios.post(route('degree-note.store'), degree_note);
            commit('ADD_DEGREE_NOTE',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updateDegreeNote({commit}, degree_notes){
        try {
            const res = await axios.put(route('degree-note.update', degree_notes.id), degree_notes);
            commit('UPDATE_DEGREE_NOTE', degree_notes);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyDegreeNote({commit}, id){
        try {
            const res = await axios.delete(route('degree-note.destroy', id));
            commit('REMOVE_DEGREE_NOTE', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_DEGREE_NOTE:function (state,data) {
        state.degree_notes = data
    },
    ADD_DEGREE_NOTE:function (state,data) {
        state.degree_notes.unshift(data);
    },
    UPDATE_DEGREE_NOTE: function(state, data){
        const index = state.degree_notes.findIndex(service => service.id === data.id);
        if(index !== -1){
            state.degree_notes.splice(index, 1, {
                id      : data.id,
                type    : data.type,
                service : data.service,
                cost    : data.cost,
            });
        }
    },
    REMOVE_DEGREE_NOTE: function (state, id) {
        state.degree_notes = state.degree_notes.filter(position => position.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}