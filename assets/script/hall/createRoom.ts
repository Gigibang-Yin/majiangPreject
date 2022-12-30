import { _decorator, Component, Node } from "cc";
import globalMgr from "../common/globalMgr";
const { ccclass, property } = _decorator;

@ccclass("createRoom")
export class createRoom extends Component {
    @property
    private roomData = {}
    onLoad() {
        this.roomData = {
            playerNumber: 4,
            gameNumber: 4
        }
    }
  start() {}

  update(deltaTime: number) {}

  onButtonClick(event, custom) {
    switch (custom) {
      case "confirm":
        let roomData = undefined
        globalMgr.MessageMgr.sendCreateRootMessage(roomData).then((res) => {
            console.log('创建房间成功',res)
        }).catch(() => {
            console.log('创建房间失败')
        })
        this.node.destroy()
        break;
      case "close":
        this.node.destroy()
        break;
    }
  }
}
