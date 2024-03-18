<template>
    <div class="text-center img-margin">
        <img class="zoomable img-shadow" :src="$withBase(src)" :alt="alt" />
        <div class="no-mp sub-text">
            <slot>{{alt}}</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageWrap',
        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        }
    };
</script>