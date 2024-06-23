function numOfNodes(treeHeight: number) {
 let res: number = 0;
 for (let i = 0; i <= treeHeight; i++) {
  res += 2 ** i;
 }
 return res;
}

function buildTree(tree: number[], treeHeight: number) {
 function coinFlip(): number {
  return Math.round(Math.random());
 }

 function generateRandomArray(
  length: number,
  min: number,
  max: number
 ): number[] {
  return Array.from(
   { length: length },
   () => Math.floor(Math.random() * (max - min + 1)) + min
  );
 }

 let res: number[] = Array(numOfNodes(treeHeight)).fill(-1);
 function goLeft(index: number) {
  return 2 * index + 1;
 }

 function goRight(index: number) {
  return 2 * index + 2;
 }

 let insertionOrder: number[] = generateRandomArray(10, 0, 99);
 for (let i = 0; i < insertionOrder.length; i++) {
  let flag: boolean = false;
  let j: number = 0;
  while (!flag && j < tree.length) {
   if (res[j] === -1) {
    res[j] = insertionOrder[i];
    flag = true;
   } else {
    let route: number = coinFlip();
    if (route === 0) {
     j = goLeft(j);
    } else {
     j = goRight(j);
    }
   }
  }
 }
 return res;
}

function preorder(tree: number[]) {
 let list: number[] = [];
 function preorderHelper(index: number) {
  if (index >= tree.length || tree[index] === -1) {
   return;
  }
  list.push(index);
  preorderHelper(2 * index + 1);
  preorderHelper(2 * index + 2);
 }
 preorderHelper(0);
 return list;
}

function postorder(tree: number[]) {
 let list: number[] = [];
 function postorder(index: number) {
  if (index >= tree.length || tree[index] === -1) {
   return;
  }
  postorder(2 * index + 1);
  postorder(2 * index + 2);
  list.push(index);
 }
 postorder(0);
 return list;
}

function inorder(tree: number[]) {
 let list: number[] = [];
 function inorder(index: number) {
  if (index >= tree.length || tree[index] === -1) {
   return;
  }
  inorder(2 * index + 1);
  list.push(index);
  inorder(2 * index + 2);
 }
 inorder(0);
 return list;
}

function levelorder(tree: number[]) {
 let list: number[] = [];
 let queue: number[] = [];
 queue.push(0);
 while (queue.length > 0) {
  let index = queue.shift();
  list.push(index);
  if (2 * index + 1 < tree.length && tree[2 * index + 1] !== -1) {
   queue.push(2 * index + 1);
  }
  if (2 * index + 2 < tree.length && tree[2 * index + 2] !== -1) {
   queue.push(2 * index + 2);
  }
 }
 return list;
}

export { buildTree, preorder, postorder, inorder, levelorder };
