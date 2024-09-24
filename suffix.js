class SuffixTrieNode {
  constructor() {
    this.children = {};
  }
}

class SuffixTrie {
  constructor(text) {
    this.root = new SuffixTrieNode();
    this.buildSuffixTrie(text);
  }

  // Build Suffix Trie for a given text
  buildSuffixTrie(text) {
    for (let i = 0; i < text.length; i++) {
      this.insertSuffix(text.substring(i));
    }
  }

  // Insert a suffix into the Suffix Trie
  insertSuffix(suffix) {
    let current = this.root;
    for (let char of suffix) {
      if (!current.children[char]) {
        current.children[char] = new SuffixTrieNode();
      }
      current = current.children[char];
    }
  }

  // Check if a substring exists in the text using the Suffix Trie
  searchSubstring(substring) {
    let current = this.root;
    for (let char of substring) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true; // Substring found
  }
}

// Example usage:
const suffixTrie = new SuffixTrie("banana");
console.log(suffixTrie.searchSubstring("ana")); // true
console.log(suffixTrie.searchSubstring("nana")); // true
console.log(suffixTrie.searchSubstring("apple")); // false
