type Size = '' | 'S' | 'M' | 'L' | 'XL'

class Product {
  constructor(public name: string = '', public price : number, public size: Size = ''){}

  productIsReady():boolean{
    for(const prop in this){
      switch(typeof this[prop]){
        case 'string':
          if ( (<string><unknown>this[prop]).length <= 0 ) throw Error(`${ prop } is empty`);
          break
        case 'number':
          if ( (<number><unknown>this[prop]) <= 0 ) throw Error(`${ prop } is zero`);
          break
        default:
          throw Error(`${ typeof this[prop] } is not valid`);
      }
    }
    return true
  }

  toString() {
    // No DRY
   /*  if(this.name === '') throw Error('Name is empty')
    if(this.price <= 0) throw Error('Price is not valid')
    if(this.size === '') throw Error('Size is empty') */
    if(!this.productIsReady()) return
    return `${ this.name } (${ this.price }), ${ this.size }`
  }
}

(()=> {
  const bluePants = new Product('Blue large pants', 10, 'M')
  console.log(bluePants.toString())
})()