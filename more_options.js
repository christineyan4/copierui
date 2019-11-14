LEFTMOST = 30
BELOW_BUTTON = 30

fillColor = 255;
brightnessColor = 0;
paperSourceAColor = 100;
paperSourceBColor = fillColor;
paperSourceCColor = fillColor;
separatorPageOffColor = 100;
separatorPageOnColor = fillColor;
separatorPageOn = false;
separatorPageSourceAColor = fillColor;
separatorPageSourceBColor = fillColor;
separatorPageSourceCColor = fillColor;

function setup() {
  createCanvas(1600, 1600);
  background(200);
  slider = createSlider(0, 255, 0);
  slider.position(LEFTMOST + 300, 50);
  slider.style('width', '80px');
}

function paperSourceToggle() {
    paperSourceAColor = fillColor;
    paperSourceBColor = fillColor;
    paperSourceCColor = fillColor;
    paperSource = this.name;
    switch (this.name) {
        case 'A':
            paperSourceAColor = 100;
            break;
        case 'B':
            paperSourceBColor = 100;
            break;
        case 'C':
            paperSourceCColor = 100;
            break;
        }
    }

function separatorPageToggle() {
    separatorPageOffColorCopy = separatorPageOffColor;
    separatorPageOffColor = separatorPageOnColor;
    separatorPageOnColor = separatorPageOffColorCopy;
    separatorPageOn = !separatorPageOn;

    if (separatorPageOn) {
        separatorPageSourceAColor = 100;
        }
    else { 
        separatorPageSourceAColor = fillColor;
        separatorPageSourceBColor = fillColor;
        separatorPageSourceCColor = fillColor;
        }
    }

function separatorPageSourceToggle() {
    separatorPageSourceAColor = fillColor;
    separatorPageSourceBColor = fillColor;
    separatorPageSourceCColor = fillColor;
    separatorPageSource = this.name;
    switch (this.name) {
        case 'A':
            separatorPageSourceAColor = 100;
            break;
        case 'B':
            separatorPageSourceBColor = 100;
            break;
        case 'C':
            separatorPageSourceCColor = 100;
            break;
        }
    }

function cancel() {
    alert("Cancelling ...");
    window.location = "copy.html";
    }

function save1() {
    alert("Saving ...");
    window.location = "copy.html";
    }

function draw() {
    fill(fillColor);
    textSize(24);
    textAlign(LEFT, TOP);

    brightnessColor = slider.value();
    //background(fillColor);

    
    // BRIGHTNESS
    text("BRIGHTNESS", LEFTMOST, 50);
    fill(brightnessColor);
    rect(LEFTMOST + 200, 53, 80, 15);

    fill(fillColor);

    // PAPER SOURCE
    text("PAPER SOURCE", LEFTMOST, 150);
    paperSourceAButton = createButton('A');
    paperSourceAButton.position(LEFTMOST, BELOW_BUTTON + 150);
    fill(paperSourceAColor);
    rect(paperSourceAButton.x - 1, paperSourceAButton.y - 1, paperSourceAButton.width + 2, paperSourceAButton.height + 2);
    paperSourceAButton.name = 'A';
    paperSourceAButton.mousePressed(paperSourceToggle);
    paperSourceBButton = createButton('B');
    paperSourceBButton.position(LEFTMOST + 100, BELOW_BUTTON + 150);
    fill(paperSourceBColor);
    rect(paperSourceBButton.x - 1, paperSourceBButton.y - 1, paperSourceBButton.width + 2, paperSourceBButton.height + 2);
    paperSourceBButton.name = 'B';
    paperSourceBButton.mousePressed(paperSourceToggle);
    paperSourceCButton = createButton('C');
    paperSourceCButton.position(LEFTMOST + 200, BELOW_BUTTON + 150);
    fill(paperSourceCColor);
    rect(paperSourceCButton.x - 1, paperSourceCButton.y - 1, paperSourceCButton.width + 2, paperSourceCButton.height + 2);
    paperSourceCButton.name = 'C';
    paperSourceCButton.mousePressed(paperSourceToggle);

    fill(fillColor);

    // SEPARATOR PAGE
    text("SEPARATOR PAGE", LEFTMOST, 250);
    separatorPageOffButton = createButton('OFF');
    separatorPageOffButton.position(LEFTMOST, BELOW_BUTTON + 250);
    fill(separatorPageOffColor);
    rect(separatorPageOffButton.x - 1, separatorPageOffButton.y - 1, separatorPageOffButton.width + 2, separatorPageOffButton.height + 2);
    separatorPageOffButton.mousePressed(separatorPageToggle);
    separatorPageOnButton = createButton('ON');
    separatorPageOnButton.position(LEFTMOST + 100, BELOW_BUTTON + 250);
    fill(separatorPageOnColor);
    rect(separatorPageOnButton.x - 1, separatorPageOnButton.y - 1, separatorPageOnButton.width + 2, separatorPageOnButton.height + 2);
    separatorPageOnButton.mousePressed(separatorPageToggle);

    fill(fillColor);

    // SEPARATOR PAGE SOURCE
    text("SEPARATOR PAGE SOURCE", LEFTMOST, 350);
    separatorPageSourceAButton = createButton('A');
    separatorPageSourceAButton.position(LEFTMOST, BELOW_BUTTON + 350);
    fill(separatorPageSourceAColor);
    rect(separatorPageSourceAButton.x - 1, separatorPageSourceAButton.y - 1, separatorPageSourceAButton.width + 2, separatorPageSourceAButton.height + 2);
    separatorPageSourceAButton.name = 'A';
    separatorPageSourceAButton.mousePressed(separatorPageSourceToggle);
    separatorPageSourceBButton = createButton('B');
    separatorPageSourceBButton.position(LEFTMOST + 100, BELOW_BUTTON + 350);
    fill(separatorPageSourceBColor);
    rect(separatorPageSourceBButton.x - 1, separatorPageSourceBButton.y - 1, separatorPageSourceBButton.width + 2, separatorPageSourceBButton.height + 2);
    separatorPageSourceBButton.name = 'B';
    separatorPageSourceBButton.mousePressed(separatorPageSourceToggle);
    separatorPageSourceCButton = createButton('C');
    separatorPageSourceCButton.position(LEFTMOST + 200, BELOW_BUTTON + 350);
    fill(separatorPageSourceCColor);
    rect(separatorPageSourceCButton.x - 1, separatorPageSourceCButton.y - 1, separatorPageSourceCButton.width + 2, separatorPageSourceCButton.height + 2);
    separatorPageSourceCButton.name = 'C';
    separatorPageSourceCButton.mousePressed(separatorPageSourceToggle);

    fill(fillColor);

    // CANCEL
    cancelButton = createButton('CANCEL');
    cancelButton.position(LEFTMOST, 450);
    cancelButton.mousePressed(cancel);

    // SAVE
    saveButton = createButton('SAVE');
    saveButton.position(cancelButton.x + 300, 450);
    saveButton.mousePressed(save1);
}
