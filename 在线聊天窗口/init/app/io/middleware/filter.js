module.exports = app => {
    return function* (next) {
        // this.socket.emit('res', 'packet received!');
        // console.log(this.packet);
        // console.log(123)
        yield* next;
    };
};