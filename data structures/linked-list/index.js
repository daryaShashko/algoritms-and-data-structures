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
            prevNode.next = null;
        }
        this.length--;
        return currentNode.element;
    }

}

const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('K');
console.log(list.head);
console.log(list.tail);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next);