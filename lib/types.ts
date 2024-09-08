export enum carouselComponentType {
    properties,
    review,
    faqs
}

export type carouselPropsType = {
    data : any,
    variant: keyof typeof carouselComponentType
}