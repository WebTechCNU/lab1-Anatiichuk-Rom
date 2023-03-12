const getNum = document.getElementById("number");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")

submitBtn.addEventListener("click", function () {
    const a = Number(getNum.value);
    
    if (isNaN(a)) {
        result.value = 'Напишіть число!';
        return;
    }

      rozryad(a);
  
  })


  function rozryad(number)
  {
    result.value = ~~(Math.log10(number) + 1);
    //тільди прибирають дріб з результату
  }
