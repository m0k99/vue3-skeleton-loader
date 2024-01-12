import {types} from "@/util/skeletonTypes";

export function computeComponents(type: any) {
    const checkedNameFormat = checkNameFormat(type)
    return checkTypeName(checkedNameFormat)
}

//
export function checkNameFormat(type: string): string {
    return type.match(/^[^\s@]+(?:@\d+(?:\.\d+)?)?$/) ? type : ''
}

//
export function checkTypeName(type: string) {
    const typesList: string[] = Object.keys(types)
    const [skeletonName, countString = '1'] = type.split('@');
    const bonesCount = parseInt(countString);
    return typesList.includes(skeletonName) ? {name: type, skeletonName, bonesCount} : {}
}
