// Queues - first in first out

function createQueue() {
  const queue = [];

  return {
    add(item) {
      queue.unshift(item);
    },
    remove() {
      queue.pop();
    },
    next() {
      return queue[queue.length - 1];
    },
    getLength() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

const queue = createQueue();
console.log(queue.isEmpty());

queue.add('First item');
queue.add('Second item');
queue.add('Third item');

console.log(queue.next());

queue.remove();
console.log(queue.next());