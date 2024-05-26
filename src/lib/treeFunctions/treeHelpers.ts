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

export default buildTree;
