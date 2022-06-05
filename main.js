difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function modalLoaded()
{
    console.log('PoseNet Is Initialized!')
}

function draw() {    
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text("Jackson", 50, 200);
}