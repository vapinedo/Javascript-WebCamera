let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");

// const getCameraList = async () => {
//     const camera = 'videoinput';
//     const deviceList = await navigator.mediaDevices.enumerateDevices();

//     const cameraList = deviceList.filter(device => {
//         if (device.kind === camera) {
//             let newCameraObj = {};
//             newCameraObj.label = camera.label;
//             newCameraObj.deviceId = camera.deviceId;
//             newCameraObj.kind = camera.kind;
//         }
//     });
//     return cameraList;
// }

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
            video.srcObject = stream;
            // video.play();
        });
}

document.getElementById("snap").addEventListener("click", () => {
    context.drawImage(video, 0, 0, 640, 480);
});
