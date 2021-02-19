//const  testTextField = document.querySelector('#testTextField');
//testTextField.onclick = function() {
  // тело обработчика
 // console.log('Это тот блок');
 // prompt('Что ты хочешь сказать Оле?');
  // конец тела обработчика
//}
//testTextField.addEventListener('click', 
 // (event) => {
    // тело обработчика
//    console.log('Это тот блок');
        // конец тела обработчика
//})

const  testTextField = document.querySelector('#testTextField');
const  testTextField1 = document.querySelector('#testTextField1');
testTextField.addEventListener('click', function(event) {
        this.textContent = 'СОБЫТИЕ ' + event.type;
});

testTextField1.addEventListener('click',   function(event)  {
    this.textContent = "ВЫ УВЕРЕНЫ";
    event.preventDefault();
    })