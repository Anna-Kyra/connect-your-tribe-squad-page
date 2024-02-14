
addEventListener('keydown', keydownHandler)

function keydownHandler(event) {
    const activeCharacter = document.activeElement.href?.split('/').at(-1)
    console.log(activeCharacter)

    console.log(document.activeElement.parentElement)
    if(document.activeElement.parentElement.tagName === 'ARTICLE'){
        console.log(document.activeElement.parentElement.children[1].innerHTML)
    }
}