export interface IDispatchEvent {
    dispatch: (eventName: string, info: any) => void;
}

export interface IListenEvent {
    listen: (eventName: string, callback: Function) => void;
}
