import { _decorator, Component, Node, Prefab, Label, instantiate } from "cc";
import globalMgr from "../common/globalMgr";
const { ccclass, property } = _decorator;

@ccclass("hallNode")
export class hallNode extends Component {
  @property(Label)
  idLabl: Label;
  @property(Label)
  nickNameLabel: Label;
  @property(Label)
  houseCardCount: Label;
  @property(Prefab)
  createRoomPrefab: Prefab
  onLoad() {
    this.init();
  }
  start() {}

  update(deltaTime: number) {}
  init() {
    this.idLabl.string = "ID:" + globalMgr.userData._id;
    this.nickNameLabel.string = "" + globalMgr.userData._nickName;
    this.houseCardCount.string = "" + globalMgr.userData._houseCardCount;
  }

  onButtonClick(event, custom) {
    switch (custom) {
      case "create":
        console.log('创建房间')
        let createNode = instantiate(this.createRoomPrefab)
        this.node.addChild(createNode)
        break;
      case "join":
        console.log('加入房间')
        break;
      case "":
        break;
    }
  }
}
