class Stack { //first in, last out
    constructor() {
        this.stack = [];
    }

    push(element) {//mettre dans la pile
        this.stack.push(element);
    }

    pop() { //sort de la pile
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0; //3 égals = booléens
    }
}

export default Stack;