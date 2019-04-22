var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var calculation = document.getElementById('calculation');
var phrase = document.getElementById('phrase');
var form = document.getElementById('calculator');


function choice() {
    var option = document.getElementById("calcSelect").value;
    
    
    form.addEventListener('submit', function(event) {
    var selected = document.getElementById('calcSelect').value;
        
    if (!numField1.value || !numField2.value) {
        alert("please enter something"); 
    } else {
        
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    var c1 = x + y;
    var c2 = x * y;
    var c3 = x / y;
    var c4 = x % y;
    
    if (option === 'calc1') {
        calculation.innerText = "X + Y"
        resultField.innerText = c1;
    }
        if (option === 'calc2') {
        calculation.innerText = "X * Y"
        resultField.innerText = c2;
    }
        if (option === 'calc3') {
        calculation.innerText = "X / Y"
        resultField.innerText = c3;
    }
        if (option === 'calc4') {
        calculation.innerText = "X % Y"
        resultField.innerText = c4;
    }
    

    event.preventDefault();
    }
    });  
}