class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false; // Marks end of the word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true; // Mark the end of a word
  }

  // Search for a word in the Trie
  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false; // Word does not exist
      }
      current = current.children[char];
    }
    return current.isEndOfWord; // Return true if the word is complete
  }

  // Check if any word starts with a given prefix
  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false; // Prefix not found
      }
      current = current.children[char];
    }
    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // false
console.log(trie.startsWith("app")); // true
