
const state = {
    positions:[]
};
const getters = {
    get_positions:function (state) {
        return state.positions
    }
};
const actions = {
    async fetchPosition({commit}){
        if (!state.positions.length) {
            try {
                const res = await axios.get(route('position.index'));
                commit('SET_POSITION', res.data);
            } catch (e) {
                return false
            }
        }
    },
    async storePosition({commit}, position){
        try {
            const res = await axios.post(route('position.store'), position);
            commit('ADD_POSITION',res.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async updatePosition({commit}, positions){
        try {
            const res = await axios.put(route('position.update', positions.id), positions);
            commit('UPDATE_POSITION', positions);
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyPosition({commit}, id){
        try {
            const res = await axios.delete(route('position.destroy', id));
            commit('REMOVE_POSITION', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_POSITION:function (state,data) {
        state.positions = data
    },
    ADD_POSITION:function (state,data) {
        state.positions.unshift(data);
    },
    UPDATE_POSITION: function(state, data){
        const index = state.positions.findIndex(service => service.id === data.id);
        if(index !== -1){
            state.positions.splice(index, 1, {
                id      : data.id,
                type    : data.type,
                service : data.service,
                cost    : data.cost,
            });
        }
    },
    REMOVE_POSITION: function (state, id) {
        state.positions = state.positions.filter(position => position.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}