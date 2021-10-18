function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(1000,500);
    video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
	
}
function draw() {
game()
}
function modelLoaded(){
console.log("Great Job!");
}
function gotPoses(result){
console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
fill("red")
circle(noseX,noseY,40);
}






