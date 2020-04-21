// 1. A queue is also a data structure, but you can remove only the first added element. This is a principle known as first in, first out (FIFO). 

// 2. Queues should be used over arrays when you need to work with data in the FIFO form where the algorithm only needs to access the first added element.

// 3. In JavaScript, arrays have methods that define the queue class: shift() and push(). 

// 4. Recall that the shift() method on an array in JavaScript removes and returns the first element of the array. Adding to a queue is commonly known as enqueuing, and removing from a queue is known as dequeuing. shift() can be used for the dequeue, and .push() can be used for the enqueue.

// 5. INSERTION as mentioned, insertion for a queue is known as enqueue. Since an array is used to hold the stack data, the push() method can be used to implement enqueue.

// 6. DELETION As mentioned, deletion for a queue also is known as dequeue. Since an array is used to hold the stack data, the shift() method can be used to remove and return the first element in the queue. Time Complexity: O(n).

// 7. the situation above is Time Complexity: O(n)
// Because the shift() implementation removes the element at zero indexes and
// then shifts remaining indexes down consecutively, all other elements in the array need to have their indexes altered, and this takes O(n). With a linked-list implementation, this can be reduced to O(1).

// 8. ACCESS Unlike an array, items in a queue cannot be accessed via index. To access the nth last- added node, you need to call dequeue n number of times. A buffer is needed to prevent modification to the original queue.

// 9. SEARCH You might need to search a queue to check whether an element exists within a queue. Again, this involves creating a buffer queue first to avoid modifications to the original queue.


// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Your implementation should support following operations:

// MyCircularQueue(k): Constructor, set the size of the queue to be k.
// Front: Get the front item from the queue. If the queue is empty, return -1.
// Rear: Get the last item from the queue. If the queue is empty, return -1.
// enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// isEmpty(): Checks whether the circular queue is empty or not.
// isFull(): Checks whether the circular queue is full or not.


"use strict";

/*
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class MyCircularQueue  {

    constructor(k){
    //initialize new que and set the head and tail to begginning.
    this.que = new Array(k);
    this.head = 0;
    this.tail = 0;
    }
    
};

/*
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if( this.length > 0){

    }
};

/*
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
};

/*
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    
};

/*
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    
};

/*
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    
};

/*
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */



//  TEST AREA:

let k = 10;

let que = new MyCircularQueue(k);
