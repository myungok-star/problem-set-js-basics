/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE

function bottleOfBeer(num) {
    for (var i = num; i > 0; i--) {
        if (num > 1) {
            console.log(num + " bottles of beer on the wall,");
            console.log(num + " bottles of beer!");
            console.log("Take one down and pass it around,");
            if (num - 1 === 1) {
                console.log("one bottle of beer on the wall...");
            } else {
                console.log((num - 1) + " bottles of beer on the wall...");
            }
        } else if (num === 1) {
            console.log(num + " bottles of beer on the wall,");
            console.log(num + " bottles of beer!");
            console.log("Take one down and pass it around,");
            console.log("No more beer on the wall...");
        }

    }
}
bottleOfBeer(num);
