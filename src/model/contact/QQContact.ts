import Contact from "./base/Contact";

export enum QQType {
  USER,
  GROUP,
  CHANNEL,
}

/** QQ用户/群/频道信息 */
class QQContact extends Contact {
  /** 类型 */
  type: QQType;

  constructor(id: string | number, name: string, link: string, type: QQType) {
    super(id, name, link);
    this.type = type;
  }

  /** 获取头像链接 */
  get iconUrl() {
    switch (this.type) {
      case QQType.USER:
        return `http://q1.qlogo.cn/g?b=qq&nk=${this.id}&s=100`;
      case QQType.GROUP:
        return `https://p.qlogo.cn/gh/${this.id}/${this.id}/0`;
      default:
        return `https://p.qlogo.cn/gh/${this.id}/${this.id}/0`;
    }
  }

  /** type 对应的文案 */
  get typeLabel() {
    switch (this.type) {
      case QQType.USER:
        return "好友";
      case QQType.GROUP:
        return "群聊";
      default:
        return "频道";
    }
  }
}

export default QQContact;
