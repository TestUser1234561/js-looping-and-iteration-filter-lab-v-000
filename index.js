// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(word => word.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, name) {
  return arr.filter((word) => {
    for(let i = 0; i < name.length; i++) {
      console.log(name[i], word[i])
      if(name[i] !== word[i]) {
        return false
      }
    }
  })
}
