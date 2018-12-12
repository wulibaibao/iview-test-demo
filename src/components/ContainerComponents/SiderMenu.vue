<template>
    <Menu 
        active-name="1-2" 
        theme="light" 
        width="auto" 
        :open-names="['1']"
    >
        <Submenu 
            v-for="( item , index ) in menuList" 
            :key="index" 
            :name="item.path"
        >
            <template slot="title">
                <Icon v-if="item.icon" :type="item.icon"></Icon>
                {{ item.name }}
            </template>
            <MenuItem 
                v-if="item.children" 
                v-for="( child , ind ) in item.children" 
                :name="child.path"
                :key="ind"
                @click.native="handleClick( child )"
            >
                {{ child.name }}
            </MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
export default {
    methods:{
        handleClick( { path } ){
            console.log(path)
            this.$router.push({ path })
        }
    },
    data(){
        return {
            menuList : [
                {
                    path :'/about',
                    icon : 'ios-navigate',
                    name : 'item',
                    role : '',
                    children : [
                        {
                            icon : '',
                            name : 'Option',
                            path : '/home',
                        },
                        {
                            icon : '',
                            name : 'Option',
                            path : '/fullPage',
                        }
                    ]
                }
            ]
        }
    },
}
</script>
