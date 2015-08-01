'use strict';

class Rule {
  constructor (selector, attributes = {}, options = {})  {
    this.selector = selector;
    this.attributes = attributes;
    this.options = options;

    rules.push(this);
  }

  output (prop, val) {
    let ret = '';

    if ( typeof val === 'string' ) {
      ret += `  ${prop}: ${val};\n`;
    }
    else if ( typeof val === 'object' ) {
      for ( let prop in val ) {
        ret += this.output(prop, val[prop]);
      }
    }

    return ret;
  }

  toString () {
    if ( this.options.render === false ) {
      return '';
    }

    let output = `${this.selector} {\n`;

    for ( let rule in this.attributes ) {
      output += this.output(rule, this.attributes[rule]);
    }

    output += '}';

    return output;
  }
}

export default Rule;
