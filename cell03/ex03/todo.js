let submitButton = document.querySelector('.submit-button');
let divMain = document.querySelector('#ft_list');
let divItems = document.querySelectorAll(".item");
let divItem = document.querySelector(".item");
let arr = [];
let i = 0;

submitButton.addEventListener('click', () =>
{
    var newItem = prompt("Create a new item");
    arr.push(newItem);
    getNewItem(arr[i]);
})

function getNewItem(elemento)
{
  if(arr.length == 0)
    return;
    let divList = document.createElement("div");
    divMain.appendChild(divList);
    divMain.insertBefore(divList, divMain.children[0]);
    divList.setAttribute("id", `item${i}`)
    divList.setAttribute("class", "item"); 
    setCookie(`item${i}`, elemento,  365); 
    divList.innerHTML = elemento;
    i++;
    divList.addEventListener('click', () =>
    {
      var confirmation = confirm("sei sicuro");
      if(confirmation == false)
          return;
      divList.remove();
      setCookie(`item${i}`, divList,  -1); 
    })

}

function cookie()
{
  i = 0;
  while(getCookie(`item${i}`))
  {
    let divList = document.createElement("div");
    divMain.appendChild(divList);
    divMain.insertBefore(divList, divMain.children[0]); 
    var cookieItem = getCookie(`item${i}`);
    arr.push(cookieItem);
    divList.innerHTML = cookieItem;
    divList.setAttribute("class", "item");
    divList.addEventListener('click', () =>
    {
      var confirmation = confirm("sei sicuro");
      if(confirmation == false)
          return;
      divList.remove();
      setCookie(`item${i}`, divList,  -1); 
    })
    i++;
  } 
}

function setCookie(name, value, days) {
  if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}




