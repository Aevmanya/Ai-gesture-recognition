
Nose_x= 0;
Nose_y= 0;
difference= 0;
left_hand_wrist_X= 0;
right_hand_wrist_X= 0;


function setup(){
video= createCapture(VIDEO);
video.size(550, 500);
canvas= createCanvas(550, 415);
canvas.position(650, 110);
posenet= ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
};

function modelLoaded(){
console.log("Model is Loaded");
};

function draw(){
background("red");
fill("blue");
stroke("blue");
square(Nose_x, Nose_y, difference);
};

function gotposes(results){
if(results.lenght>0){
console.log(results);
Nose_x= results[0].pose.nose.x;
Nose_y= results[0].pose.nose.y;
left_hand_wrist_X= results[0].pose.leftWrist.x;
right_hand_wrist_X= results[0].pose.rightWrist.x;
difference= floor(right_hand_wrist_X - left_hand_wrist_X);
};
};

