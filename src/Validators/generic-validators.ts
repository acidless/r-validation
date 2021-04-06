export function required(onFailMessage?: string) {
  return function (value: any) {
    return value.toString().trim().length === 0
      ? onFailMessage || "This field is required."
      : undefined;
  };
}

/*====================*/

export function match(regExp: RegExp, onFailMessage?: string) {
  return function (value: any) {
    return !regExp.test(value)
      ? onFailMessage || "Invalid data format."
      : undefined;
  };
}

/*====================*/

export function inEnum(array: any[], onFailMessage?: string) {
  return function (value: any) {
    return !array.filter((item) => item === value).length
      ? onFailMessage || "Value must be in enum"
      : undefined;
  };
}
