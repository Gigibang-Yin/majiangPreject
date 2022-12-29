import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import globalMgr from './common/globalMgr'
const { ccclass, property } = _decorator;


@ccclass("main")
export class main extends Component {
  @property(Prefab)
  loginPrefab: Prefab = null;
  onLoad() {
    let loginModuel = instantiate(this.loginPrefab);
    this.node.addChild(loginModuel);
    globalMgr.MessageMgr.connectServer().then((res)=>{
        console.log('网络连接成功',res)
    }).catch(() => {
        console.log('网络连接失败')
    })

  }
  start() {}

  update(deltaTime: number) {}
}
