class MaxBinaryHeap {
    constructor() {
        this.values = [55, 39, 41, 18, 27, 12, 33];
    }

    insert(el) {
        this.values.push(el);
        this.bubbleUp();
    }

    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMax() {
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();

console.log(heap);
heap.extractMax();
console.log(heap);