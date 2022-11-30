import s from './PostItem.module.scss'
import {PostType} from '../../types/types';

type PostItemPropsType={
    post:PostType
}
const PostItem = ({post}:PostItemPropsType) => {
    const convertedResizedImageUrl=`${post.image.url}?width=500&fm=webp`
    return (
        <div className={s.itemWrapper}>
            <div className={s.card}>
                <img src={convertedResizedImageUrl} alt="post" width={335} height={160}/>
                <p className={s.title}>{post.title}</p>
                <p className={s.description}>{post.description}</p>
            </div>

        </div>
    );
};

export default PostItem;