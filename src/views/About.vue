<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="list-about" ref="wrapper">
            <div class="container-cont">
                <div class="wrapper-wrap">
                    <ul>
                        <li v-for="item in items" :key="item">{{ item }}</li>
                    </ul>
                    <div v-show="loading">加载中...</div>
                    <div v-show="more">加载更多</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'

    export default {
        data(){
            return{
                items : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                count : 16,
                loading : false,
                more : true,
            }
        },
        methods:{
            getData(){
                return new Promise( resolve => {
                    setTimeout(()=>{
                        let arr = [];
                        for( let i = 0 ; i < 10 ; i ++){
                            arr.push(this.count ++);
                        }
                        resolve(arr);
                    },2000)
                })
            }
        },
        computed(){},
        mounted(){
            this.$nextTick(()=>{
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.wrapper,{
                        scrollY:true,
                        click : true,
                    })

                    this.scroll.on('touchEnd',pos => {
                        console.log(pos)
                        if(this.scroll.maxScrollY - pos.y > 50){
                            this.more = false;
                            this.loading = true;

                            this.getData().then( ret => {
                                console.log(ret)
                                this.items = this.items.concat(ret)

                                this.loading = false;
                                this.more = true;
                                this.scroll.refresh()
                            })
                        }
                    })
                }
            })
        }
    }
</script>
<style lang="scss">
    .about{
        width: 100%;height: 100%;
    }
    .list-about{
        width:100%;height: calc(100% - 36px);overflow: hidden;
        .container-cont{
            .wrapper-wrap{
                ul{
                    list-style: none;
                    li{
                        width: 100%;height: 50px;line-height: 50px;font-size: 26px;background: red;
                    }
                }
            }
        }
    }
</style>

