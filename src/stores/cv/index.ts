import { observable, computed, action } from 'mobx'

export class Store implements CvStore {
  @observable private _isOpen = false

  @action
  setIsOpen = (value: boolean): void => {
    this._isOpen = value
  }

  @computed
  get isOpen(): boolean {
    return this._isOpen
  }
}

export { Store as CvStore }
