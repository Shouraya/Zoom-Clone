const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true

let myVideoStream
// Get video and audio
navigator.mediaDevices.getUserMedia({
    video: true, //true so that we need video, else false
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}