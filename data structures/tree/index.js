class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    costructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            const currentNode = this.root;
            if (val === currentNode.valuew) return undefined;
            while (ture) {
                if (val < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;
        var currentNode = this.root;
        found = false;
        while (currentNode && !found) {
            if (currentNode.value < val) {
                currentNode = currentNode.left;
            } else if (currentNode.value > val) {
                currentNode = currentNode.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return currentNode;
    }

    bfs(){
        var queue = [];
        var values=[];
        var node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            values.push(node);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
       return values; 
    }

    dfsPreOrder(){
        var values = [];
        var node = this.root;
        const helper = (node) => {
            values.push(node);
            if(node.left){
                helper(node.left);
            }
            if(node.right){
                helper(node.right)
            }
        }
        helper(node);
        return values;
    }

    dfsPostOrder(){
        var values = [];
        var node = this.root;
        const helper = (node) => {
            if(node.left){
                helper(node.left);
            }
            if(node.right){
                helper(node.right)
            }
            values.push(node);
        }
        helper(node);
        return values;
    }

    dfsInOrder(){
        var values = [];
        var node = this.root;
        const helper = (node) => {
            if(node.left){
                helper(node.left);
            }
            values.push(node);
            if(node.right){
                helper(node.right)
            }
        }
        helper(node);
        return values;
    }

}