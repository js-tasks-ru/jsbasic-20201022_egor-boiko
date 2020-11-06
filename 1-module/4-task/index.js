/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lower = str.toLowerCase();
    
   if( lower.includes('xxx') || lower.includes('1xbet'))
       {return true} else {return false}
}
