<template>
    <div id="app">
        <div :is="$store.state.AppComponent"></div>
    </div>
</template>
<script>
    export default {
        components : {
            Login : () => import( '@/views/Login/index'),
            Container : () => import( '@/views/Container/index')
        }
    }
</script>


<style lang="scss">
    *{box-sizing: border-box;margin:0;padding:0;}
    body,
    html{
        width: 100%;height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
