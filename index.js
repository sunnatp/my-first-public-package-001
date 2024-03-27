// const reverseStr = (str) => {
//     let result = "";
//     for (const letter of str) {
//         result = letter + result
//     }

//     return result
// }

// module.exports = reverseStr;



const axios = require("axios");

const getData = async() => {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users")

        return res;
    } catch (error) {
        console.log(error);
    }
}
module.exports = getData;