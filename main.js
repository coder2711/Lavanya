music_1 = "";
music_2 = "";
Score_left = 0;
Score_right = 0;
 function preload(){
     music_1 = loadSound("Baa-Baa-Black-Sheep-.mp3");
     music_2 = loadSound("a.mp3");
 }

 function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    vidau = createCapture(VIDEO);
    vidau.hide();
    posenet = ml5.poseNet(vidau, loaded );
    posenet.on('pose',  got_Results);
}
function loaded(){
    console.log("Loaded");
}

function got_Results(ree){
    Score_left = ree[0].pose.keypoints[9].score;
    Score_right = ree[0].pose.keypoints[10].score;
    console.log(ree);
    
}


function draw(){
    image(vidau ,0,0, 400 , 400);

    if(Score_left >0.2){
        document.getElementById("Name").innerHTML = "The Song Playing Is - Baa Baa Black Sheep";
        music_1.pause();
        music_2.pause(); 
        music_1.play();
         music_1.setVolume(1);
         music_1.rate(1);
     
 }
 else if(Score_right >0.2){
     document.getElementById("Name").innerHTML = "The Song Playing Is - Happy Birthday Song";
     music_1.pause();
        music_2.pause();
     music_2.play();
     music_2.setVolume(1);
     music_2.rate(1);
 
}
    
}

function stop(){
    music_2.pause();
    music_1.pause();
    document.getElementById("Name").innerHTML = "Song Has Been Stopped";
}