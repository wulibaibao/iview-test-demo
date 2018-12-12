<style lang="scss">
    .section{
        position: relative;
        .first{
            width: 100px;height: 100px;position: absolute;left: 30%;bottom: -100px;background: #000000;color:#fff;font-size: 25px;transition: all 1s;
        }
    }
    .active .first { bottom: 10%; opacity: 1; transition-delay: 0.7s;}
</style>

<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
            First section ...
            <div class="first">
                first box div
            </div>
        </div>
        <div class="section">
            Second section ...
        </div>
    </full-page>
</template>
<script>
export default {
    data() {
        return {
            options: {
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
            },
        }
    }
}
</script>

