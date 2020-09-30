class Graph {
    constructor() {
        this.vertices = [];
        this.edges = new Map();
    }
}

Graph.prototype.addVertices = function(v) {
    this.vertices.push(v);
    this.edges.set(v, []);
}

Graph.prototype.addEdge = function(v, w) {
    let vEdge = this.edges.get(v);
    vEdge.push(w);
    this.edges.set(v, vEdge);

    let wEdge = this.edges.get(w);
    wEdge.push(v);
    this.edges.set(w, wEdge);
}

Graph.prototype.toString1 = function() {
    let a=``
    for(let v of this.vertices) {
        a+=`${v}->`
        for(let e of this.edges.get(v)) {
            a+=` ${e}`
        }
        a += `\n`
    }
    return a;
}

var graph = new Graph()
var vertices = [1, 2, 3, 4, 5]
for (var i=0; i<vertices.length; i++) {
    graph.addVertices(vertices[i])
}
graph.addEdge(1, 4); //增加边
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 5);

console.log(graph.toString1())

//DFS
Graph.prototype.dfs = function() {
    let visited = [];
    let ans = [];
    let self = this;
    for(let v of this.vertices) {
        if(!visited[v]) {
            dfsVisit(v)
        }
    }

    function dfsVisit(vertice) {
        visited[vertice] = true;
        ans.push(vertice);
        for(let e of self.edges.get(vertice)) {
            if (!visited[e]) {
                dfsVisit(e)
            }
        }
    }
    console.log(ans)
}
graph.dfs();

//BFS
Graph.prototype.bfs = function() {
    let ans = [];
    let visited = [];
    let tmp = [this.vertices[0]];
    
    while (tmp.length!=0) {
        let v = tmp.shift();
        if(!visited[v]) {
            visited[v] = true;
            ans.push(v);
            tmp = tmp.concat(this.edges.get(v));
        }
    }
    console.log(ans)
}

graph.bfs();
