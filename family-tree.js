class FamilyTree {
  constructor (name) {
    if (typeof name !== 'string') {
      throw new Error('need a real name');
    }
    this.name = name;
    this.children = []
  }
  insert(name){
    const newMember = new FamilyTree(name);
    this.children.push(newMember);
    // console.log(newMember)
    return newMember;
  }
  familySize(){
    // console.log(this.children)
    return 1 + this.children.length;
  }

  findMember(){
    
    if (this.name === name) {

      return this;
    }
    
    return this.children.find( child => {
      console.log(child)
      return child.findMember(name);
    });
}
  log(){
    // console.log(this.name)
  }
}

module.exports = FamilyTree;
