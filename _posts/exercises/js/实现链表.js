//链表
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrev = findPrev;
    this.display = display;
}

function find(item) {
    let currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next
    }
    return currNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}
function display() {
    let currNode = this.head;
    while (currNode !==null) {
        console.log(currNode.element)
        currNode = currNode.next
    }
}
function findPrev(item) {
    let currNode = this.head;
    while((currNode.next!==null) && (currNode.next.element !==item)) {
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    let prevNode = findPrev(item);
    if(prevNode!==null) {
        prevNode.next = prevNode.next.next;
    }
}

//双向链表
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    this.previous = null;         //上一个节点链接
}

//链表类

function LList () {
    this.head = new Node( 'head' );
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
}

//查找元素

function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){
        currNode = currNode.next;
    }
    return currNode;
}

//查找链表中的最后一个元素

function findLast () {
    var currNode = this.head;
    while ( !( currNode.next == null )){
        currNode = currNode.next;
    }
    return currNode;
}


//插入节点

function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}

//显示链表元素

function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.debug( currNode.next.element );
        currNode = currNode.next;
    }
}

//反向显示链表元素

function dispReverse () {
    var currNode = this.findLast();
    while ( !( currNode.previous == null )){
        console.log( currNode.element );
        currNode = currNode.previous;
    }
}

//删除节点

function remove ( item ) {
    var currNode = this.find ( item );
    if( !( currNode.next == null ) ){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

var fruits = new LList();

fruits.insert('Apple' , 'head');
fruits.insert('Banana' , 'Apple');
fruits.insert('Pear' , 'Banana');
fruits.insert('Grape' , 'Pear');

console.log( fruits.display() );        // Apple
                                        // Banana
                                        // Pear
                                        // Grape
                                        
console.log( fruits.dispReverse() );    // Grape
                                        // Pear
                                        // Banana
                                        // Apple
