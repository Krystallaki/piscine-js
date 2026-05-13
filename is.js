const is = {
  num: (v) => typeof v === 'number',
  nan: (v) => Number.isNaN(v),
  str: (v) => typeof v === 'string',
  bool: (v) => typeof v === 'boolean',
  undef: (v) => v === undefined,
  def: (v) => v !== undefined,
  arr: (v) => Array.isArray(v),
  obj: (v) => typeof v === 'object' && !Array.isArray(v),
  fun: (v) => typeof v === 'function',
  truthy: (v) => !!v,
  falsy: (v) => !v,
}
