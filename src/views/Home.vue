<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <h2>
            {{ $store.state.count }}
        </h2>
        <Button type="primary" @click="addCount">addCount</Button>
        <h3>
            {{ $store.getters.doneTodos.length }}
        </h3>
        <h3>
            {{ doneTodosCount }}
        </h3>
        <h3>
            {{ $store.getters.getTodoById( 1 ) }}
        </h3>
        <h3>
            {{ `jump count ${ $store.state.jump }` }}
        </h3>
        <h3>
            {{ displayLoginStatus }}
        </h3>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            HelloWorld : () => import('@/components/HelloWorld.vue')
        },
        created(){
        },
        computed: {
            doneTodosCount () {
                return this.$store.getters.doneTodosCount
            },
            displayLoginStatus(){
                let { user , noLoginInfo , isLogin } = this.$store.state;
                return isLogin ?  `用户 ：${ user.nickname } ， 管理状态 ： ${ user.role }` :  ` 未登录 ！ 原因：${ noLoginInfo.message } 错误码：${ noLoginInfo.code }`
            }
        },
        methods:{
            ...mapMutations([
                'addCount'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        margin-top: 2em;
    }
</style>

