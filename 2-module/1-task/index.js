/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

 function sumSalary(Object) {
  let sum = 0;
  for(let key in Object){
      if(typeof( Object[key] ) === 'number'){
      sum += Object[key] } 
      else if( typeof(Object[key] ) === 'any'){
      return} 
      
  }
  return sum;
}