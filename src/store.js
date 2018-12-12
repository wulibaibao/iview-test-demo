import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count : 1,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '111', done: false },
        ],
        jump : 1,
        nickname : '',
        user : {
            nickname : '',
            avatar : '',
            role : '',
        },
        noLoginInfo : {
            message : '',
            code : '',
        },
        isLogin : false,
        AppComponent: 'Login',
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter( todo => todo.done )
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        addCount( store ){
            store.count ++;
        },
        alreadyLogin( store ){
            store.isLogin = true;
            store.AppComponent = 'Container'
        },
        noLogin( store ){
            store.isLogin = false;
            store.AppComponent = 'Login'
        },
        setLoginUserInfo ( { user } , { nickname , role , avatar } ){
            user.nickname = nickname
            user.role = role
            user.avatar = avatar
        },
        alertNologinMsg( { noLoginInfo } , { message , code }){
            noLoginInfo.message = message;
            noLoginInfo.code = code
        },
    },
    actions: {
        // async requireAuth ({ commit }) {
        //     await axios.get(`/admin/user/login/info`)
        //         .then( ret => {
        //             console.log( ret )
        //             commit('jumpUrl')
        //         })
        //         .catch(error => commit('alertNologinMsg' , error.response.data))
        // },
    }
})
