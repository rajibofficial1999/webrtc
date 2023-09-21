<template>
    <h1> My Video </h1>

    <div>
        <video ref="localVideo" autoplay playsinline controls="false" />
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const localVideo = ref('');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
        console.log(stream);
    })
    .catch(function (error) {
        console.error('Error accessing media devices: ' + error.name + ': ' + error.message);
    });


</script>
