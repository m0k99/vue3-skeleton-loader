export interface SkeletonStyle {
    '--duration'?: string;
    '--baseColor'?: string;
    '--highlightColor'?: string;
    '--borderRadius'?: string | number;
    '--height'?: string | number;
    '--width'?: string | number;
    '--margin'?: string | number;
    '--animation'?: string;
}

export interface BoneProps {
    type: string;
    duration: number;
    baseColor: string;
    highlightColor: string;
    borderRadius: string | number;
    height: string | number;
    width: string | number;
    animation: string;
}
