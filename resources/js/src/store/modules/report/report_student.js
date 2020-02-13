
const state = {
    report_students:[],
    total:null
};
const getters = {
    all_report_students:function (state) {
        return state.report_students
    }
};
const actions = {
    async fetchReportStudentInfo({commit}){
        async function next_page(url) {
            const res = await axios.post(url);
            return res.data
        }
        if (!state.report_students.length >= state.total) {
            try {
                axios.post(route('report.student_info')).then(function (res) {
                    return res.data
                }).then(async function (data) {
                    commit('SET_RPORT_STUDENT_INFO', data);
                    async function f(next_url) {
                        if (next_url) {
                            next_page(next_url).then(async function (_data) {
                                commit('SET_RPORT_STUDENT_INFO', _data);
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
};
const mutations = {
    SET_RPORT_STUDENT_INFO:function (state,data) {
        state.total = data.total;
        data.data.forEach(function (item, index) {
            state.report_students.push(item);
        });
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}