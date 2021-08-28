const toX = () => 'X';

class PromiseQueue {
  constructor(promises, concurrentCount){
    this.todo = promises;
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }

  graphTasks(){
    var {todo, running, complete} = this;
    console.log(`

      todo: [${todo.map(toX)}]
      running: [${running.map(toX)}]
      complete: [${complete.map(toX)}]

    `);
  }

  run(){
    while(this.runAnother){
      var promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.graphTasks();
        this.run();
      });
      this.running.push(promise);
      this.graphTasks();
    }

  }
}

module.exports = PromiseQueue;