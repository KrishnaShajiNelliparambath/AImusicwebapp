song1="";
song2="";
lwx="";
lwy="";
rwx="";
rwy="";
function preload(){
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotpose)
}

function modelloaded(){
    console.log("Model Loaded")
}

function gotpose(result){
if(result.length>0){
    console.log(result)
    lwx=result[0].pose.leftWrist.x;
    lwy=result[0].pose.leftWrist.y;
    console.log("left wristx="+lwx+"left wristx="+lwy)

    rwx=result[0].pose.rightWrist.x;
    rwy=result[0].pose.rightWrist.y;

}
}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song1.play()
}