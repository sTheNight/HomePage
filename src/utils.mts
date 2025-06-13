export function debounce(recall: Function, waitTime: number) {
    let timer: number
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            recall()
        }, waitTime)
    }
}