<template>
    <div>
        <div @click="clickBtn">button</div>
        /*  keep-alive  */
        <keep-alive>
            <div :is="AsyncComponent"></div>
        </keep-alive>
        /*  no keep-alive  */
        <div :is="AsyncComponent"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                AsyncComponent:'First'
            }
        },
        methods:{
            clickBtn(){
                this.AsyncComponent = this.AsyncComponent === 'First' ? 'Secend' : 'First'
            }
        },
        components:{
            First : () => import('@/components/AsyncFirst'),
            Secend : () => import('@/components/AsyncSecend'),
        }
    }
</script>

