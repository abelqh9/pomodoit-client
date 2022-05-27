export function objIsEmpty(obj) {
    if (!obj) {console.warn("NO HA LLEGADO NINGUN OBJETO"); return true}
    return (Object.values(obj).length === 0) ? true : false 
}