export function lazyLoadComponent(lazyModule) {
    return (location, cb) => {
        lazyModule(module => cb(null, module))
    }
}
export function loadComponent(module) {
    return global.window
        ? lazyLoadComponent(module)
        : (location, cb) => cb(null, module);
}