const button = document.querySelectorAll('.biasButton');
button.forEach(temp => {
    temp.addEventListener('click', function(){

        if (temp.classList.contains("activeButton")){
            temp.classList.remove("activeButton")
        }else{
            temp.classList.add("activeButton");
        }
    });
});