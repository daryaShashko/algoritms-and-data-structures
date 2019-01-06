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
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
       return ++this.length;
    }

    pop(){
        if(!this.size){
            return null;
        } 
        var temp = this.first;
        if(this.first === this.last){
            this.last= null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}