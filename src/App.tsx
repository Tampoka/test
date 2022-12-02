import './App.css'
import {SettingsPanel} from './components/SettingsPanel/SettingsPanel';
import {PostsList} from './components/PostsList/PostsList';
import {PostType} from './types/types';
import {useEffect, useState} from 'react';
import {useFetching} from './hooks/useFetching';
import {postsApi} from './api/posts-api';
import {useSortedPosts} from './hooks/useSortedPosts';
import Loader from './components/Loader/Loader';


function App() {
    const [posts, setPosts] = useState<PostType[]>([])

    const sortedByDisplayOrderPosts = useSortedPosts(posts)

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await postsApi.getPosts()
        setPosts([...posts, ...response.data.contents])
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    // 代入してから呼び出し
    /*   useEffect(() => {
           const getPosts = async () => {
               await fetchPosts()
           }
           getPosts()
       }, [])*/

    return (
        <div className="App">
            {postsError &&
            (<h2>ERROR ${postsError}</h2>)
            }
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <Loader/>
            </div>
            }
            <PostsList posts={sortedByDisplayOrderPosts}/>
            <SettingsPanel/>
        </div>
    );
}

export default App;
