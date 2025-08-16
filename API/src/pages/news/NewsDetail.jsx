import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import './News.css'
import { useEffect } from 'react';

const NewsDetail = () => {
    // const {id} = useParams(); => url param
    const [params] = useSearchParams();// => query param
    const id = params.get('id');
    const listNews = [
        { title: 'bai viet 1', views: 2323, des: 'gioi thieu 1', id: 1 },
        { title: 'bai viet 2', views: 1919, des: 'gioi thieu 1', id: 2 },
        { title: 'bai viet 3', views: 1444, des: 'gioi thieu 1', id: 3 },
        { title: 'bai viet 4', views: 5553432, des: 'gioi thieu 1', id: 4 },
        { title: 'bai viet 5', views: 5666, des: 'gioi thieu 1', id: 5 },
        { title: 'bai viet 6', views: 87848, des: 'gioi thieu 1', id: 6 },
    ];

    const navigate = useNavigate();
    const news = listNews.find(item => item.id + '' === id);

    useEffect(() => {
        if (news === undefined) {
            navigate('/404');
        }
    }, [news, navigate]);


    return (
        <div>
            <h1>Chi tiet bai viet: {id} </h1>
            <div class="card">
                <h1>{news?.title}</h1>
                <p class="price">{news?.views}</p>
                <p>{news?.des}..</p>
            </div>
        </div>
    );
}

export default NewsDetail;