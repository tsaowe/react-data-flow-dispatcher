/**
 * Created by tsaowe on 16/5/26.
 * 
 * this is redux error.js
 */
export default function warning(message) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message)
    }
    try {
        throw new Error(message)
    } catch (e) { }
}