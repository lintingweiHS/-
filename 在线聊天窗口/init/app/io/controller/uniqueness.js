module.exports = app => {
    return function* () {
      const self = this;
      // console.log(this.args[0].user)
      let status = true
      let message = this.args[0].user;
      console.log(message)
      if(app.usernameList.indexOf(message) !== -1){
        status = false
      }
        this.socket.emit('uniqueness', {status:status});
    };
  };