img="";
status= "";
objects= [];

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
    image(img, 0, 0, 640, 420); //setting dimensions for the image
    
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected"; //showing that object is detected
            fill("#FF0000"); //filling the rectangle red so the text color is red
            percent = floor(objects[i].confidence * 100); //finding the confidence of object detection
            text(objects[i].label + " " + percent + "%", objects[i].x +3, objects[i].y +15); //showing the name and confidence of the objects
            noFill();//removing the fill from the rectangle
            stroke("#FF0000"); //making the border red
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,); //setting the dimensions of the rectangles
        }
    }

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
    objects = results;
}