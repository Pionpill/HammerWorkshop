class Contact {
  /** 编号 */
  readonly id: string | number;
  /** 名称 */
  readonly name;
  /** 访问链接 */
  readonly link;

  constructor(id: string | number, name: string, link: string) {
    this.id = id;
    this.name = name;
    this.link = link;
  }

  /** 跳转到对应界面 */
  jumpTo = () => {
    window.open(this.link);
  };
}

export default Contact;
