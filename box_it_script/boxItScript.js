const args = process.argv.slice(2);
// const numberOfArgs = args.lenght;
// console.log(numberOfArgs); // why is this undefined??
let maxWidth = 0;
// console.log(args[0].length);

for (let arg of args) {
    if (arg.length >= maxWidth) {
        maxWidth = arg.length;
    } 
}
// console.log('Box width will be ' + maxWidth);

function drawTopLine (width) {
    const topLine = '\u250C'  + '\u2500' + new Array(width).join('\u2500')  + '\u2500'+ '\u2500' + '\u2510'; // draws the top corner, line and corner of the box
    console.log(topLine);
}

function drawBottomLine (width) {
    const bottomLine = '\u2514'  + '\u2500' + new Array(width).join('\u2500')  + '\u2500'+ '\u2500' + '\u2518'; // draws the top corner, line and corner of the box
    console.log(bottomLine);
}

function drawTextLine (width, text) {
    const space = " ";
    const textLine = '\u2502' + " "  + text + space.repeat(width - text.length + 1) + '\u2502'; // draws row with text from arguments
    console.log(textLine);
}

function drawMiddleLine (width) {
    const middleLine = '\u251C\u2500' + new Array(width).join('\u2500') + '\u2500\u2500\u2524';
    console.log(middleLine);
}

function drawBox(width, args) {
    drawTopLine(width);
    // console.log(args.length);
    for (let i=0; i<args.length; i++) {
        drawTextLine(width, args[i]);
        if (i<args.length-1){
            drawMiddleLine(width);
        }    
    }
    drawBottomLine(width);
}

drawBox(maxWidth, args);
// console.log(args);