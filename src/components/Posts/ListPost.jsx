import React, {useEffect, useState} from 'react';
import './index.css'
import Post from './Post'

function ListPost() {

    const mockupPosts = [
        {
            post_id: '1',
            name: 'Victoria del Pilar Santamaría',
            avatar: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg',
            status: 'Following',
            bio: 'UI/UX | Figma | SCRUM Master',
            time: '3d',
            status_post:'Edited',
            content: 'Es una gran oportunidad para avanzar en mi carrera. Me emociona contarles que he sido asignada como Scrum Master de mi empresa.',
            file: '',
            totalReactions: 26,
            totalComments: 47,
            totalShares: 2
        },
        {
            post_id: '2',
            name: 'Amanda Carolina Castañeda',
            avatar: 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959__340.jpg',
            status: 'Following',
            bio: 'Co Founder de TPC | Diseñadora Gráfica',
            time: '1w',
            status_post:'',
            content: 'Les comparto uno de mis últimos diseños para niños.',
            file: 'https://cdn.pixabay.com/photo/2019/03/22/09/38/unicorn-4072862__340.png',
            totalReactions:12,
            totalComments: 29,
            totalShares: 2
        },
        {
            post_id: '3',
            name: 'Diego Torres',
            avatar: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg',
            status: 'Following',
            bio: 'Profesor | Egresado de la Universidad Nacional de Colombia',
            time: '2hrs',
            status_post:'',
            content: 'La enseñanza es el pilar fundamental del crecimiento universal.',
            file: 'https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909__340.jpg',
            totalReactions: 1200,
            totalComments: 2,
            totalShares: 24
        }
    ]

    const [posts, setPosts] = useState(mockupPosts);

    return (
        <div className="listPosts">
            {posts.map((post) => (
                <Post post={post}/>
            ))}
        </div>
    );
}

export default ListPost;