song1 = " ";
song2 = " ";

/*leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;*/

function preload() {
    song1 = loadSound("Star Wars - The Imperial March (DJ AG Remix).mp3");
    song2 = loadSound("Pirates of the Caribbean  - He's a Pirate (DJ AG Remix).mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    //posenet = ml5.poseNet(video,modelLoaded);
    //posenet.on('pose',gotPoses)

}

//function gotPoses(results) {
    //if(results.length > 0 ) {
       //console.log(results);
       // leftWristX = results[0].pose.leftWrist.x 
   // leftWristY = results[0].pose.leftwrist.y
    //console.log("Left Wrist X = " +leftWristX +"Left Wrist Y = " + leftWristY)

    //rightWristX = results[0].pose.rightWrist.x 
   //rightWristY = results[0].pose.rightWrist.y
   // console.log("Right Wrist X = " +rightWristX +"Right Wrist Y = " + rightWristY)
    //}
   // }






//function modelLoaded(){
    //console.log("Posenet Is Initialized! :D")
//}


function draw(){
    image(video,0,0,600,500)
}

