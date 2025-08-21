<script lang="ts" setup>
import { config } from '@/config';
import SocialButton from './SocialButton.vue'
import Divider from './Divider.vue';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

let name = ref(config.author);
let hitokoto = ref('Hitokoto is loading...')
let avatarUrl = ref(config.avatar)

onMounted(() => {
    fetchHitokoto()
})

async function fetchHitokoto(): Promise<void> {
    try {
        const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
        const hitokotoObj = await response.json()
        hitokoto.value = hitokotoObj.hitokoto ?? 'Could not load Hitokoto'
    } catch {
        hitokoto.value = 'Failed to load Hitokoto'
    }
}
</script>

<template>
    <div id="personal-description">
        <div class="avatar" tabindex="0" :style="{ backgroundImage: `url(${avatarUrl})` }"></div>
        <p id="name">{{ name }}</p>
        <p id="Hitokoto">{{ hitokoto }}</p>
        <Divider />
        <div class="contact">
            <SocialButton v-for="item in config.socialLinks" :icon="item.icon" :link="item.link" :key="item.link" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

#personal-description {
    box-sizing: border-box;

    @media #{$desktop-rule} {
        padding-left: $desktop-padding;
        width: 50%;
        position: absolute;
        left: 0;
    }

    @media #{$mobile-rule} {
        width: 100%;
        padding: $mobile-padding;
    }
}

.avatar {
    width: $desktop-avatar-width;
    height: $desktop-avatar-width;
    border-radius: 50%;
    border: 1px solid;

    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    transition: all .3s;
    color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    outline: 0;
    background-size: cover;

    &:hover,
    &:focus {
        transform: translate(8px, 0) scale(1.1);
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.35);
        border-radius: 35%;
    }

    @media #{$mobile-rule} {
        width: $mobile-avatar-width;
        height: $mobile-avatar-width;
    }
}

#name {
    margin-top: 24px;
    font-weight: 600;
    font-size: 1.3rem;
    user-select: none;
}

#Hitokoto {
    margin-top: 8px;
    user-select: none;
}

.contact {
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: $contact-max-div;

    @media #{$mobile-rule} {
        width: 100%;
    }
}
</style>