<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem
            v-for="( item , index ) in items" 
            :key="index"
            :name="item.name"
        >
            <Icon 
                v-if="item.icon" 
                :type="item.icon"
            >
            </Icon>
            {{ item.meta }}
        </MenuItem>    
    </Menu>
</template>
<script>
    export default {
        data(){
            return {
                items : [
                    {
                        name : '1',
                        icon : 'ios-navigate',
                        meta : 'item 1'
                    },
                ]
            }
        }
    }
</script>

