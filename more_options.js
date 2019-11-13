LEFTMOST = 0
BELOW_BUTTON = 20

function setup() {
  createCanvas(1600, 1600);
  background(200);

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
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    
    // BRIGHTNESS
    text("BRIGHTNESS", LEFTMOST + 100, 50);
    
    // PAPER SOURCE
    text("PAPER SOURCE", LEFTMOST + 100, 150);
    paperSourceAButton = createButton('A');
    paperSourceAButton.position(LEFTMOST, BELOW_BUTTON + 150);
    paperSourceBButton = createButton('B');
    paperSourceBButton.position(LEFTMOST + 100, BELOW_BUTTON + 150);
    paperSourceCButton = createButton('C');
    paperSourceCButton.position(LEFTMOST + 200, BELOW_BUTTON + 150);

    // SEPARATOR PAGE
    text("SEPARATOR PAGE", LEFTMOST + 100, 250);
    separatorPageOffButton = createButton('OFF');
    separatorPageOffButton.position(LEFTMOST, BELOW_BUTTON + 150);
    separatorPageOnButton = createButton('ON');
    separatorPageOnButton.position(LEFTMOST + 100, BELOW_BUTTON + 150);

    // SEPARATOR PAGE SOURCE
    text("SEPARATOR PAGE SOURCE", LEFTMOST + 100, 350);
    separatorPageSourceAButton = createButton('A');
    separatorPageSourceAButton.position(LEFTMOST, BELOW_BUTTON + 350);
    separatorPageSourceBButton = createButton('B');
    separatorPageSourceBButton.position(LEFTMOST + 100, BELOW_BUTTON + 350);
    separatorPageSourceCButton = createButton('C');
    separatorPageSourceCButton.position(LEFTMOST + 200, BELOW_BUTTON + 350);

    // CANCEL
    cancelButton = createButton('CANCEL');
    cancelButton.position(LEFTMOST, 450);
    cancelButton.mousePressed(cancel);

    // SAVE
    saveButton = createButton('SAVE');
    saveButton.position(LEFTMOST + 370, 450);
    saveButton.mousePressed(save1);
}
