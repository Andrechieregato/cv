let operators = document.querySelectorAll('.button-operators');
let submitButton = document.querySelector('.submit-button');


operators.forEach((operator)  =>{

    operator.addEventListener('click', (evento) =>{

        let inputOne = parseInt(document.querySelector('.input-1').value);
        let inputTwo = parseInt(document.querySelector('.input-2').value);
        let operatorValue = evento.target.value;
        getResult(inputOne, inputTwo, operatorValue);
    })
})

function getResult(inputOne, inputTwo, operatorValue)
{
    submitButton.addEventListener('click', () => {
        if(inputOne < 0 || inputTwo < 0)
        {
            alert("Error :(");
            return;
        }
        if(inputTwo == 0 && (operatorValue == '%' | operatorValue == '/'))
        {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
            }  
               
        let result = eval(inputOne + operatorValue + inputTwo); 
        alert(result);
        console.log(result);
      
    })
}

function getAlert()
{
    alert("Please, use me");
}

setInterval(function(){
    getAlert()
}, 30000)