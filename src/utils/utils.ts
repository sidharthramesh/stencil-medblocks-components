export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const hookSet = (element: HTMLElement, property: string, fn: Function) => {
  var superProps = Object.getPrototypeOf(element);
  var superSet = Object.getOwnPropertyDescriptor(superProps, property).set;
  var superGet = Object.getOwnPropertyDescriptor(superProps, property).get;
  var newProps = {
    get: function () {
      return superGet.apply(this, arguments);
    },
    set: function () {
      setTimeout(() => {
        fn()
      }, 50);
      return superSet.apply(this, arguments);
    }
  };
  Object.defineProperty(element, "value", newProps)

}