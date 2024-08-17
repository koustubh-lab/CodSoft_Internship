let statement = []
let operators = '+,-,*,/'.split(',')

let display = document.querySelector('.cal-screen')
let keys = document.querySelector('.cal-buttons')
keys.addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;

    let content = event.target.textContent;
    let action = event.target.getAttribute('data-action')
    
    if (content === 'x') content = '*';
    if (!content) return;

    if (operators.includes(statement[statement.length - 1]) && operators.includes(content)) {
        return;
    }

    if (action === 'clear') {
        statement = [];
        display.textContent = '0'
        return;
    }
    
    if (action === 'calculate') {
        showResult();
        return;
    }
    statement.push(content);
    display.textContent = statement.join('')
})

const showResult = () => {
    display.textContent = `${eval(statement.join(''))}`
    statement = [display.textContent];
}