LEFTMOST = 30
BELOW_BUTTON = 40

fillColor = 255;
scanSingleColor = 100;
scanDoubleColor = fillColor;
printSingleColor = 100;
printDoubleColor = fillColor;

function setup() {
  createCanvas(1600, 1600);
  background(200);
  
  numCopiesInput = createInput('1');
  numCopiesInput.position(420, BELOW_BUTTON + 50);
  
}

function scanToggle() {
    scanSingleColorCopy = scanSingleColor;
    scanSingleColor = scanDoubleColor;
    scanDoubleColor = scanSingleColorCopy;
    }

function printToggle() {
    printSingleColorCopy = printSingleColor;
    printSingleColor = printDoubleColor;
    printDoubleColor = printSingleColorCopy;
    }

function minus() {
    v = numCopiesInput.value();
    v = Number(v);
    if (v > 1) {
        v--;
        }
    v = v.toString();
    numCopiesInput.value(v);
    }

function plus() {
    v = numCopiesInput.value();
    v = Number(v);
    v++;
    v = v.toString();
    numCopiesInput.value(v);
    }

function goToMoreOptions() {
    window.location = "more_options.html";
    }

function enter() {
    code = this.name;
    v = numCopiesInput.value();
    v = v.toString();
    switch (code) {
        case 10:
            if (v != '1') {
                l = v.length;
                v = v.substr(0, l - 1);
            }
            break;
        case 11:
            v = v + '0';
            break;
        case 12:
            v = 1;
            break;
        default:
            if (v == '1') {
                v = code;
            }
            else {
                v = v + code;
            }
        }
        numCopiesInput.value(v);
    }

function copy1() {
    alert("Copying ...");
    }

function draw() {
    fill(fillColor);
    textSize(24);
    textAlign(CENTER, CENTER);

    // SCAN TYPE
    text("SCAN TYPE", LEFTMOST + 100, 50);
    scanSingleButton = createButton('Single-sided');
    scanSingleButton.position(LEFTMOST, BELOW_BUTTON + 50);
    fill(scanSingleColor);
    rect(scanSingleButton.x - 1, scanSingleButton.y - 1, scanSingleButton.width + 2, scanSingleButton.height + 2);
    scanSingleButton.mousePressed(scanToggle);
    scanDoubleButton = createButton('Double-sided');
    scanDoubleButton.position(LEFTMOST + 100, BELOW_BUTTON + 50);
    fill(scanDoubleColor);
    rect(scanDoubleButton.x - 1, scanDoubleButton.y - 1, scanDoubleButton.width + 2, scanDoubleButton.height + 2)
    scanDoubleButton.mousePressed(scanToggle);

    fill(fillColor);

    // PRINT TYPE
    text("PRINT TYPE", LEFTMOST + 100, 150);
    printSingleButton = createButton('Single-sided');
    printSingleButton.position(LEFTMOST, BELOW_BUTTON + 150);
    fill(printSingleColor);
    rect(printSingleButton.x - 1, printSingleButton.y - 1, printSingleButton.width + 2, printSingleButton.height + 2);
    printSingleButton.mousePressed(printToggle);
    printDoubleButton = createButton('Double-sided');
    printDoubleButton.position(LEFTMOST + 100, BELOW_BUTTON + 150);
    fill(printDoubleColor);
    rect(printDoubleButton.x - 1, printDoubleButton.y - 1, printDoubleButton.width + 2, printDoubleButton.height + 2)
    printDoubleButton.mousePressed(printToggle);

    fill(fillColor);

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

    // KEYPAD
    keypad = [];
    for (let i = 1; i < 13; i++) {
        column = (i - 1) % 3;
        row = Math.floor((i - 1) / 3);
        switch (i) {
            case 10:
                keypad[i] = createButton(char(8592));
                x = keypad[i-2].x - keypad[i].width; 
                break;
            case 11:
                keypad[i] = createButton('0');
                x = numCopiesInput.x + numCopiesInput.width/2 - 3*keypad[i].width/2 + column * keypad[i].width;
                break;
            case 12:
                keypad[i] = createButton('CLR');
                x = keypad[i-1].x + keypad[i-1].width;
                break;
            default: 
                keypad[i] = createButton(i.toString());
                x = numCopiesInput.x + numCopiesInput.width/2 - 3*keypad[i].width/2 + column * keypad[i].width;
        }
        y = numCopiesInput.y + BELOW_BUTTON + keypad[i].height * row;
        keypad[i].position(x, y);
        keypad[i].name = i;
        keypad[i].mousePressed(enter);
        }

    // COPY
    copyButton = createButton('COPY');
    copyButton.position(numCopiesInput.x + numCopiesInput.width/2 - copyButton.width/2, moreOptionsButton.y);
    copyButton.mousePressed(copy1);
}
