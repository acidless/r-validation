export function minLength(length: number, onFailMessage?: string) {
    return function (value: string) {
        return value.length < length ? onFailMessage || `Minimum field length - ${length} symbols.` : undefined;
    };
}

/*====================*/

export function maxLength(length: number, onFailMessage?: string) {
    return function (value: string) {
        return value.length > length ? onFailMessage || `Maximum field length - ${length} symbols.` : undefined;
    };
}


