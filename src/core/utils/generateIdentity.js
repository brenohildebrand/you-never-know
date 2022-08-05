export default (function _generateIdentity () {
  let id = 0;
  
  return function generateIdentity () {
    return id++;
  }
})();