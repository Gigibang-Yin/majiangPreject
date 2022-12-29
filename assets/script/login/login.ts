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
        globalMgr.MessageMgr.senLoginMsg(1)
        console.log("test1");
        break;
      case "test2":
        globalMgr.MessageMgr.senLoginMsg(2)
        console.log("test2");
        break;
      case "test3":
        globalMgr.MessageMgr.senLoginMsg(3)
        console.log("test3");
        break;
      case "test4":
        globalMgr.MessageMgr.senLoginMsg(4)
        console.log("test4");
        break;
    }
  }
}
