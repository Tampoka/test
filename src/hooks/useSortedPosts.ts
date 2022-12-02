import {PostType} from '../types/post';
import {useMemo} from 'react';

export const useSortedPosts = (posts: PostType[]) => {
    const sortedPosts = useMemo(() => {
            return [...posts].sort((a, b) => a['displayOrder'] - (b['displayOrder']))
        }
        , [posts])
    return sortedPosts
}