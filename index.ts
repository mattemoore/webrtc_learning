import adapter from "webrtc-adapter";

const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

async function init() {
    try {
        const stream = await openMediaDevices({video: 'true', audio: 'true'});
        const videoElement = <HTMLMediaElement>document.querySelector('video#localVideo');
        stream.getAudioTracks()[0].enabled = false;
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error opening media stream:', error)
    }
}