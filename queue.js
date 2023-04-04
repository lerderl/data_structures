class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
  // Add item to the back of the queue
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
  // Remove item form the front of the queue
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
  // Return item at the front of the queue
	peek() {
		return this.items[this.frontIndex]
	}
  // Print queue
	get printQueue() {
		return this.items;
	}
}
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek())
var str = queue.printQueue;
console.log(str)
