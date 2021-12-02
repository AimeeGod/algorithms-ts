import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let result: number = -1
    let lowPoint = 0
    let highPoint = items.length
    let midPoint;
    while (result === -1) {
        midPoint = Math.floor((lowPoint + highPoint) / 2);
        if (item === item[midPoint]) {
            result = midPoint
        } else if (lowPoint === highPoint) {
            result = NO_MATCH;
        } else if (item < items[midPoint]) {
            if (midPoint === 0) {
                result = NO_MATCH;
            }
            highPoint = midPoint - 1
        } else if (item > items[midPoint]) {
            if (highPoint === items.length - 1) {
                result = NO_MATCH;
            }
            lowPoint = midPoint +1
        }
    }
    return result
}
export default binarySearch;