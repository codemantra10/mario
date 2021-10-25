function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin=loadSound("coin.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	world_end=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,400);
    video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
}
function draw() {
game();
}
function modelLoaded(){
console.log("Great Job!");
}
function gotPoses(result){
if (result.length>0){
console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
}
}






