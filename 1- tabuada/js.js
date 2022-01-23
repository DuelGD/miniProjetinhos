var num;

function gerar() {
    num = document.getElementById('num').value
    if (num.length == 0) {
       alert('[ERROR]Confira Todos os Campos')
   }else{
    const tab = document.getElementById('tabuada')
    const next = document.getElementById('next')
    const back = document.getElementById('back')
       if (tab.classList.contains('inv') == true) {
        tab.classList.toggle('inv', false)
        next.classList.toggle('vis')
        back.classList.toggle('vis')
       }
       tabuada(num)
   }
   } 
   
   function tabuada(num) {
       const tab = document.getElementById('tabuada')
       tab.innerHTML = ''

       for (let c = 1; c <=10; c++) {
          let item = document.createElement('option')
          item.text = `${num} x ${c} = ${num*c}`
          tab.appendChild(item)
          }
   }
   function back() {
    const elementNumber = document.getElementById('num');
    const numberBack = Number(elementNumber.value) - 1;
    elementNumber.value = numberBack;
    tabuada(numberBack)
 }

   function next() {
   const elementNumber = document.getElementById('num');
   const numberNext = Number(elementNumber.value) + 1;
   elementNumber.value = numberNext;
   tabuada(numberNext)
}

function tema(){
      document.querySelector('div').classList.toggle('night-div');
      document.querySelector('header').classList.toggle('night-header');
      document.querySelector('footer').classList.toggle('night-footer');
      document.querySelector('.btn').classList.toggle('night-div');
      document.body.classList.toggle('night-body');
}
