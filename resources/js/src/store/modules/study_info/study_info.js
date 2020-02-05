import axios from  'axios'
const state = {
    study_infos:[],
    show_study_infos:[],
    total:null
};
const getters = {
    get_study_infos:function (state) {
        return state.study_infos
    },
    show_study_infos: function (state) {
        return state.show_study_infos
    }
};
const actions = {
    async fetchStudyInfos({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.study_infos.length >= state.total) {
            try {
                axios.post(route('study_info.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_STUDY_INFO', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_STUDY_INFO', _data);
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
    async showStudyInfos({commit}, data){
        try {
            const res = await axios.post(route('study-info.by-year', {data}));
            commit('SHOW_STUDY_INFO', res.data);
        } catch (e) {
            return false
        }
    },
    async storeStudyInfo({commit},data){
        try {
            const res = await axios.post(route('study-info.store'),data);
            commit('ADD_STUDY_INFO',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async storeChangeStudyInfo({commit},data){
        try {
            const res = await axios.post(route('study_info.change'),data);
            commit('ADD_STUDY_INFO',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateStudyInfo({commit}, study_infos){
        try {
            const res = await axios.put(route('study-info.update', study_infos.id), study_infos);
            commit('UPDATE_STUDY_INFO', res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateStudyInfoUnused({commit}, study_infos){
        try {
            const res = await axios.put(route('study-info.update_unused', study_infos.id), study_infos);
            commit('UPDATE_STUDY_INFO', res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async destroyStudyInfo({commit}, id){
        try {
            const res = await axios.delete(route('study-info.destroy', id));
            commit('REMOVE_STUDY_INFO', id);
            return res.data;
        }catch (e) {
            return false;
        }
    }
};
const mutations = {
    SET_STUDY_INFO:function (state,data) {
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.study_infos.push(item);
        });
    },
    SHOW_STUDY_INFO:function (state,data) {
        state.show_study_infos = data
    },
    ADD_STUDY_INFO:function (state,data) {
        data.forEach(function (item,index) {
            state.study_infos.unshift(item);
        })
    },
    UPDATE_STUDY_INFO: function(state, data){
        const index = state.study_infos.findIndex(study_info => study_info.id === data.id);
        if(index !== -1){
            state.study_infos.splice(index, 1, data);
        }
    },
    REMOVE_STUDY_INFO: function (state, id) {
        state.study_infos = state.study_infos.filter(service => service.id !== id);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}