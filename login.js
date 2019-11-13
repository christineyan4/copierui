let button = [];
let i,j,k;
let pwd = ['_','_','_','_'];
let pnt = 0;

function setup() {
  createCanvas(1600, 1600);
  background(200);

}

function draw() {

  fill(255);

  for (i = 0; i < 3; i++) {
      for (var o = 80; o <= 320; o = o + 80) {
        j = ((o/80)-1)*3 + i;
        //                               x position
        button[j] = new Button(i * 80 + 500, o, 60, j + 1);
        textSize(24);
        textAlign(CENTER, CENTER);
        if (mouseIsPressed) {
          button[j].mouseIn();

        } //This is not the ideal function I want.


        button[j].show();
        if(j < 9){
          text(j+1, i * 80 + 500, o);
        }
        if(j == 9){
          text(char(8592), i * 80 + 500, o);
        }
        if(j == 10){
          text(0, i * 80 + 500, o);
        }
        if(j == 11){
          text("clr", i * 80 + 500, o);
        }

      }
    }

    textSize(24);
    textAlign(CENTER, CENTER);
    for(k = 0; k < 4; k ++){
      //text(pwd[i], 150 + (50 * i), 100);
      fill(255);
      stroke(0);
      rect(100 + (70 * k), 100, 55, 55);
      fill(0);
      text(pwd[k], k * 70 + 100, 100);
    }
    //mouseClicked();
    //button[j].mouseClicked();
    if(pwd[3] == '*')
    {
      //window.location.href = '/copy.html/';
    }
}

function mouseClicked() {
  edit_pwd(true);
}


class Button {
  constructor(x, y, h, num) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.num = num;
    this.colf = color(131, 194, 213);
    this.colb = color(93, 143, 158);
  }

  show() {
    rectMode(CENTER);
    fill(this.colb);
    noStroke();
    rect(this.x, this.y, this.h, this.h);
    fill(this.colf);
    //rect(this.x, this.y, this.h - 8, this.h - 8);
  }

  mouseIn() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 30) {
      this.colf = color(155, 171, 122);
      this.colb = color(220, 246, 165);
    }
  }

  /*mouseClicked(){
    //let d = dist(this.x, this.y, mouseX, mouseY);
    //if (d < 30) {
      if(j < 9 || (j == 10)){
        edit_pwd(true);
      }
      if(j == 9){
        edit_pwd(false);
      }
      if(j == 11){
        clr();
      }
    //}
  }
  */

}



function edit_pwd(flag) {
  if(flag){
    pwd[pnt] = '*';
    pnt ++;
  }
  else{
    pwd[pnt] = '_';
    pnt --;
  }
}

function clr() {
  pwd = ['_','_','_','_'];
}
