import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let result = null
    let lowPoint = 0
    let highPoint = items.length -1
    let midPoint;
    while (result === null) {
        midPoint = Math.floor((lowPoint + highPoint) / 2);
        if (item === items[midPoint]) {
            result = midPoint
        } else if (lowPoint === highPoint) {
            result = NO_MATCH;
        } else if (item > items[midPoint]) {
            if (midPoint === 0) {
                result = NO_MATCH;
            }
            lowPoint = midPoint +1
        } else if (item < items[midPoint]) {
            if (midPoint === items.length - 1) {
                result = NO_MATCH;
            }
            highPoint = midPoint - 1
        }
    }
    return result
}
export default binarySearch;