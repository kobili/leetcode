function isValidBST(root: TreeNode | null): boolean {
    return validate(root, null, null);
}

function validate(root: TreeNode | null, low: number | null, high: number | null): boolean {
    if (root === null) {
        return true;
    }

    // check if root.val is within the valid range
    if (low !==  null && root.val <= low || high != null && root.val >= high) {
        return false;
    }

    let isLeftTreeValid = validate(root.left, low, root.val);
    let isRightTreeValid = validate(root.right, root.val, high);

    return isLeftTreeValid && isRightTreeValid;
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