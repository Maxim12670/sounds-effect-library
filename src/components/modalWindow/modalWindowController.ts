
export default class ModalWindowControllert {
  private readonly openBtn: HTMLElement | null
  private readonly closeBtn: HTMLElement | null
  private readonly modalWindow: HTMLElement | null
  private readonly classStyle: string

  constructor (private _openBtn: string,
    private _closeBtn: string,
    private _modalWindow: string,
    private _classStyle: string) {
    this.openBtn = document.querySelector(this._openBtn)
    this.closeBtn = document.querySelector(this._closeBtn)
    this.modalWindow = document.querySelector(this._modalWindow)
    this.classStyle = this._classStyle
    this.init()
  }

  init () {
    console.log(444)
    console.log('')
    this.openBtn!.onclick = this.openWindow
    this.closeBtn!.onclick = this.closeWindow
    window.onclick = this.checkClick
    console.log(window)
  }

  closeWindow = () => {
    console.log(222)
    setTimeout(() => {
      this.modalWindow?.classList.remove(this.classStyle)
    })
  }

  openWindow = () => {
    console.log(111)
    this.modalWindow?.classList.add(this.classStyle)
  }

  checkClick = (e: MouseEvent) => {
    console.log(333)
    const target = (e.target as HTMLElement)
    if ((!target.closest('.j-filters')) && (target !== this.openBtn)) {
      this.closeWindow()
    }
  }
}
