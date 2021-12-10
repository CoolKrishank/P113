function preload()
{

}
function setup()
{
  canvas = createCanvas(700 , 500);
  canvas.position(500 , 370);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";
}
function draw()
{
    
    rect(100, 30, 500, 55);
    rect(100, 410, 500, 55);
    rect(35, 30, 55, 400);
    rect(600, 30, 55, 400);
    circle(60, 60, 100);
    circle(630, 60, 100);
    circle(630, 440, 100);
    circle(60, 440, 100);
    fill(255,0,0);
    image(video,160,110,400,300);
    tint(tint_color);
}
function take_snapshot()
{
    save('studentname.png');
}
function filter_color()
{
    tint_color = document.getElementById("colour_name").value;
}