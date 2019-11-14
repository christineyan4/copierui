LEFTMOST = 30
BELOW_BUTTON = 20

function setup() {
  createCanvas(1600, 1600);
  background(200);
  numCopiesInput = createInput('1');
  numCopiesInput.position(420, BELOW_BUTTON + 50);
}

function minus() {
    v = numCopiesInput.value();
    if (v > 1) {
        v--;
        }
    numCopiesInput.value(v);
    }

function plus() {
    v = numCopiesInput.value();
    v++;
    numCopiesInput.value(v);
    }

function goToMoreOptions() {
    window.location = "more_options.html";
    }

function copy1() {
    alert("Copying ...");
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
    moreOptionsButton.mousePressed(goToMoreOptions);

    // NUMBER OF COPIES
    text("NUMBER OF COPIES", 500, 50);
    minusButton = createButton('-');
    minusButton.position(numCopiesInput.x - minusButton.width, BELOW_BUTTON + 50);
    plusButton = createButton('+');
    plusButton.position(numCopiesInput.x + numCopiesInput.width, BELOW_BUTTON + 50);
    minusButton.mousePressed(minus);
    plusButton.mousePressed(plus);

    // COPY
    copyButton = createButton('COPY');
    copyButton.position(400, 300);
    copyButton.mousePressed(copy1);
}
