import {BoneProps, SkeletonStyle} from "@/types/BoneStyle";
import {types} from '@/util/skeletonTypes'

export function makeStyle(props: BoneProps): SkeletonStyle {
    const {
        type,
        duration,
        baseColor,
        animation,
        highlightColor,
        borderRadius,
        height,
        width
    } = props
    const styles: SkeletonStyle = {};
    styles['--duration'] = `${duration}s`
    styles['--baseColor'] = baseColor
    styles['--highlightColor'] = highlightColor
    styles['--animation'] = animation
    styles['--borderRadius'] = borderRadius || types[type as keyof typeof types].borderRadius
    styles['--height'] = height || types[type as keyof typeof types].height
    styles['--width'] = width || types[type as keyof typeof types].width
    styles['--margin'] = types[type as keyof typeof types].margin
    return styles
}


