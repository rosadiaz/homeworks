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

