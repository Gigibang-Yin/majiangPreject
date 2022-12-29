import MessageMgr from "../network/messageManage";
import { userData } from "./userData";
const globalMgr = {
    MessageMgr: new MessageMgr,
    userData: userData.getInstance(),
}
export default globalMgr