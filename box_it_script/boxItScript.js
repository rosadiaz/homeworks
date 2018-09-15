const args = process.argv.slice(2);
const numberOfArgs = args.lenght;
console.log(numberOfArgs); // why is this undefined??
let maxWidth = 0;

for (let arg of args) {
    if (arg.length >= maxWidth) {
        maxWidth = arg.length;
    } 
}
console.log('Box width will be ' + maxWidth);

function drawTopLine (width) {
    const topLine = '\u250C'  + '\u2500' + new Array(width).join('\u2500')  + '\u2500'+ '\u2500' + '\u2510'; // draws the top corner, line and corner of the box
    console.log(topLine);
}

function drawBottomLine (width) {
    const bottomLine = '\u2514'  + '\u2500' + new Array(width).join('\u2500')  + '\u2500'+ '\u2500' + '\u2518'; // draws the top corner, line and corner of the box
    console.log(bottomLine);
}

function drawTextLine (width) {
    const textLine = '\u2502' + ' ' + args[0] + ' ' + '\u2502'; // draws row with text from arguments
    console.log(textLine);
}

drawTopLine(maxWidth);
drawTextLine(maxWidth);
drawBottomLine(maxWidth);