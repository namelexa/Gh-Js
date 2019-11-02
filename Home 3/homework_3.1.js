class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    setNext(el) {
        this.next = el
    }

    setPrev(el) {
        this.prev = el
    }

    getNext() {
        return this.next
    }

    getPrev() {
        return this.prev
    }

    setData(data) {
        this.data = data
    }

    cut() {
        if (this.data !== null) {
            this.prev.setNext(this.next);
            this.next.setPrev(this.prev);
            this.next = null;
            this.prev = null;
            this.data = null;
        }
    }

    swap(el) {
        let next = this.next;
        let prev = this.prev;
        if (el.data === this.data) {
            console.log("ERROR");
            return false;
        }
        if (el < 0 || this.data < 0) {
            console.log("ERROR");
            return false;
        }

        if (this.prev !== null) {
            this.prev.setNext(el);
        }
        if (el.next !== null) {
            el.next.setPrev(this)
        }

        if (this.next === el) {
            this.setNext(el.getNext());
            this.setPrev(el);
            el.setNext(this);
            el.setPrev(this.prev);
        } else {
            this.setNext(el.getNext());
            this.setPrev(el.getPrev());
            if (this.prev !== null) {
                this.prev.setNext(this)
            }
            el.setNext(this.next);
            el.setPrev(this.prev);
            if (el.next !== null) {
                el.next.setPrev(el)
            }
        }

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    getCurrent(number) {
        let current = this.head;
        if (number === 0 || number === null) {
            return current;
        }

        while (current !== null) {
            if (current.data === number) {
                this.current = current;
                break;
            } else {
                this.current = null;
            }
            current = current.next
        }
        return this.current;
    }

    setNext(item) {
        if (this.tail !== null) {
            return this.append(item);
        }
    }

    setPrev(item) {
        if (this.head !== null) {
            return this.appendAt(0, item);
        }
    }

    getNextByItem(item) {
        let current = this.head;
        if (item === 0 || item === null) {
            return current.next;
        }
        while (current !== null) {
            if (current.data === item) {
                this.next = current.next;
                break;
            } else {
                this.next = null;
            }
            current = current.next
        }
        return this.next;
    }

    getPrevByItem(item) {
        let current = this.head;
        if (item === 0 || item === null) {
            return current.prev;
        }
        while (current !== null) {
            if (current.data === item) {
                this.prev = current.prev;
                break;
            } else {
                this.prev = null;
            }
            current = current.next
        }
        return this.prev;
    }

    getNext() {
        let node = new Node();
        return node.next;
    }

    getPrev() {
        let node = new Node();
        return node.prev;
    }


    append(item) {
        let node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
    }

    appendAt(pos, item) {
        let current = this.head;
        let counter = 1;
        let node = new Node(item);
        if (pos == 0) {
            this.head.prev = node
            node.next = this.head;
            this.head = node
        } else {
            while (current) {
                current = current.next;
                if (counter == pos) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node
                }
                counter++
            }
        }
    }

    cut(item) {
        let current = this.head;
        while (current) {
            if (current.data === item) {
                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current == this.head) {
                    this.head = this.head.next
                    this.head.prev = null
                } else if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next
        }
    }

    swap(nodeOne, nodeTwo) {
        let current = this.head;
        let counter = 0;
        let firstNode;

        if (nodeOne === nodeTwo) {
            console.log("ERROR");
            return false;
        } else if (nodeOne > nodeTwo) {
            let temp = nodeOne;
            nodeOne = nodeTwo;
            nodeTwo = temp;
        }

        if (nodeOne < 0 || nodeTwo < 0) {
            console.log("ERROR");
            return false;
        }

        while (current !== null) {
            if (counter == nodeOne) {
                firstNode = current;
            } else if (counter == nodeTwo) {
                let temp = current.data;
                current.data = firstNode.data;
                firstNode.data = temp;
            }
            current = current.next;
            counter++;
        }
        return true
    }

    length() {
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            counter++
            current = current.next
        }
        return counter;
    }

    display() {
        let current = this.head;
        let elements = {};
        while (current !== null) {
            elements['node' + current.data] = current;
            current = current.next
        }
        return elements;
    }
}

/* Test */
const doublyLinkedList = new DoublyLinkedList();
[1, 2, 3, 4, 5].map(item => {
    doublyLinkedList.append(item);
});