img = "";
status = "";

function preload()
{
    img = loadImage('house.jpg')
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
{
    image(img,0,0,640,420)
    fill("#0000FF");
    text("House",45,25);
    noFill();
    stroke("#0000FF");
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