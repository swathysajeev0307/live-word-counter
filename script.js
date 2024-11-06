const inputTextArea = document.getElementById("input-textarea");
const characCount = document.getElementById("charac-count");
const wordsCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", ()=>{

    // Character Counts
    characCount.textContent = inputTextArea.value.length;

    // Words Counts

    const txt = inputTextArea.value.trim();
    const wordArray = txt.split(/\s+/);
    
    let wordCountValue = 0;
    for(let i=0; i < wordArray.length; i++){
        if(wordArray[i] != ""){
            wordCountValue++;
        }
    }
    wordsCount.textContent = wordCountValue;


});