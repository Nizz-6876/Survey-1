var canvas;
var database;
var form,people,peopleCount=0;


function setup(){
  canvas = createCanvas(600,600);
  database = firebase.database();

  form = new Form();
  form.display();

  people = new People();
 
}


function draw(){

}
