class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return undefined;
        var current = this.first;
        if (this.first === this.last) {
            this.last = null;
        } else {
         this.first = this.first.next;
        }
        this.size--;
        return current.value;
    }
}