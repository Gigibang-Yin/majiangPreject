import { _decorator, Component, Node } from "cc";
import globalMgr from "../common/globalMgr";
const { ccclass, property } = _decorator;

@ccclass("login")
export class login extends Component {
  start() {}

  update(deltaTime: number) {}

  onButtonClicket(target: Node, custom: string) {
    switch (custom) {
      case "tourist":
        console.log("游客登录");
        break;
      case "wetchat":
        globalMgr.MessageMgr.senLoginMsg(2)
        console.log("微信");
        break;
      case "test1":
        globalMgr.MessageMgr.senLoginMsg(10000).then((result:any) => {
          console.log('promise回调回来的参数是：',result)
            globalMgr.userData._id = result.id
            globalMgr.userData._houseCardCount = result.houseCardCount
            globalMgr.userData._nickName = result.nickName
            this.node.parent.emit('loginToMain')
        }).catch((err)=>{
          console.log(err)
        })
        console.log("test1");
        break;
      case "test2":
        globalMgr.MessageMgr.senLoginMsg(10001)
        console.log("test2");
        break;
      case "test3":
        globalMgr.MessageMgr.senLoginMsg(10002)
        console.log("test3");
        break;
      case "test4":
        globalMgr.MessageMgr.senLoginMsg(10003)
        console.log("test4");
        break;
    }
  }
}
