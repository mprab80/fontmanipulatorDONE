noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
 
function setup(){
    nithilVideo=createCapture(VIDEO);
    nithilVideo.size(500,500);

    canvas=createCanvas(500,400);
   canvas.position(700,150);

    posenet=ml5.poseNet(nithilVideo, modelLoaded);
    posenet.on("pose", gotNithilPoses)
}
function modelLoaded(){
    console.log("Model is Loaded")
}
function gotNithilPoses(results){
    if  (results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference=floor(leftwristX-rightwristX)
        console.log(difference)
    }
}
function draw(){
    background("purple");
    var canvas = document.getElementById("defaultCanvas0");
    var context = canvas.getContext("2d");
    context.font = difference+"px Arial";
    context.strokeText("Nithil", 50, 200);
    
    //fill("blue")
    //stroke("blue")
}