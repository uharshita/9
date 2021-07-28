img = "";
status = "";

function preload()
{
    img = loadImage('hall.jpg')
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function draw()
{ image(img,0,0,640,420)
    fill("#FF0000");
    text("Living room",45,25);
    noFill();
    stroke("#FF0000");
    rect(5,30,620,400);


}

function gotResult()
{
    if (error) {
        console.log(error);
    }
     console.log(results);
}

function Back()
{
    window.location = "index.html";
}