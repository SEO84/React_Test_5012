import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            {/* 추가 */}
            <Link to="/about">소개</Link>
        </div>
    );
};

export default Home;