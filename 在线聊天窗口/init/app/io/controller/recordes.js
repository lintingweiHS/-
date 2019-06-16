module.exports = app => {
    let recordeList = [];
      return function* () {
        const self = this;
        console.log(this.args[0])
        let message = this.args[0];
          // recordeList.push(message)

        // this.socket.emit('recorde', recordeList);
        // console.log(message)
        this.server.sockets.emit('recorde', {type:'rec',content:message});
      };
    };
    