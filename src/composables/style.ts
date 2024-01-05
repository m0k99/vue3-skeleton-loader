import {BoneProps, SkeletonStyle} from "@/types/BoneStyle";
import {types} from '@/util/skeletonTypes'

export function makeStyle(props: BoneProps): SkeletonStyle {
    const {
        type,
        duration,
        baseColor,
        highlightColor,
        borderRadius,
        height,
        width
    } = props
    const styles: SkeletonStyle = {};
    styles['--duration'] = `${duration}s`
    styles['--baseColor'] = baseColor
    styles['--highlightColor'] = highlightColor
    styles['--borderRadius'] = borderRadius || types[type as keyof typeof types].borderRadius
    styles['--height'] = height || types[type as keyof typeof types].height
    styles['--width'] = width || types[type as keyof typeof types].width
    styles['--marginBottom'] = types[type as keyof typeof types].marginBottom
    return styles
}


