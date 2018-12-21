/**
 * Author: lawliet
 * Date: 2018.12.21
 */ 


// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.normal = [];
  this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.normal.push(x);
    if (this.min.length === 0 || this.min[this.min.length - 1] >= x) {
      this.min.push(x);
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let minNum = this.normal.pop();
    if (minNum === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.normal[this.normal.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */