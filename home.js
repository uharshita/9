img = "";
status = "";

function preload()
{
    img = loadImage('home theatre.jpg')
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
    fill("#FE8DF0");
    text("HOME THEATRE",45,25);
    noFill();
    stroke("#FE8DF0");
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