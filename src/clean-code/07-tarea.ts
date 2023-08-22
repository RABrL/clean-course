;(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps
    extends InputAttributes,
      Omit<HtmlElement, 'type'> {}

  class InputElement {
    public html: HtmlElement
    public attributes: InputAttributes
    public events: InputEvents

    constructor({ id, placeholder, value }: InputElementProps) {
      this.html = new HtmlElement(id, 'input')
      this.attributes = new InputAttributes(value, placeholder)
      this.events = new InputEvents()
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({
    id: 'name',
    placeholder: 'Nombre',
    value: 'Fernando Gonzales'
  })

  console.log({ nameField })
})()
