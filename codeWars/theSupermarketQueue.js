// Test.assertEquals(queueTime([], 1), 0);
// Test.assertEquals(queueTime([1, 2, 3, 4], 1), 10);
// Test.assertEquals(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
// Test.assertEquals(queueTime([1, 2, 3, 4, 5], 100), 5);

// input:

// customers: 
// an array of positive integers representing the queue.
// Each integer represents a customer, and its value is the amount 
// of time they require to check out.

// n: 
// a positive integer, the number of checkout tills.


// OUTPUT:

// The function should return an integer, the total time required.





"use strict";
let log = console.log
let customers = [2, 2, 3, 3, 4, 4]
let noCustomer = []
let n = 2


function queueTime(customers, n) {

    //edge cases: 
    if (customers.length == 0) return 0
    if (customers.length <= n) return Math.max(...customers)

    //Now the algorithm:
    let registers = new Array(n).fill(0), shortestLine, i;

    for (i = 0; i < customers.length; i++) {
        shortestLine = registers.indexOf(Math.min(...registers));
        registers[shortestLine] += customers[i];
    }
    return Math.max(...registers);
}


log(queueTime(customers, n))

