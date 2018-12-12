<template>
    <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem 
            v-for="( item , index ) in items" 
            :key="index" 
            :path="item.path"
        >
            {{ item.name }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
    props : [
        "items"
    ]
}
</script>

