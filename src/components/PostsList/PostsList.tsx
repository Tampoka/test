import s from './PostsList.module.scss'
import {PostType} from '../../types/types';
import PostItem from '../PostItem/PostItem';

type PostsListPropsType = {
    posts: PostType[]
}
export const PostsList = ({posts}: PostsListPropsType) => {
    return (
        <div className={s.listWrapper}>
            <h2>投稿一覧</h2>
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

