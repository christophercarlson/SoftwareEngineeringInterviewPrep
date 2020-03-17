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

