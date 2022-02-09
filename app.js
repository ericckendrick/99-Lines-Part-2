
document.addEventListener("DOMContentLoaded", singEvent);

function singEvent() {

        let singBtn = document.createElement('button');
        let singBtnText = document.createTextNode('Sing!');
        singBtn.append(singBtnText);
        document.body.appendChild(singBtn);
        
        function onClickSing() {
        // Create an array of five friends
        let friends = ["Brent", "Haley", "Ben", "Becca", "Eric"];

        // Assign variable with each name and loop through song. 
        for (let i = 0; i < friends.length; i++) {
            //---Create div with class 'friend' for each friend----//
            let friendDiv = document.createElement('div');
            friendDiv.className = 'friend';
            document.body.appendChild(friendDiv);
            //------h3 tag with friend's name-------//
            let friendHead = document.createElement('h3');
            friendHead.innerText = friends[i] + ": ";
            //---Append h tag to friend div ------//
            let friendPara = document.getElementsByClassName('friend');
            friendPara[i].appendChild(friendHead);

            //----Para element to contain each lyric line----//
            
                for (let j = 99; j > 0; j--) {
                    var lyric = document.createElement('p');
            
                    if (j > 2) {
                        lyric.innerText = (
                        j +
                            " " +
                            "lines of code in the file," +
                            " " +
                            j +
                            " " +
                            "lines of code; " + friends[i] + " strikes one out, clears it all out," +
                            " " +
                            (j - 1) +
                            " " +
                            "lines of code in the file."
                        );
                    } else if (j === 2) {
                        lyric.innerText = (
                        j +
                            " " +
                            "lines of code in the file," +
                            " " +
                            j +
                            " " +
                            "lines of code; " + friends[i] + " strikes one out, clears it all out," +
                            " " +
                            (j - 1) +
                            " " +
                            "line of code in the file."
                        );
                    } else {
                        lyric.innerText = (
                        j +
                            " " +
                            "line of code in the file," +
                            " " +
                            j +
                            " " +
                            "line of code; " + friends[i] + " strikes it out, clears it all out, and no more lines of code in the file!"
                        );
                    };
                    friendPara[i].appendChild(lyric);
                };
            }
        }
        singBtn.addEventListener('click', onClickSing);
}
