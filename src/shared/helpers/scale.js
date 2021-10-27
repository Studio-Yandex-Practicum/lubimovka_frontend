const defaults = {
  customProperty: '--scale'
};

const scale = (options) => (values) => {
  const { customProperty } = { ...defaults, ...options };

  return values.replace(/(\d*\.?\d+)px/gi, `calc(var(${customProperty}) * $1)`);
};

// eslint-disable-next-line no-undef
module.exports = scale;
