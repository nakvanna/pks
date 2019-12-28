import axios from  'axios'
const state = {
    students:[],
    total:null
};
const getters = {
    all_students:function (state) {
        return state.students
    }
};
const actions = {
    async fetchStudent({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.students.length >= state.total) {
            try {
                axios.post(route('student.json')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_STUDENT', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_STUDENT', _data);
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
    async deleteStudent({commit},id){
        try {
            await axios.delete(route('student.delete',id));
            commit('DELETE_STUDENT',id);
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
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.students.push(item);
        });
    },
    UPDATE_STUDENT:function (state,data) {
        let index = state.students.findIndex(x=>x.id===data.id);
        state.students.splice(index,1,data)
    },
    UPDATE_STUDENT_STATUS:function (state,data) {
        let index = state.students.findIndex(x=>x.id===data.id);
        state.students.splice(index,1,data)
    },
    DELETE_STUDENT:function (state,id) {
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