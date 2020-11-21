/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];
  for(let k in users){
    names.push(users[k].name);
}
  return names;
}
