<script lang="ts" setup>
defineProps(['icon', 'link', 'isCustomIcon'])
</script>

<template>
    <a class="social-button" :href="link">
        <i v-if="!isCustomIcon" :class="icon"></i>
        <div class="customIcon" v-else v-html="icon"></div>
    </a>
</template>

<style lang="scss">
.social-button {
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    outline: 0;
    box-sizing: border-box;

    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    &:focus,
    &:hover {
        border-radius: 35%;
        background-color: rgba(255, 255, 255, 0.25);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
        transform: scale(1.05);
    }
}
.customIcon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>