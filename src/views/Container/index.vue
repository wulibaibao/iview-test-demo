<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        width: 100%;height: 100%;overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<template>
    <div class="layout">
        <Layout style="height:100%;">
            <Header>
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <horizontal-menu></horizontal-menu>
                </div>
            </Header>
            <Layout style="height:calc(100% - 60px);">
                <Sider hide-trigger :style="{background: '#fff', height:'100%'}">
                    <sider-menu-component></sider-menu-component>
                </Sider>
                <Layout :style="{padding: '0 24px 24px',height:'100%'}">
                    <Content :style="{padding: '24px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        components:{
            SiderMenuComponent : () => import('@/components/ContainerComponents/SiderMenu'),
        }
    }
</script>

