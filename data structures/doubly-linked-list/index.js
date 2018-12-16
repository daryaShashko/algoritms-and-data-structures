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

    pop(){
        var target = this.tail;
        if(!this.tail){
            return undefined;
        } else if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else  {
            this.tail = target.prev;
            this.tail.next = null;
            target.prev = null;
        }
        this.length--;
        return target;
    }

    shift(){
        if(!this.head) return undefined;
        var target = this.head;
        if(this.length === 1){
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
dll.pop();
dll.pop();
dll.print();
console.log('qwe', dll)
