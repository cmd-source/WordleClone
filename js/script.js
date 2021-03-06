document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    window.alert("Weclome to Conor's Clone of Wordle\n Try and guess the 5 letter word\n\n The delete key doesnt work but our dedicated software enginners are hard at work")

    let guessedWords = [[]]
    let availableSpace = 1;
    let word = "conor";
    let guessedWordCount = 0;

    const keys = document.querySelectorAll(".keyboard-row button");


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

    function getTitleColor(letter, index) {
        const isCorrectLetter = word.includes(letter)

        if(!isCorrectLetter) {
            return "rgb(58,58,60)"
        }

        const letterInThatPosition = word.charAt(index)
        const isCorrectPosition = letter === letterInThatPosition

        if (isCorrectPosition) {
            return "rgb(83,141,78)"
        } else {
            return "rgb(181, 158, 59)";
        }
    }


    function handleSubmit() {
        const currentWordArr = getCurrentWordArr()
        if (currentWordArr.length !==5 ) {
            window.alert("word must be 5 letters")
        }
        

        const currentWord = currentWordArr.join("")
        const firstLetterId = guessedWordCount * 5 + 1;
        const interval = 200
        currentWordArr.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = getTitleColor(letter, index)
                const letterId = firstLetterId + index;
                const letterEl = document.getElementById(letterId)
                letterEl.classList.add("animate___flipInX")
                letterEl.style = `background-color:${tileColor}; border-color: ${tileColor}`
            }, interval * index)
        })

        guessedWordCount += 1

        if ( currentWord === word) {
            $( function() {
                $( "#overlay" ).fadeIn();
                $(".firework").fadeIn();
              }, 2000 );
            window.alert("Congradulations you won a Conor")
        }

        if(guessedWords.length === 6) {
            window.alert(`Sorry the word was ${word}`)
        }

        guessedWords.push([])

    }

    function createSquares() {
        const gameBoard = document.getElementById("board")

        for (let index = 0; index < 30; index++) {

            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index + 1);
            square.classList.add("animate__animated")
            gameBoard.appendChild(square);
        }
    }

    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();
    
        guessedWords[guessedWords.length - 1] = currentWordArr;
    
        const lastLetterEl = document.getElementById(String(availableSpace - 1));
    
        lastLetterEl.textContent = "";
        availableSpace = availableSpace - 1;
      }


    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");
            updateGuessedWords(letter)

            if ( letter === "enter") {
                handleSubmit()
                return;
            }

            if (letter === "del") {
                handleDeleteLetter();
                return;
            }
        };
    }

    $( function() {
        $("#overlay" ).hide();
        $(".firework").hide();
      } );



      new TimelineMax({
        repeat: -1
      })
      .set('#Pre-approval-letter path',{svgOrigin: "20px 20px"})
      .fromTo('#Pre-approval-letter path', 3, {
        scale:0
      },{
        scale:1,
        opacity:0,
        ease: Power2.easeOut
      })
});