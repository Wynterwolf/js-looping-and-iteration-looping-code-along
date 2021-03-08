// Code your solutions in this file
function writeCards(array, event) {
    let finished = []
    for (let i = 0; i < array.length; i++) {
    finished.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return finished
};

function countDown() {
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown++);
    }
};
countdown(10);