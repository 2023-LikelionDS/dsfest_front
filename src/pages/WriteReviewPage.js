import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import '../css/WriteReviewPage.css'
import back from "../img/back_arrow.png";

function WriteReviewPage() {
    // const [review, setReview] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
      };

    //api 연결 부분
    // const handleSubmit = (e) => {

    // }

    return (
    <div className="writeReview">
        <div className="write-top">
            <NavLink to={'/review'} className="back-arrow">
                <img src={back} alt="뒤로" width="20px" height="20px"/>
            </NavLink>
            <div className="write-title">상영작 후기</div>
        </div>

        <div className="write-bottom">
            {/* <form className="review-form" onSubmit={handleSubmit}> */}
            <form className="review-form">
                <textarea type="text" placeholder="<TAKE:> 후기를 남겨 주세요!" name="content" className="review-content" />
                <button 
                    className="review-post-button" type="submit"
                    onClick={handleClick}
                    style={{ backgroundColor: isClicked ? '#FFFFFF' : '#8A4395', color: isClicked ? '#8A4395' : '#FFFFFF'}}
                >작성 완료
                </button>
            </form>
        </div>

    </div>

    );
}

export default WriteReviewPage;
