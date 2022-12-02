import {instance} from './posts-api-config';
import {PostType} from '../../types/post';

export const postsApi = {
    getPosts() {
        return instance.get<ResponseType>('photo')
    }
}

export type ResponseType = {
    contents: Array<PostType>
    totalCount: number
    offset: number
    limit: 10
}