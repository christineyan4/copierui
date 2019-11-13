LEFTMOST = 30
BELOW_BUTTON = 20

function setup() {
  createCanvas(1600, 1600);
  background(200);

}

function draw() {
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    
    // SCAN TYPE
    text("SCAN TYPE", LEFTMOST + 100, 50);
    scanSingleButton = createButton('Single-sided');
    scanSingleButton.position(LEFTMOST, BELOW_BUTTON + 50);
    scanDoubleButton = createButton('Double-sided');
    scanDoubleButton.position(LEFTMOST + 100, BELOW_BUTTON + 50);
    
    // PRINT TYPE
    text("PRINT TYPE", LEFTMOST + 100, 150);
    printSingleButton = createButton('Single-sided');
    printSingleButton.position(LEFTMOST, BELOW_BUTTON + 150);
    printDoubleButton = createButton('Double-sided');
    printDoubleButton.position(LEFTMOST + 100, BELOW_BUTTON + 150);

    // MORE OPTIONS
    moreOptionsButton = createButton('MORE OPTIONS');
    moreOptionsButton.position(LEFTMOST, 300);

    // NUMBER OF COPIES
    text("NUMBER OF COPIES", 500, 50);
    minusButton = createButton('-');
    minusButton.position(400, BELOW_BUTTON + 50);
    numCopiesInput = createInput();
    numCopiesInput.position(430, BELOW_BUTTON + 50);
    plusButton = createButton('+');
    plusButton.position(580, BELOW_BUTTON + 50);

    // COPY
    copyButton = createButton('COPY');
    copyButton.position(400, 300)

}
