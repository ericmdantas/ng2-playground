export declare type StorageOptions = {
    storage: string;
};
export interface IParseStorage {
    _toStringifiedJSON(info: any): any;
    _fromStringifiedJSON(info: any): any;
    _parseOptions(opts: Object): StorageOptions;
}
export interface IAddStorage {
    save(key: string, info: any, opts?: StorageOptions): void;
    saveInFirstPosition(key: string, info: any, opts?: StorageOptions): void;
    saveInLastPosition(key: string, info: any, opts?: StorageOptions): void;
}
export interface IGetStorage {
    get(key: string, opts?: StorageOptions): any;
    getFirst(key: string, opts?: StorageOptions): any;
    getLast(key: string, opts?: StorageOptions): any;
}
export interface IRemoveStorage {
    remove(key: string, opts?: StorageOptions): void;
    removeFirst(key: string, opts?: StorageOptions): void;
    removeLast(key: string, opts?: StorageOptions): void;
    removeAll(opts?: StorageOptions): void;
}
export declare class Xtorage implements IAddStorage, IGetStorage, IRemoveStorage, IParseStorage {
    storage: string;
    unique: boolean;
    constructor(st?: string, unique?: boolean);
    _toStringifiedJSON(info: any): any;
    _fromStringifiedJSON(info: any): any;
    _parseOptions(opt?: StorageOptions): StorageOptions;
    save(key: string, info: any, opt?: StorageOptions): void;
    private _saveInArray(key, info, method, opt?);
    saveInFirstPosition(key: string, info: any, opt?: StorageOptions): void;
    saveInLastPosition(key: string, info: any, opt?: StorageOptions): void;
    get(key: string, opt?: StorageOptions): any;
    private _getFromArray(key, position, opt?);
    getFirst(key: string, opt?: StorageOptions): any;
    getLast(key: string, opt?: StorageOptions): any;
    remove(key: string, opt?: StorageOptions): void;
    private _removeFromArray(key, method, opt?);
    removeFirst(key: string, opt?: StorageOptions): void;
    removeLast(key: string, opt?: StorageOptions): void;
    removeAll(opt?: StorageOptions): void;
}
