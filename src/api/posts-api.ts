import {instance} from './config';
import {PostType} from '../types/types';

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