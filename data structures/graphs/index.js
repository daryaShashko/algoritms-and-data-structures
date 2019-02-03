class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    deleteEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1);
    }

    delteVertex(vertex){
        this.adjacencyList[vertex].forEach(element => {
            return this.deleteEdge(vertex, element)
        });

        delete this.adjacencyList[vertex];
    }
  
    depthFirstRecursive(start){
        var resulе = [];
        var visited = {};
        const adjacencyList =this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            
        })(start)
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');
console.log(g)
