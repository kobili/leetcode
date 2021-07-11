function inorderTraversal(root: TreeNode | null): number[] {

    if (root === null) {
        return [];
    }

    let result: number[] = [];

    let leftArray = inorderTraversal(root.left);
    leftArray.push(root.val);
    let rightArray = inorderTraversal(root.right);
    result = leftArray.concat(rightArray);

    return result;
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