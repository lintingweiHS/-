module.exports = app => {
  app.usernameList = [];
  return function* () {
    const self = this;
    // console.log(this.args[0].user)
    // let status = true
    let message = this.args[0].user;
    // if(app.usernameList.indexOf(message) === -1){
      app.usernameList.push(message)
    // }else{
    //   status = false
    // }
      // if(status){
        this.server.sockets.emit('username', {type:'chat',username:message, user:app.usernameList});
      // }
      // this.socket.emit('isexist', {status:status});
  };
};
