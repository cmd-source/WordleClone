document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    window.alert("Weclome to Conor's Clone of Wordle")

    let guessedWords = [[]]
    let availableSpace = 1;
    let word = "Conor";

    const keys = document.querySelectorAll(".keyboard-row button");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");
            updateGuessedWords(letter)

            if ( letter === "enter") {
                handleSubmit()
                return;
            }
        };
    }

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const CurrentWordArr = getCurrentWordArr()

        if ( CurrentWordArr && CurrentWordArr.length < 5 ) {
            CurrentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(String(availableSpace));

            availableSpace = availableSpace + 1
            availableSpaceEl.textContent = letter;
        }
    }

    function handleSubmit() {
        const currentWordArr = getCurrentWordArr()
        if (currentWordArr.length !==5 ) {
            window.alert("word must be 5 letters")
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