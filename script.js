/*COPYRIGHT ©️ 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or(at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.*/

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
