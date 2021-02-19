const  test2 = document.querySelector('a');
console.log(test2);
test2.addEventListener('click', function(event) {
        const a = prompt('ВВЕДИТЕ НАЗВАНИЕ ССЫЛКИ');
        console.log(a);
        this.textContent = a;
});

test2.addEventListener('click',   function(event)  {
    
    event.preventDefault();
    })