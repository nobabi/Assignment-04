
// function checkDigitsInName(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {  // Check if the character is a number (not NaN).
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkDigitsInName("JohnDoe123")); // Output: true
// console.log(checkDigitsInName("JaneDoe"));    // Output: false



function checkDigitsInName(name)
{


    if(typeof name !== "string" || name.trim() === "")
    {
        return "invalid Input";
    }

for (let i =0; i<name.length; i++)
{
    if(!isNaN(name[i]) && name[i] !==' ')
    {
        return true;
    }
}
   


return false;


}
const name =['!@#']
// console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName(777));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName("Raj123"));