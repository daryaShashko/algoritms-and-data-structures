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
}