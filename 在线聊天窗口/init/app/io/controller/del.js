module.exports = app => {
      return function* () {
        // const self = this;
        // console.log(app.usernameList)
       let message = this.args[0].user
        let index = app.usernameList.indexOf(message)
        app.usernameList.splice(index,1)
        // console.log(app.usernameList)

        // let message = this.args[0].message;
        // console.log(message)
          // recordeList.push(message)

        // this.socket.emit('recorde', recordeList);
        this.server.sockets.emit('del', {type:'del',username:message,user:app.usernameList});
      };
    };