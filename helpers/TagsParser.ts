export const TagsParser = (tags: string): string => {

    let arr: string[] = tags.trim().split(" ");
    let result = ""
    for(let i = 0; i < arr.length; i++) {
        if(i===arr.length-1) {
            result = result + arr[i].trim();
        }
        else if(arr[i] === " " || arr[i] === "") {
            continue
        }
        else {
            result = result + arr[i].trim() + "%20"
        }
    }
    return result
}
