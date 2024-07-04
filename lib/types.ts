export enum carouselComponentType {
    properties,
    review
}

export type carouselPropsType = {
    data : any,
    variant: keyof typeof carouselComponentType
}