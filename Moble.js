class Moble{
    constructor(name,id) {
        this.name =name;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
        // this.battery = int;
        // this.status = true;
        this.id =id;
    }
    // isOn(){
    //     return this.status
    // }
    // turnOff(){
    //     this.status = false;
   // }
    changBattery(){
        if (this.battery < 100){
            this.battery += 1;
        }
        if (this.battery === 100)
            return "pin day";
    }
    writeMsg(msg){
        this.msg = msg;
    }
    sendMsg(moble) {
        moble.takeMsg(this.msg);
        this.outbox.push(this.msg);
    }
    takeMsg(msg){
        this.inbox.push(msg);
    }
}