import { Component, Prop, h, Element, State, Listen, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mb-template'
})
export class MedBlocksTemplate {

  @Prop() mbdata: { [path: string]: any };
  @Prop() selector: string = "[path]"

  @Element() el: HTMLElement

  @State() childElementsMap: { [path: string]: HTMLElement }

  @Event({ eventName: 'mbchange' }) mbchange: EventEmitter<any>

  @Listen('mbinput')
  mbInputChange(event: CustomEvent) {
    let nextValue = { ...this.mbdata };
    const detail = event.detail
    Object.keys(detail).forEach((path) => {
      if (Object.keys(this.childElementsMap).includes(path)) {
        nextValue[path] = detail[path]
      } else {
        nextValue[path] = undefined
      }
    })
    this.mbchange.emit(nextValue)
  }

  @Watch('mbdata')
  valueChange(newData, oldData) {
    console.log(newData, oldData)
    Object.entries(this.childElementsMap).forEach(([path, htmlElement]) => {
      (htmlElement as any).value = this.mbdata[path]
    })
  }

  async connectedCallback() {
    const observer = new MutationObserver(() => {
      const childElements = this.el.querySelectorAll(this.selector)
      if (childElements.length === 0) {
        console.error(`mb-template: No child elements found for selector "${this.selector}"`)
      }
      let map = {}
      childElements.forEach((el: any) => {
        const path = el.path
        if (Object.keys(map).includes(path)) {
          console.error(`${path} included twice. Only the last occurance will be considered.`)
        }
        map = { ...map, [el.path]: el }
      })
      this.childElementsMap = map
      let nextValue: { [path: string]: any } = {}
      const mapKeys = Object.keys(map)
      Object.keys(this.mbdata).forEach((path) => {
        const inChild = mapKeys.some(mapPath => mapPath.startsWith(path))
        if (inChild) {
          nextValue = { ...nextValue, [path]: this.mbdata[path] }
        }
      })
      if (JSON.stringify(nextValue) !== JSON.stringify(this.mbdata)) {
        this.mbchange.emit(nextValue)
      }
    });
    observer.observe(this.el, { childList: true, subtree: true });
  }


  render() {
    return <slot></slot>
  }
}
