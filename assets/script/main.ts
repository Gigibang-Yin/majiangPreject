import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import globalMgr from './common/globalMgr'
const { ccclass, property } = _decorator;


@ccclass("main")
export class main extends Component {
  @property(Prefab)
  loginPrefab: Prefab = null;
  @property(Prefab)
  hallPrefab: Prefab = null
  @property
  private CurrentNode = null
  onLoad() {
    this.node.on('loginToMain', (res)=> {
      console.log('检测到了点击')
      this.instantiateNode(this.hallPrefab)
    })
    this.instantiateNode(this.loginPrefab)
    globalMgr.MessageMgr.connectServer().then((res)=>{
        console.log('网络连接成功',res)
    }).catch(() => {
        console.log('网络连接失败')
    })

  }
  start() {}
  instantiateNode(prefab) {
    if(this.CurrentNode) {
      this.CurrentNode.destroy()
    }
    let nodePrefab = instantiate(prefab)
    this.node.addChild(nodePrefab)
    this.CurrentNode = nodePrefab
  }
  update(deltaTime: number) {}
}
