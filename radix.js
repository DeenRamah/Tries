class RadixNode {
  constructor() {
    this.children = {};
    this.word = null; // Stores word if node represents the end
  }
}

class RadixTree {
  constructor() {
    this.root = new RadixNode();
  }

  // Insert a word into the Radix Tree
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new RadixNode();
      }
      current = current.children[char];
    }
    current.word = word;
  }

  // Search for a word in the Radix Tree
  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.word === word; // Check if the word exists
  }
}

// Example usage:
const radixTree = new RadixTree();
radixTree.insert("apple");
radixTree.insert("app");
console.log(radixTree.search("apple")); // true
console.log(radixTree.search("app"));   // true
console.log(radixTree.search("appl"));  // false

