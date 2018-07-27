/* globals calc */
/* exported calculate */

var dom = {
    x: document.getElementById('x'),
    y: document.getElementById('y'),
    operator: document.getElementById('operator'),
    result: document.getElementById('result')
};

function calculate(operator) {
    
    var x = parseFloat(dom.x.value);
    var y = parseFloat(dom.y.value);

    var operation = calc[operator];
    var result = operation(x, y);

    dom.operator.innerText = operation.symbol;
    dom.result.innerText = result;

    return false;
}