export function debounce<T extends (...args: any[]) => any>(
    recall: T,
    waitTime: number
): (...args: Parameters<T>) => void {
    let timer: number
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            recall()
        }, waitTime)
    }
}