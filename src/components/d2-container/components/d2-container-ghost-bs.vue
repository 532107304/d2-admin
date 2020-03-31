<template>
    <div class="d2-container-ghost-bs">
        <div
            v-if="$slots.header"
            ref="header"
            class="d2-container-ghost-bs__header"
        >
            <slot name="header" />
        </div>
        <div
            ref="wrapper"
            class="d2-container-ghost-bs__body"
        >
            <!-- https://github.com/d2-projects/d2-admin/issues/181 -->
            <div>
                <slot />
            </div>
        </div>
        <div
            v-if="$slots.footer"
            ref="footer"
            class="d2-container-ghost-bs__footer"
        >
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
import bs from './mixins/bs'
export default {
    name: 'D2ContainerCardBs',
    mixins: [
        bs
    ]
}
</script>
