export function minValue(min: number, onFailMessage?: string) {
  return function (value: string | number) {
    return +value < min
      ? onFailMessage || `Minimum field length - ${min}.`
      : undefined;
  };
}

/*====================*/

export function maxValue(max: number, onFailMessage?: string) {
  return function (value: string | number) {
    return +value > max
      ? onFailMessage || `Maximum field length - ${max}.`
      : undefined;
  };
}
