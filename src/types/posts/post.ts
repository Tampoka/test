export type PostType = {
    id: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
    title: string
    description: string
    image: ImageType
    displayOrder: number
}

export type ImageType = {
    url: string
    height: string
    width: string
}
