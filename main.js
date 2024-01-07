function preload(){
    song1=loadSound("Badtameez-Dil Song.mp3");
    song2=loadSound("Balam Pichkari Song.mp3");

}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}
song1="";
song2="";