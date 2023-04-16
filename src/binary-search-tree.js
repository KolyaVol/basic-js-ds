const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}
	root() {
		return this.rootNode;
	}

	add(data) {
		let newNode = new Node(data);
		if (this.rootNode === null) {
			this.rootNode = newNode;
		} else {
			let currentNode = this.rootNode;

			while (true) {
				if (data < currentNode.data) {
					if (currentNode.left === null) {
						currentNode.left = newNode;
						break;
					} else {
						currentNode = currentNode.left;
					}
				} else if (data > currentNode.data) {
					if (currentNode.right === null) {
						currentNode.right = newNode;
						break;
					} else {
						currentNode = currentNode.right;
					}
				} else {
					break;
				}
			}
		}
	}

	has(data) {
		let currentNode = this.rootNode;
		while (currentNode !== null) {
			if (data === currentNode.data) {
				return true;
			} else if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
	}

	find(data) {
		let currentNode = this.rootNode;
		while (currentNode !== null) {
			if (data === currentNode.data) {
				return currentNode;
			} else if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return null;
	}

	remove(/* data */) {
		throw new NotImplementedError("Not implemented");
		// remove line with error and write your code here
	}

	min() {
		let currentNode = this.rootNode;
		if (currentNode === null) {
			return null;
		}
		while (currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode.data;
	}

	max() {
		let currentNode = this.rootNode;
		if (currentNode === null) {
			return null;
		}
		while (currentNode.right !== null) {
			currentNode = currentNode.right;
		}
		return currentNode.data;
	}

	
}

module.exports = {
	BinarySearchTree,
};
