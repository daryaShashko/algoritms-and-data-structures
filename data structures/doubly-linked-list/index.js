class Node {
    constructor(val) {
        this.element = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        var target = this.tail;
        if (!this.tail) {
            return undefined;
        } else if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = target.prev;
            this.tail.next = null;
            target.prev = null;
        }
        this.length--;
        return target;
    }

    shift() {
        if (!this.head) return undefined;
        var target = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = target.next;
            this.head.prev = null;
            target.next = null;
        }
        this.length--;
        return target;
    }

    unshif(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        var currentNode;
        var counter;
        if (index <= this.length / 2) {
            currentNode = this.head;
            counter = 0;
            while (counter !== index) {
                counter++;
                currentNode = currentNode.next;
            }
        } else {
            counter = this.length - 1;
            currentNode = this.tail;
            while (counter !== index) {
                counter--;
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    }

    set(index, val) {
        var target = this.get(index);
        if (target) {
            target.element = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false;
        } else if (index === 0) {
            return !!this.unshif(val);
        } else if (index === this.length - 1) {
            return !!this.push(val);
        } else {
            var newNode = new Node(val);
            var next = this.get(index);
            var prev = next.prev;
            newNode.next = next;
            newNode.prev = prev;
            prev.next = newNode;
            next.prev = newNode;
            this.length++;
            return true;
        }
    }

    print() {
        var curNode = this.head;
        while (curNode) {
            console.log(`currentNode: ${curNode.element}, nextNode ${curNode.next}, prevNode: ${curNode.prev}`);
            curNode = curNode.next;
        }
    }
}

var dll = new DoublyLinkedList;
dll.push('hello');
dll.push('world');
dll.push('!');
dll.print();
dll.pop();
dll.pop();
dll.print();
console.log('qwe', dll)
