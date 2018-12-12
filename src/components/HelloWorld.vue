<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <slot-component>
            <div slot="top">这个是div</div>
            <div>这是中间部分</div>
            <div slot="bottom">这是一个bottom</div>
        </slot-component>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        components: {
            slotComponent: () => import("@/components/slot")
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
