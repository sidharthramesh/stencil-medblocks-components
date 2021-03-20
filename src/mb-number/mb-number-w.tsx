import { Component, h, Event, EventEmitter, Prop, State, Listen, Element, Watch } from '@stencil/core';

@Component({
    tag: 'mb-number-w',
})
export class NumberWrapper {

    @Prop() path: string
    @Prop() value: number
    @Prop() presicion: number = 2
    @Prop() selector: string = 'input[type=number]'
    @Element() el: HTMLElement

    @Watch('value')
    valueChange() {
        this.inputElement.value = this.value === null || typeof this.value === 'undefined' ? '' : this.value.toString()
    }
    private convertNumber(value) {
        return value ? parseFloat(value) : undefined
    }
    @Listen('input')
    inputChange() {
        console.log("emitting mbInput")
        const value = this.convertNumber(this.inputElement.value)
        this.mbInput.emit({ [this.path]: value })
    }

    @Event({ eventName: 'mbinput' }) mbInput: EventEmitter

    @State() inputElement: HTMLInputElement

    async connectedCallback() {
        const observer = new MutationObserver(() => {
            this.inputElement = this.el.querySelector(this.selector)
            if (!this.inputElement) {
                console.error(`mb-number-w [${this.path}]: No child element found for selector "${this.selector}"`)
            }
        });
        observer.observe(this.el, { attributes: false, childList: true, subtree: true });
    }
    render() {
        return <slot></slot>
    }
}