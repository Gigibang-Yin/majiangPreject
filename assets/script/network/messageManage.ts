class MessageMgr {
    public _ws = undefined
    public _callBackMap = null
    constructor() {
        this._callBackMap = {}
    }
    connectServer() {
        let self = this
        return new Promise((resolve,reject) => {
            let ws = new WebSocket("ws://127.0.1:9500")
            ws.onopen = function (evt) {
              console.log("Connection open ...")
              resolve(evt)
              self._ws = ws
            }
        
            ws.onmessage =function  (data) {
              console.log("Received Message: " + data.data)
              let message = JSON.parse(data.data)
              let type = message.type
              let messageData = message.data
              self.rspMessage(type,messageData)
            }
        
            ws.onclose = function (evt) {
              console.log("Connection closed.",evt)
            }
            
            ws.onerror = function() {
                console.log('网络连接失败')
                reject()
            }
        })
    }
    rspMessage(type,messageData) {
        let cb = this._callBackMap[type]
        if(cb) {
            cb(messageData)
        }
    }
    senLoginMsg(id: number) {
        return new Promise((reslove,reject) => {
            this.sendMsg('login', id, (result) => {
                console.log('进来了——————')
                if(result.err) {
                    reject(result.err)
                } else {
                    reslove(result)
                }
            })
        })
    }
    sendCreateRootMessage(roomData) {
        return new Promise((reslove,reject) => {
            this.sendMsg('create_room', roomData, (result) => {
                if(result.err) {
                    console.log('reject')
                    reject(result.err)
                } else {
                    console.log('reslove')
                    reslove(result)
                }
            })
        })
    }
    sendMsg (type: string, data, callback) {
        let tempData = {
            type: type,
            data: data
        }
        this._callBackMap[type] = callback
        this._ws.send(JSON.stringify(tempData))
    }

}
export default MessageMgr