// Create an array of five friends
let friends = ["Brent", "Haley", "Ben", "Becca", "Eric"];

// Assign variable with each name and loop through song. 

for (let i = 0; i < friends.length; i++) {
    // Create var for each individual friend
    let friend = friends[i];
    console.log(friend +": ")
    

        for (let j = 99; j > 0; j--) {
            if (j > 2) {
                console.log(
                j +
                    " " +
                    "lines of code in the file," +
                    " " +
                    j +
                    " " +
                    "lines of code; " + friend + " strikes one out, clears it all out," +
                    " " +
                    (j - 1) +
                    " " +
                    "lines of code in the file."
                );
            } else if (j === 2) {
                console.log(
                j +
                    " " +
                    "lines of code in the file," +
                    " " +
                    j +
                    " " +
                    "lines of code; " + friend + " strikes one out, clears it all out," +
                    " " +
                    (j - 1) +
                    " " +
                    "line of code in the file."
                );
            } else {
                console.log(
                j +
                    " " +
                    "line of code in the file," +
                    " " +
                    j +
                    " " +
                    "line of code; " + friend + " strikes it out, clears it all out, and no more lines of code in the file!"
                );
            };
        };
};
