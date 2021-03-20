import { Component, h, Prop, State, Element, Host } from "@stencil/core";

@Component({ tag: 'mb-repeatable' })
export class Repeatable {
    @Prop() number: number
    @State() slotConcent: HTMLElement
    @Element() el: HTMLElement

    async connectedCallback() {
        this.slotConcent = this.el.querySelector('[slot=content]')
    }
    getElements = () => {
        return [...Array(this.number)].map(() => { this.slotConcent.outerHTML })
    }
    render() {
        // const all = [...Array(34)].map(() => this.slotConcent)
        return <Host>
            <div style={{ display: "none" }}>
                <slot name="content" />
            </div>
            {this.getElements()}
            <slot name="add" />
        </Host>


    }

}