// Your code goes 
document.addEventListener("DOMContentLoaded", function (){
    // select the paragraph by the ID using querySelector
    const selectParagraph = document.querySelector('#text')
    console.log(selectParagraph)
    // change the text of the paragraph
    const changeText = selectParagraph.innerHTML = "This is really cool!"
    console.log(changeText)
    // change the color of the text
    const changeColor = selectParagraph.style.color = "blue"
    console.log(changeColor)
    // change the size of the text
    selectParagraph.style.fontSize = '300px'
})
