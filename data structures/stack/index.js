class Node {
    constructor(val) {
        this.element = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {

            this.last.next = newNode;
            this.last = newNode;
        }
       return ++this.length;
    }
}