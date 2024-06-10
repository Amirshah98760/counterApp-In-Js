let counterDiv = document.querySelector("#counterDiv");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let counter = 1;

btn1.addEventListener("click", () =>{
counterDiv.innerText = counter++;
});

btn2.addEventListener("click", () =>{
   
    if (counter <= 0) {
        alert("The value is not less than 0 Press the Increment button so the value increase by 1");
        }
        
        else{
        counterDiv.innerText = counter--;
    }

    
    });
    
    btn3.addEventListener("click", () =>{
        counterDiv.innerText = counter = "0";
        });

      