const WordDictionary = function() {
  this.words = {} // map 角色  // {3: ['bad', 'dad']}
}
WordDictionary.prototype.addwords = function(word) {
  // 当前word相同长度的数组已存在
  if(this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.search = function(word) {
  if(!this.words[word.length]) return false
  let len = word.length
  if(!word.includes('.')) {
    return this.words[len].includes(word)
  }

  const reg = new RegExp(word)
  return this.words[len].some((item) => {
    return reg.test(item)
  })
}

let test = new WordDictionary()
test.addwords('dsa')
test.addwords('dds')
console.log(test.search('d..'));




