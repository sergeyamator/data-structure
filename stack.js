// Stack - last in first out
// For example callstack

function createStack() {
  const stack = [];

  return {
    push(item) {
      stack.push(item)
    },
    pop() {
      return stack.pop()
    },
    next() {
      return stack[stack.length - 1]
    },
    getLength() {
      return stack.length
    },
    isEmpty() {
      return stack.length === 0
    }
  };
}

const stack = createStack();

stack.push('First');
stack.push('Second');
stack.push('Third');

console.log(stack.next());
console.log(stack.isEmpty());

stack.pop();
console.log(stack.next());
