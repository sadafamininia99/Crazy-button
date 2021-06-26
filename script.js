//grab every things

const crzaybutton =document.querySelector('.btn-crazy');

//define our function
function goCrazy()
{
    //get a random num 4 left offset
    //get a number for top offset

    const offsetLeft =Math.random();
    const offsetTop =Math.random();

    //test 
    console.log(offsetLeft ,offsetTop);

    //apply those numbers to the button

    crzaybutton.style.top =offsetTop;
    crzaybutton.style.left=offsetLeft;

}


//add event listiner
window.onunload.function();{;
   crzaybutton.addEventListener('mouseenter',goCrazy) 
};
