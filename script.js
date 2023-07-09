const container = document.querySelector('.container')
function gridGenerator(x){
    for(let i=1;i<=x;i++){
            for(let j=1;j<=x;j++){
                let n=960/x; //size of each pixel
                const span = document.createElement('span')
                span.setAttribute('style','vertical-align:top;display:inline-block;border:1px solid black;')
                span.className = 'allspans'
                span.style.width=n+"px";
                span.style.height=n+"px";
                // span.setAttribute('class','trail')
                span.addEventListener('mouseover',function(e){
                    // e.target.style.background='red';
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    e.target.style.backgroundColor = "#" + randomColor;
                });
                //to create hover effect,using JS, also add mouseout event listener.
                container.appendChild(span)
            }
            const br = document.createElement('br')
            container.appendChild(br);
        }
}

function userInput(){
    numInput = parseInt(prompt("Enter a number from 1 to 100"));
    while(numInput<1 || numInput>100){
        numInput = parseInt(prompt("Enter a number from 1 to 100"));
    }
    container.textContent="";
    gridGenerator(numInput);
}
function reset(){
    container.textContent="";
    gridGenerator(16);
}
gridGenerator(16);
