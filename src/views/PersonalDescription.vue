<script lang="ts" setup>
import { config } from '@/config';
import SocialButton from '../component/SocialButton.vue'
import Divider from '../component/Divider.vue';
import { onMounted, ref } from 'vue';

let name = ref(config.author);
let hitokoto = ref('Hitokoto is loading...')
let avatarUrl = ref(config.avatar)
let isHitokotoRefreshButtonShow = ref(false)

onMounted(() => {
    fetchHitokoto()
})

async function fetchHitokoto(): Promise<void> {
    try {
        if (config.hitokoto !== '#HitokotoEnable#') {
            hitokoto.value = config.hitokoto;
            return;
        }
        const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
        const hitokotoObj = await response.json()
        hitokoto.value = hitokotoObj.hitokoto ?? 'Could not load Hitokoto'
    } catch (e) {
        console.log(e)
        hitokoto.value = 'Failed to load Hitokoto'
    }
}
</script>

<template>
    <div id="personal-description">
        <div class="avatar-wrapper" :style="{ '--avatar-url': `url(${avatarUrl})` }">
            <div class="avatar" tabindex="0"></div>
        </div>
        <p id="name">{{ name }}</p>
        <p id="Hitokoto" @mouseenter="isHitokotoRefreshButtonShow = true"
            @mouseleave="isHitokotoRefreshButtonShow = false">{{ hitokoto }}
            <Transition name="refresh">
                <i v-if="isHitokotoRefreshButtonShow" class="fa-solid fa-rotate hitokoto-refresh-button"
                    @click.stop="fetchHitokoto()"></i>
            </Transition>
        </p>
        <Divider />
        <div class="contact">
            <SocialButton v-for="item in config.socialLinks" :icon="item.icon" :link="item.link"
                :is-custom-icon="item.customIcon" :key="item.link" />
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

.avatar-wrapper {
    width: $desktop-avatar-width;
    height: $desktop-avatar-width;
    position: relative;
    cursor: pointer;
    outline: 0;

    @media #{$mobile-rule} {
        width: $mobile-avatar-width;
        height: $mobile-avatar-width;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-image: var(--avatar-url);
        background-size: cover;
        background-position: center;
        filter: blur(16px);
        border-radius: 50%;
        transition: all .3s;
    }

    &:hover::after,
    &:focus-within::after {
        transform: translate(8px, 0) scale(1.1);
        border-radius: 35%;
        filter: blur(32px);
    }
}

.avatar {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid;
    background-size: cover;
    background-position: center;
    transition: all .3s;
    outline: 0;
    background-image: var(--avatar-url);

    &:hover,
    &:focus {
        transform: translate(8px, 0) scale(1.1);
        border-radius: 35%;
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

.hitokoto-refresh-button {
    cursor: pointer;
    display: inline-block;
    margin-left: 4px;
}
</style>

<style lang="scss">
.refresh-enter-active,
.refresh-leave-active {
    transition: all 0.2s ease;
}

.refresh-enter-from,
.refresh-leave-to {
    opacity: 0;
}

.refresh-enter-to,
.refresh-leave-from {
    opacity: 1;
}
</style>