
export function parseInputChange({ target: { type, name, checked, value } }) {
  return { [name]: type === 'checkbox' ? checked : value };
}

export function applyDecorators(Component, ...decorators) {
  if (!Component) {
    throw new Error('Check parameters in applyDecorators method');
  }
  return decorators.reverse().reduce((ret, [decorator, ...params]) => {
    if (!decorator) {
      throw new Error(`Check applyDecorators section with decorators for ${Component.name}`);
    }
    return decorator(...params)(ret);
  }, Component);
}

export function classnames(...conf) {
  if (conf.length === 1 && Array.isArray(conf[0])) {
    [conf] = conf;
  }
  return conf.map(item => {
    if (item) {
      const type = typeof item;
      if (['string', 'number'].includes(type)) {
        return item;
      }
      if (type === 'object') {
        if (Array.isArray(item)) {
          return classnames(...item);
        }
        return Object.keys(item).filter(key => item[key]).join(' ');
      }
    }
    return '';
  }).filter(Boolean).join(' ');
}
