'use strict';

const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

async function init() {
    try {
        const constraints = {
            video: 'true', 
            audio: {
                echoCancellation: {exact: 'hasEchoCancellation'}
            }
        }
        const stream = await openMediaDevices(constraints);
        const videoElement = document.querySelector('video#localVideo');
        //stream.getAudioTracks()[0].enabled = false;
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error opening media stream:', error)
    }
}