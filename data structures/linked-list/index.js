class Node {
    constructor(val) {
        this.element = val;
        this.head = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let currentNode = this.head;
        let prevNode = this.head;
        if (!currentNode) {
            return undefined;
        } else {
            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            this.tail = prevNode;
            this.tail.next = null;
            this.length--;
        }
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode.element;
    }

    shift() {
        if (!this.head) return undefined;
        var currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentNode.element;
    }

    unshift(val) {
        const newNode = new Node(val);
        const currentNode = this.head;
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || !this.head || this.length >= index) return null;
        let currentNode = this.head;
        let counter = 0
        while (counter < index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');
console.log(list);
list.pop();
console.log(list);
