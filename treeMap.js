/*
 * Basic tree that stores a value.
*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  //return child node for convenience
  return child;
};
