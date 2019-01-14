class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent = this.values[parentIndex];
            if (element.priority <= parent.priority) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    dequeue() {
        const firstEl = this.values[0];
        const lastEl = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastEl;
            this.sinkDown();
        }
        return firstEl;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let er = new PriorityQueue();
er.enqueue('common cold', 1);
er.enqueue('gunchot wound', 5);
er.enqueue('high fever', 2);
er.enqueue('qwe qwe', 6);
console.log(er);
er.dequeue();
console.log(er);