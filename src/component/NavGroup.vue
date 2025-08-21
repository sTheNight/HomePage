<script lang="ts" setup>
import { config } from '@/config';
const { navItems } = config
import NavItem from './NavItem.vue';
</script>

<template>
    <div id="nav-group">
        <NavItem v-for="item in navItems" :link="item.link" :name="item.name" />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/rule" as *;

#nav-group {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    @media #{$desktop-rule} {
        position: absolute;
        right: 0;
        max-width: 50%;
        padding-right: $desktop-padding;
        overflow-y: auto;
        max-height: 80%;
    }

    @media #{$mobile-rule} {
        width: 100%;
        padding: 0 $mobile-padding;
    }
}
</style>