noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;



function setup(){
    canvas=createCanvas(550,550);
    canvas.position(800,150)
    video=createCapture(VIDEO);
    poseNet=ml5.poseNet(video, modelLoaded );
    poseNet.on('pose', gotPoses ); 
}
function draw(){
    document.getElementById("square_size").innerHTML="Width And Height Of The Square Is ="+ difference + "px";
fill('#FFA500');
stroke('#FFA500');
square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses ( results ){
if (results.length > 0)
{
    console.log( results);
    noseX=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("noseX ="+ noseX + "noseY = "+ noseY );

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference= floor(leftWristX - rightWristX);
    console.log(" leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = "+ difference );
}
}