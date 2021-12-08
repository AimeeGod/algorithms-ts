import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    let output_list = items;
    for(let i = (items.length); i > 0; i--){
        let swap_made:boolean = false

        for (let j = 0; j<items.length-1; j++){
            if(output_list[j] > output_list[j+1]){
                swap_made= true
                swap(output_list, j, j+1)
            }
        }
        if (swap_made = false){
            break
        }
    }
    return items;
}

export default bubbleSort;