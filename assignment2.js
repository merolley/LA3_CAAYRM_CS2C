// creating a program that prompts the user to input the max limit of the loops
let num = parseInt(prompt("Enter the limit of the double loop :"));
//outer and inner loops
for (let i = 0; i <= num; i++) {
    for (let t = 0; t <= num; t++) {
        //the sum of the current loop counter
        let addedValue = i + t;
        
        //the current loop positions and the sum
        console.log(`[${i}] [${t}] Sum is ${addedValue}`);
    }
}
