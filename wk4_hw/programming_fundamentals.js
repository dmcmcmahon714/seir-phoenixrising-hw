//The Principles of good programming
// DRY - Don't repeat yourself.  Use as few statements/expressions as possible.  Try to rely more on functions that do the repeating.
// KISS - Keep it simple stupid.  Less  is more.  Write code that is as easily comprehensible as possible.
// Avoid YAGNI - Don't add unnecessary functionality (You aren't going to need it.)
// Do the simplest thing that could possibly work.  - Write as little and as simple code as possible to get the desired outcome.
// Don't make me think - Write code that is as easy to understand as it can be.
// Write code for the Maintainer - Write in a way that assumes the code will need to be maintained for a period of time.  Make maintenance as easy as possible.
// Single responsibility principle - Each component should only perform one, well-defined task.
// Avoid premature optimization - Don't worry about being redundant or being concise until the very end of the project when you can begin to optimize.
// Separation of Concerns - Each element of code should have its own responsibility that overlaps with other elements as little as possible.
// I am not very surprised by any of these principles, because they all seem to convey that code should be simple and efficient, breaking down the different benefits.
// I think "Do the simplest thing that could possibly work," is giving me the most trouble right now, because I am very new at this so I'm really just trying to do anything to make things work.
const f = l => {
  //assigns constant "f" and opens function.
  let es = 0, p = 0, c = 1, n = 0
  //sets value of sets 'even sum' to zero'(es), 'previous'(p) to 0, and current(c) to 1.
  while (c <= l) {
    //creates while loop that runs loop until the current value is less than or equal to the limit.
    n = c + p;
    //Add the previous value to the current value until the limit is reached.
    [c, p] = [n, c]
// States the previous value gets reassigned to the current value while the loop is running.  The current value is the next value while the loop is running.
    es += (c % 2 === 0) ? c : 0
    //keep running the loop until an even sum is found.
  }
  return es
}

console.log(f(55)) 

//Answer with comments
//The fibonacci sequence?
//At this point I'd rather work with f2 because the values are more clearly defined.
//Yes it is definitely necessary or the code doesn't run.