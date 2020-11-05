/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str === undefined)return ''
  return str.charAt(0).toUpperCase() + str.slice(1) 
}
