img="";
status= "";

function preload(){
    img= loadImage('dog_cat.jpg'); //loading the image
}

function setup(){
    //making the canvas
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000"); // making the rectangle red
    text("Dog", 45, 75); //making the text
    noFill();
    stroke("#FF0000"); //making the border red
    rect(30, 60, 400, 350); //making the rectangle around the dog

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 310)
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}