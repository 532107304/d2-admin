<template>
    <div class="d2-container-card-bs">
        <div
            v-if="$slots.header"
            ref="header"
            class="d2-container-card-bs__header"
        >
            <slot name="header" />
        </div>
        <div
            ref="wrapper"
            class="d2-container-card-bs__body"
        >
            <div class="d2-container-card-bs__body-wrapper-inner">
                <div class="d2-container-card-bs__body-card">
                    <slot />
                </div>
            </div>
        </div>
        <div
            v-if="$slots.footer"
            ref="footer"
            class="d2-container-card-bs__footer"
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
