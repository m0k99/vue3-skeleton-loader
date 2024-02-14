export interface SkeletonLoaderProps {
    loading: boolean;
    type: (string);
    animation: string;
    duration: string;
    baseColor: string;
    highlightColor: string;
    borderRadius: string | number;
    height: string | number;
    width: string | number;
    timingFunction: string;
    direction: string;
    containerClassName: string;
    containerStyle: object | any;
    skeletonStyle: object;
    skeletonClassName: string;
}

export interface SkeletonStyle {
    'border-radius'?: string | number;
    'height'?: string | number;
    'width'?: string | number;
    'margin'?: string | number;
}

