export interface SkeletonLoaderProps {
    loading: boolean;
    type: (string);
    animation: string;
    duration: number;
    baseColor: string;
    highlightColor: string;
    borderRadius: string | number;
    height: string | number;
    width: string | number;
    direction: string;
    containerClassName: string;
    containerStyle: object | any;
    skeletonStyle: object;
    skeletonClassName: string;

}
