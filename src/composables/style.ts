import {SkeletonStyle} from "@/types";
import {types} from '@/util/skeletonTypes'

export function makeStyle(props: {
    borderRadius: string | number;
    width: string | number;
    type: any;
    height: string | number
}): SkeletonStyle {
    const {
        type,
        borderRadius,
        height,
        width
    } = props
    const styles: SkeletonStyle = {};
    styles['border-radius'] = borderRadius || types[type as keyof typeof types].borderRadius
    styles['height'] = height || types[type as keyof typeof types].height
    styles['width'] = width || types[type as keyof typeof types].width
    styles['margin'] = types[type as keyof typeof types].margin
    return styles
}


