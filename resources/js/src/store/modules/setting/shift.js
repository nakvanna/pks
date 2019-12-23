import axios from  'axios'
const state = {
    shifts:[]
};
const getters = {
    get_shifts:function (state) {
        return state.shifts
    }
};
const actions = {
    async fetchShifts({commit}){
        if (!state.shifts.length) {
            try {
                const res = await axios.get(route('shift.index'));
                commit('SET_SHIFT', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storeShift({commit},shifts){
        try {
            const res = await axios.post(route('shift.store'),shifts);
            commit('ADD_SHIFT',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyShift({commit}, id){
        try {
            const res = await axios.delete(route('shift.destroy', id));
            commit('REMOVE_SHIFT', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_SHIFT:function (state,data) {
        state.shifts = data
    },
    ADD_SHIFT:function (state,data) {
        state.shifts.unshift(data);
    },
    REMOVE_SHIFT: function (state, id) {
        state.shifts = state.shifts.filter(shift => shift.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}