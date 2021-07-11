function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

    let isCurrentNodeValid = false;
    if (low <= root.val && root.val <= high) {
        isCurrentNodeValid = true;
    }

    if (root.left === null && root.right === null) {
        return isCurrentNodeValid ? root.val : 0;
    }

    let sumOfLeftChild = root.left === null ? 0 : rangeSumBST(root.left, low, high);
    let sumOfRightChild = root.right === null ? 0 : rangeSumBST(root.right, low, high);

    let sumOfChildren = sumOfLeftChild + sumOfRightChild;

    return isCurrentNodeValid ? root.val + sumOfChildren : sumOfChildren;  
};

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