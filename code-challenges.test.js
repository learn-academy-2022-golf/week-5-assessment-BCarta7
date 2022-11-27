// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeMaker", () => {
    it('takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
        const secretCodeWord1 = "Lackadaisical"
        const output1 = "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        const output2 = "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        const output3 = "3cc3ntr1c"
      expect(codeMaker(secretCodeWord1)).toEqual(output1)
      expect(codeMaker(secretCodeWord2)).toEqual(output2)
      expect(codeMaker(secretCodeWord3)).toEqual(output3)
    })
  })  
  //    ReferenceError: codeMaker is not defined
  //    Pass

// b) Create the function that makes the test pass.
//create function named codeMaker
//pass function a parameter of string
// within function, return line of string parameter changed to array with .split built in method, iterated through by .map higher order function, and returned to string with .join built in method.
// within .map function, create anonymous function with conditional statements using .toLowerCase on values to adjust for case sensitivity. Use conditionals to return changes of the values as required, else return the original value.

const codeMaker = (string) => {
    return string.split("").map(value => {
        if (value.toLowerCase() === "a") {
            return value = 4
        } else if (value.toLowerCase() === "e") {
            return value = 3
        } else if (value.toLowerCase() === "i") {
            return value = 1
        } else if (value.toLowerCase() === "o") {
            return value = 0
        }  else {
            return value
        }
    }).join("")
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letterFilter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        const output1 = ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        const output2 = ["Cherry", "Blueberry", "Peach"]
      expect(letterFilter(fruitArray, letterA)).toEqual(output1)
      expect(letterFilter(fruitArray, letterE)).toEqual(output2)
    })
  })  
  //    ReferenceError: letterFilter is not defined
  //    Pass

// b) Create the function that makes the test pass.
// create function named letterFilter
// pass function two parameters, array and letter
// return line of array using .filter  higher order function.
// in .filter argument, pass anonymous function returning the value adjusted with .loLowerCase built in method to adjust for casing. Use .includes built in method with an argument of the letter parameter to return only elements that contain given letter.

const letterFilter = (array, letter) => {
    return array.filter(value => {
       return value.toLowerCase().includes(letter)
    })
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("winCheck", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true

      expect(winCheck(hand1)).toEqual(true)
      expect(winCheck(hand2)).toEqual(false)
      expect(winCheck(hand3)).toEqual(false)
      expect(winCheck(hand4)).toEqual(true)
    })
  })  
  //    ReferenceError: winCheck is not defined
  //    Pass

// b) Create the function that makes the test pass.
//create function called winCheck
//pass function parameter of array
//within function, use .sort built in method with (a, b) => a - b syntax in argument to organize numbers in array
//create for loop limited to array.length
//within for loop, create conditional statement. IF index 0 through 2 are the same, and index 3 and 4 are same, return true. ELSE IF index 0 and 1 are the same, and index 2 through 4 are the same, return true. In any other case, return false.

const winCheck = (array) => {
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (array[0] === array[2] && array[3] === array[4]) {
            return true
        } else if (array[0] === array[1] && array[2] === array[4]) {
            return true
        } else {
            return false
        }
    }
}
