/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MbN {
    }
    interface MbNumberW {
        "path": string;
        "presicion": number;
        "selector": string;
        "value": number;
    }
    interface MbRepeatable {
        "number": number;
    }
    interface MbTemplate {
        "mbdata": { [path: string]: any };
        "selector": string;
    }
    interface MbTextW {
        "path": string;
        "selector": string;
        "value": string;
    }
}
declare global {
    interface HTMLMbNElement extends Components.MbN, HTMLStencilElement {
    }
    var HTMLMbNElement: {
        prototype: HTMLMbNElement;
        new (): HTMLMbNElement;
    };
    interface HTMLMbNumberWElement extends Components.MbNumberW, HTMLStencilElement {
    }
    var HTMLMbNumberWElement: {
        prototype: HTMLMbNumberWElement;
        new (): HTMLMbNumberWElement;
    };
    interface HTMLMbRepeatableElement extends Components.MbRepeatable, HTMLStencilElement {
    }
    var HTMLMbRepeatableElement: {
        prototype: HTMLMbRepeatableElement;
        new (): HTMLMbRepeatableElement;
    };
    interface HTMLMbTemplateElement extends Components.MbTemplate, HTMLStencilElement {
    }
    var HTMLMbTemplateElement: {
        prototype: HTMLMbTemplateElement;
        new (): HTMLMbTemplateElement;
    };
    interface HTMLMbTextWElement extends Components.MbTextW, HTMLStencilElement {
    }
    var HTMLMbTextWElement: {
        prototype: HTMLMbTextWElement;
        new (): HTMLMbTextWElement;
    };
    interface HTMLElementTagNameMap {
        "mb-n": HTMLMbNElement;
        "mb-number-w": HTMLMbNumberWElement;
        "mb-repeatable": HTMLMbRepeatableElement;
        "mb-template": HTMLMbTemplateElement;
        "mb-text-w": HTMLMbTextWElement;
    }
}
declare namespace LocalJSX {
    interface MbN {
    }
    interface MbNumberW {
        "onMbinput"?: (event: CustomEvent<any>) => void;
        "path"?: string;
        "presicion"?: number;
        "selector"?: string;
        "value"?: number;
    }
    interface MbRepeatable {
        "number"?: number;
    }
    interface MbTemplate {
        "mbdata"?: { [path: string]: any };
        "onMbchange"?: (event: CustomEvent<any>) => void;
        "selector"?: string;
    }
    interface MbTextW {
        "onMbinput"?: (event: CustomEvent<any>) => void;
        "path"?: string;
        "selector"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "mb-n": MbN;
        "mb-number-w": MbNumberW;
        "mb-repeatable": MbRepeatable;
        "mb-template": MbTemplate;
        "mb-text-w": MbTextW;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mb-n": LocalJSX.MbN & JSXBase.HTMLAttributes<HTMLMbNElement>;
            "mb-number-w": LocalJSX.MbNumberW & JSXBase.HTMLAttributes<HTMLMbNumberWElement>;
            "mb-repeatable": LocalJSX.MbRepeatable & JSXBase.HTMLAttributes<HTMLMbRepeatableElement>;
            "mb-template": LocalJSX.MbTemplate & JSXBase.HTMLAttributes<HTMLMbTemplateElement>;
            "mb-text-w": LocalJSX.MbTextW & JSXBase.HTMLAttributes<HTMLMbTextWElement>;
        }
    }
}
