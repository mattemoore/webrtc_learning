const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

try {
    const stream = openMediaDevices({video: 'true', audio: 'true'});
    console.log('Got media stream:', stream)
} catch (error) {
    console.error('Error opening media stream:', error)
}