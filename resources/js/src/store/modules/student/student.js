import axios from  'axios'
const state = {
    students:[]
};
const getters = {
    all_students:function (state) {
        return state.students
    }
};
const actions = {
    async fetchStudent({commit}){
        try {
            const res = await axios.post(route('student.json'));
            commit('SET_STUDENT',res.data)
        }catch (e) {
            return false
        }
    },
    async storeStudent({commit},data){
        try {
            const res = await axios.post(route('student.store'),data);
            commit('STORE_STUDENT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editStudent({commit},id){
        try {
            const res = await axios.get(route('student.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async toggleStudent({commit},id){
        try {
            const res = await axios.delete(route('student.destroy',id));
            commit('UPDATE_STUDENT_STATUS',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateStudent({commit},data){
        try {
            const res = await axios.put(route('student.update',data.id),data);
            commit('UPDATE_STUDENT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_STUDENT:function (state,data) {
        state.students.unshift(data)
    },
    SET_STUDENT:function (state,data) {
        state.students = data
    },
    UPDATE_STUDENT:function (state,data) {
        let index = state.students.findIndex(x=>x.id===data.id);
        state.students.splice(index,1,data)
    },
    UPDATE_STUDENT_STATUS:function (state,data) {
        let index = state.students.findIndex(x=>x.id===data.id);
        state.students.splice(index,1,data)
    },
    DESTROY_STUDENT:function (state,id) {
        return state.students = state.students.filter(function (student,index) {
            return student.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}