/**
Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
in real life, we would likely start a new stack when the previous stack exceeds
some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
should be composed of several stacks, and should create a new stack once
the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
behave identically to a single stack (that is, pop() should return the same values as it
would if there were just a single stack).
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific
sub-stack.
**/

class SetOfStacks{
  constructor(limit){
    this.limit = limit;
    this.stacks=[];
    this.stacks.push([]);
  }
  push(plate) {
    if(this.stacks[this.stacks.length-1].length >= this.limit) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length-1].push(plate);
  }
  //edge cases: if there are no items in the stack at all,
  //then we should not return anything
  //if we are popping the last item from the current stack
  //we should remove that current stack
  pop() {
    if(this.stacks.length === 1) {
      if(this.stacks[0].length !== 0) {
        return this.stacks[0].pop();
      }
    } else {
      var temp = this.stacks[this.stacks.length-1].pop();
      if(this.stacks[this.stacks.length-1].length === 0) {
        this.stacks.pop();
      }
      return temp;
    }
  }
  //we need to pop an item from that stack, then we need to take an item from
  //the bottom of an adjacent stack, and add it to the current stack, we need
  //to then iterate that action until we are at the end of the stacks

  //edge cases: when we are trying to pop from a stack that doesn't exist!
  popAt(index) {
    if(index < this.stacks.length) {
      var temp = this.stacks[index].pop();
      this.shiftUp(index);
      return temp;
    }
  }
  //recursive or iterative? recusrive likely a little cleaner
  //iterative likely a little faster because we don't need to keep building stacks
  shiftUp(index) {
    var currIndex = index;
    while(currIndex != this.stacks.length-1) {
      this.stacks[currIndex].push(this.stacks[currIndex+1].shift());
      currIndex++;
    }
  }

}

// var setOfStacks = new SetOfStacks(5);
// setOfStacks.push(4);
// setOfStacks.push(6);
// setOfStacks.push(3);
// setOfStacks.push(7);
// setOfStacks.push(8);
// setOfStacks.push(9);
// setOfStacks.push(10);
// setOfStacks.push(4);
// setOfStacks.push(6);
// setOfStacks.push(3);
// setOfStacks.push(7);
// setOfStacks.push(8);
// setOfStacks.push(9);
// setOfStacks.push(10);
// console.log(setOfStacks);
// console.log(setOfStacks.popAt(0));
// console.log(setOfStacks);







