console.log("PSBB");

function getNumberOfBus(numFam) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:
      "Input the number of members in the family (separated by a space): ",
  });
  rl.prompt();

  rl.on("line", (word) => {
    var numbers = word.split(" ");
    var numberOfFamily = numFam;

    if (numberOfFamily !== numbers.length) {
      console.log("Input must be equal with count of family");
      rl.close();
    } else {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
      }
      var numberOfBus = Math.ceil(sum / 4);
      console.log("Minimum bus required is : " + numberOfBus);
      rl.close();
    }
  });
}

getNumberOfBus(8);
