<script lang="ts" setup>
import { computed } from 'vue';
import { type VButtonProps } from './VButtonProps';

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<VButtonProps>(), {
    shape: 'default',
    size: 'md',
})

const classes = computed(() => ({
    [`shape-${props?.shape}-btn-story`]: true,
    [`size-${props.size}-btn-story`]: true
}))
</script>

<template>
    <button type="button" class="btn-story" :class="classes" v-bind="$attrs">{{ text }}</button>
</template>

<style lang="css" scoped>
/* shape porps */
:where(.shape-default-btn-story) {
    --border-radius-btn-story: 6px;
}
:where(.shape-circle-btn-story) {
    --border-radius-btn-story: 50%;
}
:where(.shape-round-btn-story.size-xs-btn-story) {
    --border-radius-btn-story: 24px;
}
:where(.shape-round-btn-story.size-sm-btn-story) {
    --border-radius-btn-story: 29px;
}
:where(.shape-round-btn-story.size-md-btn-story) {
    --border-radius-btn-story: 34px;
}
:where(.shape-round-btn-story.size-lg-btn-story) {
    --border-radius-btn-story: 40px;
}

/* size props  ================================================================================*/
/* xs */
:where(.size-xs-btn-story) {
    --height-btn-story: 24px;
    --font-size-btn-story: 12px;
}
:where(.size-xs-btn-story.shape-default-btn-story, .size-xs-btn-story.shape-round-btn-story) {
    --padding-inline-end-btn-story:8px;
    --padding-inline-start-btn-story: 8px;
}
:where(.size-xs-btn-story.shape-circle-btn-story) {
    min-width: 24px;
}

/* sm */
:where(.size-sm-btn-story ) {
    --height-btn-story: 28px;
    --font-size-btn-story: 14px;
}
:where(.size-sm-btn-story.shape-default-btn-story, .size-sm-btn-story.shape-round-btn-story  ) {
    --padding-inline-end-btn-story:12px;
    --padding-inline-start-btn-story: 12px;
}
:where(.size-sm-btn-story.shape-circle-btn-story ) {
    min-width: 28px;
}
/* md */
:where(.size-md-btn-story ) {
    --height-btn-story: 32px;
    --font-size-btn-story: 16px;
}
:where(.size-md-btn-story.shape-default-btn-story, .size-md-btn-story.shape-round-btn-story ) {
    --padding-inline-end-btn-story:16px;
    --padding-inline-start-btn-story: 16px;
}
:where(.size-md-btn-story.shape-circle-btn-story) {
    min-width: 32px;
}
/* lg */
:where(.size-lg-btn-story) {
    --height-btn-story: 48px;
    --font-size-btn-story: 18px;
}
:where(.size-lg-btn-story.shape-default-btn-story, .size-lg-btn-story.shape-round-btn-story ) {
    --padding-inline-end-btn-story:20px;
    --padding-inline-start-btn-story: 20px;

}
:where(.size-lg-btn-story.shape-circle-btn-story) {
    min-width: 48px;
}

.btn-story {
    box-sizing: border-box;
    /* size props */
    height: var( --height-btn-story);
    padding-inline-start: var(--padding-inline-start-btn-story);
    padding-inline-end: var(--padding-inline-end-btn-story);
    font-size: var(--font-size-btn-story);
    /*shape props  */
    border-radius: var(--border-radius-btn-story);
    border-color: transparent;
}
</style>
