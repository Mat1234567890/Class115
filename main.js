function preload(){

}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("PoseNet has Initalized!");
}
function gotPoses(results){
console.log(results);
if (results.length > 0){
console.log(results);
console.log("X coordinate = "+ results[0].pose.nose.x);
console.log("Y coordinate = "+ results[0].pose.nose.y);
console.log("bye");
}
console.log("hi");
}

function draw(){
image(video, 0, 0, 300, 300);
}
function take_snapshot(){
save("filteredPhoto.png");
}