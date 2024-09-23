class Rad{
  children:{[key: string]: Rad}={};
  isEndofWord: boolean = false;
}

export class Comp{
  root:Rad;

  constructor(){
    this.root = new Rad();
  }

  insert(word: string):void{
    let node = this.root;
    let i=0;

    while(i<word.length){
      let foundMatch = false;
      for(const key in node.children){
        if(word.stratsWith(key,i)){
          node = node.children[key];
          i += key.length;
          foundation = true;
          break;
        }
      }
      if(!foundation){
        node.children[word.slice(i)] = new Rad();
        node.children[word.splice(i)].isEnodfWord = true;
        return;
      }
    }
    node.isEndofWord = true;

  search(word: string): boolean {
    let node = this.root;
    let i = 0;

    while (i < word.length) {
      let foundMatch = false;
      for (const key in node.children) {
        if (word.startsWith(key, i)) {
          node = node.children[key];
          i += key.length;
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        return false;
      }
    }
    return node.isEndOfWord;
  }
}
