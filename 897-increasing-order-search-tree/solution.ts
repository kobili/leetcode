function increasingBST(root: TreeNode | null): TreeNode | null {

    let nodesInOrder: number[] = [];
    getNodesInOrder(root, nodesInOrder);

    if (nodesInOrder.length < 1) {
        return null;
    }

    let newRoot: TreeNode = new TreeNode(nodesInOrder[0]);
    let currNode = newRoot;
    for (let i = 1; i < nodesInOrder.length; i++) {
        currNode.right = new TreeNode(nodesInOrder[i]);
        currNode = currNode.right;
    }

    return newRoot;
};

function getNodesInOrder(root: TreeNode | null, storageArray: number[]): void {
    if (root === null) {
        return;
    }

    getNodesInOrder(root.left, storageArray);
    storageArray.push(root.val);
    getNodesInOrder(root.right, storageArray);
}


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : left;
    }
}