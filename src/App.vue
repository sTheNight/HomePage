<script setup lang="ts">
import { config } from './config';
import NavItems from './component/NavItem.vue';
import PersonalDescription from './views/PersonalDescription.vue';
import NavGroup from './views/NavGroup.vue';

document.title = config.title
</script>

<template>
    <div class="container">
        <PersonalDescription />
        <NavGroup />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/rule" as *;

.container {
    display: flex;

    @media #{$desktop-rule} {
        align-items: center;
        height: 100%;
        width: 100%;
    }

    @media #{$mobile-rule} {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        min-height: 100%;
    }

    &::after {
        content: "";
        position: fixed;
        backdrop-filter: blur(4px);
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.15);
    }
}
</style>

<style lang="scss">
* {
    color: rgba(255, 255, 255, 0.85);
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(../background.png);
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    height: 100vh;
    position: relative;
    display: flex;

    &::before {
        content: "";
        position: fixed;
        backdrop-filter: blur(4px);
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.15);
    }
}
</style>