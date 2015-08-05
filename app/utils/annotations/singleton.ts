export function Singleton(target) {
    target._canCreate = false;
    target._instance = undefined;
}