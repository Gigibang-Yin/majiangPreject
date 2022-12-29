import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("createRoom")
export class createRoom extends Component {
  start() {}

  update(deltaTime: number) {}

  onButtonClick(event, custom) {
    switch (custom) {
      case "confirm":
        this.node.destroy()
        break;
      case "close":
        this.node.destroy()
        break;
    }
  }
}
