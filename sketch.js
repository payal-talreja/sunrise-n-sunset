const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    Engine.update(engine);
    if (backgroundImg)
        background(backgroundImg);
        
        noStroke();
        textSize(35);
        fill("white")
        if(hour>=12){
            text("Time : "+ hour%12 + " PM", 50,100);
           }else if(hour==0){
             text("Time : 12 AM",100,100);
           }else{
            text("Time : "+ hour%12 + " AM", 50,100);
           }
}

async function getBackgroundImg(){
    var api = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var apiType = await api.json();
    var dt = apiType.datetime;
 hour = dt.slice(11,13);
    console.log(hour)
    if (hour >= 04 && hour <= 06){
        debugger;
      bgTime = "sunrise1.png";
    }
    else if (hour >= 06 && hour <= 08){
        debugger;
        bgTime = "sunrise2.png";
    }
    else if (hour >= 08 && hour <= 11){
        debugger;
        bgTime = "sunrise3.png";
    }
    else if (hour >= 11 && hour <= 13){
        debugger;
        bgTime = "sunrise4.png";
    }
    else if (hour >= 13 && hour <= 15){
        debugger;
        bgTime = "sunrise5.png";
    }  else if (hour >= 15 && hour <= 17){
        debugger;
        bgTime = "sunrise6.png";
    }
    else if (hour >= 17  && hour <= 18){
        debugger;
        bgTime = "sunrise7.png";
    }
    else if (hour >= 18 && hour <= 20){
        debugger;
        bgTime = "sunrise8.png";
    }
    else if (hour >= 20 && hour <= 23){
        debugger;
        bgTime = "sunrise9.png";
    }
    else if (hour >= 23 && hour == 0){
        debugger;
        bgTime = "sunset10.png";
    }
    else if (hour == 0 && hour <= 03){
        debugger;
        bgTime = "sunset11.png";
    }
    else{
        debugger;
        bgTime = "sunset12.png";
      }
      backgroundImg = loadImage(bgTime);
    }


