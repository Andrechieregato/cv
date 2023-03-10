let balloon = document.querySelector('.balloon');
let colors = ["red","green","blue"];
let i = 0;
balloon.style.width = "200px";
balloon.style.height = "200px";
let dimensione = 200;
balloon.addEventListener('click', mouseClick);

function mouseClick(e){

    if(balloon.style.width <= "420px")
    {
        if(i >= 2)
            i = -1;

        balloon.style.width =`${dimensione + 10}px`;
        balloon.style.height =`${dimensione + 10}px`;
        dimensione = dimensione + 10;
        balloon.style.backgroundColor = `${colors[i + 1]}`;
        i++;
    }
    else
    {
        balloon.style.width = `200px`
        balloon.style.height = `200px`
        balloon.style.backgroundColor = colors[0];
        dimensione = 200;
        i = 0;
    }
    console.log(dimensione);
}

function mouseOut()
{
    if(balloon.style.width <= "200px")
        i = 0;
    else
    {
        if(i == 0)
            i = 3;  //1 verde
                    //2 blue
        
        balloon.style.width =`${dimensione - 5}px`;
        balloon.style.height =`${dimensione - 5}px`;
        dimensione = dimensione - 5;
        balloon.style.backgroundColor = `${colors[i - 1]}`;
        i--;
    }
   console.log(dimensione);
}

  

   
