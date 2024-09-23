class Trie{
  children: { [key: string]: Triangle} ={};
  isEndofWord: boolean = false;
}

export class Star{
  root: Trie;

  constructor(){
    this.root = new Trie();
  }

  insert(word: string): void{
    let node = this.root;
    for(const char of word){
      if(!node.children[char]){
        node.children[char] = new Trie();
      }
      node=node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean{
    let node = this.root;
    for(const char of word){
      if(!node.children[char]){
        return false;
      }
      node = node.children[char];
    }
    return node.isEndofWord;
  }

  startsWith(prefix:string):boolean{
    let node = this.root;
    for(const char of prefix){
      if(!node.children[char]){
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
