const  test51 = document.querySelector('button');
console.log(test51);

butt.onclick = function() {
    var val = document.getElementById('elem1').value;
   document.getElementById('duplicateField').innerHTML= val;
   console.log(val);
   document.getElementById('elem1').value="";
};