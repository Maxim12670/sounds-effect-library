import './style.scss'

import { EventEnums } from '../../utils/enums/eventEnums'

class FormPageController {
  private readonly form: HTMLFormElement | null;
  private readonly fieldset: HTMLFieldSetElement | null;
  private formAutocomplete: HTMLFormElement | null;
  private inputAutocomplete: HTMLInputElement | null;
  timeout: ReturnType<typeof setTimeout> | undefined
  delay = 500

  constructor (container: HTMLElement) {
    this.form = container.querySelector('form')
    this.fieldset = container.querySelector('fieldset')
    this.formAutocomplete = container.querySelector('form.j-autocomplete')
    this.inputAutocomplete = container.querySelector('.j-autocomplete-input')
    this.initForm()
    this.initAutocomplete()
  }

  initAutocomplete () {
    this.inputAutocomplete?.addEventListener(EventEnums.INPUT, this.submitDelay)
  }

  submitDelay = () => {
    if (this.timeout) clearTimeout(this.timeout)
    if (this.formAutocomplete) {
      this.timeout = setTimeout(() => {
        this.formAutocomplete?.dispatchEvent(new Event(EventEnums.SUBMIT))
      }, this.delay)
    }
  }

  initForm () {
    if (!this.form) return
    this.form.addEventListener(EventEnums.LOADING, this.onLoading)
    this.form.addEventListener(EventEnums.SUCCESS, this.onSuccess)
    this.form.addEventListener(EventEnums.ERROR, this.onError)
  }

  onLoading = (e: CustomEvent | Event) => {
    if (e instanceof CustomEvent) {
      if (e.detail) {
        if (this.fieldset) this.fieldset.disabled = true
      } else {
        if (this.fieldset) this.fieldset.disabled = false
      }
    }
  }

  onSuccess = () => {
    alert('success')
  }

  onError = (e: CustomEvent | Event) => {
    if (e instanceof CustomEvent && e.detail) {
      alert(e.detail)
    } else {
      alert('error')
    }
  }
}

(() => {
  document.querySelectorAll('.j-form-page').forEach(container => new FormPageController(container as HTMLElement))
})()
