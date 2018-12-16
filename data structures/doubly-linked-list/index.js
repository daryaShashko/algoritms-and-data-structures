class Node {
    constructor(val) {
        this.element = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail=null;
        this.length = null;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
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

    print(){
        var curNode = this.head;
        while(curNode){
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
console.log('qwe', dll)
