import { observable, computed } from 'mobx'

export class Store implements CvStore {
  @observable private _isOpen = false

  @computed
  get isOpen(): boolean {
    return this._isOpen
  }

  set isOpen(value: boolean) {
    this._isOpen = value
  }
}

export { Store as CvStore }
