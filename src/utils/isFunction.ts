export function isFunction(obj: any): obj is Function {
  return typeof obj === "function";
}

// USE: isFunction(defaultValue) ? true : false
