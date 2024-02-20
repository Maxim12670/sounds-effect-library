import { EventEnums } from '../../../../../../utils/enums/eventEnums'

export class PopupBlockController {
  private readonly buttons: HTMLButtonElement[] | null;
  private readonly popup: HTMLElement | null;

  constructor (private container: HTMLSelectElement) {
    this.buttons = this.container.querySelectorAll('.j-example-popup-button')
    this.popup = this.container.querySelector('.j-example-popup')
    this.initButton()
  }

  initButton () {
    if (this.buttons) {
      this.buttons.forEach(button => {
        button.onclick = () => {
          this.popup?.dispatchEvent(new Event(EventEnums.OPEN))
        }
      })
    }
  }

  // initButton () {
  //   if (this.button) {
  //     this.button.onclick = () => {
  //       this.popup?.dispatchEvent(new Event(EventEnums.OPEN))
  //     }
  //   }
  // }
}
