document.addEventListener("DOMContentLoaded", () => {
    createSquares();

    let guessedWords = [[]]
    let availableSpace = 1;

    const keys = document.querySelectorAll(".keyboard-row button");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");
            updateGuessedWords(letter)
        };
    }

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length
        return guessedWords[numberOfGuessedWords - 1]
    }

    function updateGuessedWords(letter) {
        const CurrentWordArr = getCurrentWordArr()

        if ( CurrentWordArr && CurrentWordArr.length < 5 ) {
            CurrentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(String(letter));
            availableSpace = availableSpace + 1

            availableSpaceEl.textConent = letter;
        }
    }


    function createSquares() {
        const gameBoard = document.getElementById("board")

        for (let index = 0; index < 30; index++) {

            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }




});