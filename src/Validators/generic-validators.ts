export function required(onFailMessage?: string) {
    return function (value: string){
        return value.toString().trim().length === 0 ? onFailMessage || "This field is required." : undefined;
    }
}

/*====================*/

export function match(regExp: RegExp, onFailMessage?: string) {
    return function (value: string) {
        return !regExp.test(value) ? onFailMessage || "Invalid data format." : undefined;
    };
}