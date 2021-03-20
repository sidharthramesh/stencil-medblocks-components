import { Component, h, Event, EventEmitter, Prop, State, Listen, Element, Watch } from '@stencil/core';

@Component({
    tag: 'mb-text-w',
})
export class TextWrapper {

    @Prop() path: string
    @Prop() value: string
    @Prop() selector: string = 'input[type=text]'
    @Element() el: HTMLElement

    @Watch('value')
    valueChange() {
        this.inputElement.value = this.value === null || typeof this.value === 'undefined' ? '' : this.value
    }

    @Listen('input')
    inputChange() {
        const value = this.inputElement.value
        this.mbInput.emit({ [this.path]: value })
    }

    @Event({ eventName: 'mbinput' }) mbInput: EventEmitter

    @State() inputElement: HTMLInputElement

    async connectedCallback() {
        const observer = new MutationObserver(() => {
            const selected: NodeListOf<HTMLInputElement> = this.el.querySelectorAll(this.selector)
            if (selected.length === 0) {
                console.error(`mb-text-w [${this.path}]: No child element found for selector "${this.selector}"`)
            }

            if (selected.length > 1) {
                console.error(`mb-text-w [${this.path}]: Multiple elements found for selector "${this.selector}". Choosing first match.`)
            }
            this.inputElement = selected[0]
        });
        observer.observe(this.el, { attributes: false, childList: true, subtree: true });
    }
    render() {
        return <slot></slot>
    }
}