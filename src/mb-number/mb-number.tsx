import { Component, Host, h, State } from "@stencil/core";


@Component(
    { tag: 'mb-n', shadow: true }
)
export class MedblocksNumber {
    @State() value: string = "4"
    render() {
        return <Host>
            <label>Hello there</label>
            <input type="number" />
        </Host>
    }
}