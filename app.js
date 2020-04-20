class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }

    size(){
        this.count
    }

    insert(value){
        this.count++

        let newNode = new Node(value)

        const searchTree = node => {
            // if value < node.vale, go left
            if (value < node.value){
                // if no left child, append new node
                if (!node.left){
                    node.left = newNode
                }
                // if left child, look left again
                else {
                    searchTree(node.left)
                }
            }

            // if value > node.vale, go right
            else if (value > node.value){
                // if no right child, append new node
                if (!node.right){
                    node.right = newNode
                }
                // if right child, look right again
                else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(){
        let currentNode = this.root
        while (currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.value
    }
    
    max(){
        let currentNode = this.root
        while (currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    contains(value){
        let currentNode = this.root

        while (currentNode){
            if (value === currentNode.value){
                return true
            }
            if (value < currentNode.value){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

    }


    // depth first search - branch by branch

    // in-order
    // left, root, right
    dfsInOrder(){
        let result = []

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // caputre root node value
            result.push(node.value)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return result
    }

    //pre-order
    // root, left, right
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            // caputre root node value
            result.push(node.value)
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }

    //post-order
    // left, right, root
    dfsPostOrder(){
        let result = []

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
            // caputre root node value
            result.push(node.value)
        }

        traverse(this.root)

        return result
    }

    //breadth first search - level by level
    // use a queue 
    bfs(){
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length){
            let currentNode = queue.shift()

            result.push(currentNode.value)

            if (currentNode.left){
                queue.push(currentNode.left)
            }

            if (currentNode.right){
                queue.push(currentNode.right)
            }
        }

        return result
    }
}
