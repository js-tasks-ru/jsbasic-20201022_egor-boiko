/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n){
  let calc = 1;
for(let i = 2; i<=n; i++){
  calc *= i;
} 
  return calc;
}