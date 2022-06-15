module.exports = {
    loggedIn: function () {
     if(window.sessionStorage.getItem('token')){
         return true
     }
     return false
  }
}
