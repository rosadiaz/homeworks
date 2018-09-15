const words = process.argv.slice(2);
let maxWidth = 0
// Drawing building blocks
const topRightCorner = '\u250C\u2500';
const topLeftCorner = '\u2500\u2510';
const horizontalDash = '\u2500';
const bar = '\u2502';
const openTee = '\u251C\u2500';
const closeTee ='\u2500\u2500\u2524';
const bottomLeftCorner = '\u2514\u2500';
const bottomRightCorner = '\u2500\u2518';

for (let word of words) {
    if (word.length >= maxWidth) {
        maxWidth = word.length;
    } 
}

function drawTopLine (width) {
    return `${topRightCorner}${makeDashLine(width + 1)}${topLeftCorner}`;
}

function drawBottomLine (width) {
    return `${bottomLeftCorner}${makeDashLine(width + 1)}${bottomRightCorner}`;
}

function drawTextLine (width, text) {
    const space = " ";
    return `${bar} ${text}${space.repeat(width - text.length + 1)}${bar}`;
}

function drawMiddleLine (width) {
    return `${openTee}${makeDashLine(width)}${closeTee}`;
}

function makeDashLine(width) {
    return new Array(width).join(horizontalDash);
}

function drawBox(width, words) {
    console.log(drawTopLine(width));
    for (let i = 0; i < words.length; i++) {
        console.log(drawTextLine(width, words[i]));
        if (i < words.length-1){
            console.log(drawMiddleLine(width));
        }
    }
    console.log(drawBottomLine(width));
}

drawBox(maxWidth, words);
