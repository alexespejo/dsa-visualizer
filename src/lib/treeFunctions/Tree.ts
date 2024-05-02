class TreeNode<T> {
 value: T;
 right: TreeNode<T> | null = null;
 left: TreeNode<T> | null = null;

 constructor(
  value: T,
  right: TreeNode<T> | null = null,
  left: TreeNode<T> | null = null
 ) {
  this.value = value;
  this.right = right;
  this.left = left;
 }

 addRight(value: T) {
  if (this.right === null) {
   this.right = new TreeNode(value);
  } else {
   let curr = this.right;
   while (curr.right !== null) {
    curr = curr.right;
   }
   curr = new TreeNode(value);
  }
 }
}

class Tree<T> {
 root: TreeNode<T>;

 constructor(value: T) {
  this.root = new TreeNode(value);
 }
}
