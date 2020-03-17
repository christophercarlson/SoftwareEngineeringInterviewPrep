// 1. A stack is a data structure in which only the last inserted element can be removed
// and accessed. last in, first out (LIFO).

// 2. Constant time of O(1)

// 3. Stacks should be used over arrays when you need to work with data in the LIFO form where the algorithm needs to access only the last-added element.

// 4. In JavaScript, arrays have methods that define the stack class: pop and push.

// 5. PEEKING at the last added element of the stack means returning the last-added element without removing it from the data structure. Peeking is often used to compare the last- added element to some other variable and to evaluate whether the last-added element should be removed from the data structure.

// 6. Inserting into a stack can be done via the push function natively supported with JavaScript arrays.

// 7. DELETION can also be implemented using a native JavaScript array method, called pop.

// 8. ACCESSING specific elements in a data structure is important. Here, let’s take a look at how to access an element based on order.
// To access the nth node from the top, you need to call pop n number of times. Time Complexity: O(n).

// 9. SEARCHING the stack data structure for a specific element is a critical operation. To do this, you must first create a buffer stack so that pop can be called on that buffer stack. This way, the original stack is not mutated, and nothing is removed from it. Time Complexity: O(n).
