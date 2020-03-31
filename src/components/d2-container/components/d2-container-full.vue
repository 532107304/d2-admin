<template>
    <div class="d2-container-full">
        <div
            v-if="$slots.header"
            ref="header"
            class="d2-container-full__header"
        >
            <slot name="header" />
        </div>
        <div
            ref="body"
            class="d2-container-full__body"
        >
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            ref="footer"
            class="d2-container-full__footer"
        >
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
import scroll from './mixins/normal'
export default {
    name: 'D2ContainerFull',
    mixins: [
        scroll
    ],
    mounted () {
    // 增加滚动事件监听
        this.addScrollListener()
    },
    beforeDestroy () {
    // 移除滚动事件监听
        this.removeScrollListener()
    }
}
</script>
