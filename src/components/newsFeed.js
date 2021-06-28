import { Avatar } from "@material-ui/core"
import PublicIcon from '@material-ui/icons/Public';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Divider from "./ui/divider";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyAllOutlinedIcon from '@material-ui/icons/ReplyAllOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const NewsFeed = () => {
    return (
        <div className="newsFeed">

            <div className="newsFeed__owner">
                <Avatar alt="Remy Sharp" src="/images/index2.jpg" />
                <div className="newsFeed__nameAndTime">
                    <a href="/">Thomas alba torress</a>
                    <div className="newsFeed__123">
                        <span className={"newsFeed__time"}>2hr</span><span>.</span><PublicIcon className="newsFeed__public" />
                    </div>

                </div>
                <MoreHorizIcon className={"newsFeed__menu"} />
            </div>
            <div className={"content"}>
                <p>Wow.. Process of Upgrading men to supermen is going on. 😍</p>
                <p>Pic. Sudarshan Ranjit</p>
            </div>

            <div className="image">
                <img src="/images/index2.jpg" alt="profile_pic"></img>
            </div>

            <div className={"like_And_Comment_Section"}>
                <div className="results">
                    <span className={"emojiTag emojiTag--like"}>
                        <img src="/images/like.png" alt=""></img>
                    </span>
                    <span className={"emojiTag emojiTag--love"}>
                        <img src={"/images/love.png"} alt=""></img>
                    </span>
                    <span className={"emojiTag"}>
                        <img src={"/images/wow.png"} alt=""></img>
                    </span>
                    <span className={"likesDigit likesDigit--diff"}>500</span>

                    <span className={"likesDigit likesDigit--comment"}>20 comments</span>
                    <span className={"likesDigit"}>2 shares</span>

                </div>
                <Divider />
                <div className="lps__buttons">
                    <div className="lps__button">
                        <ThumbUpOutlinedIcon />
                        Like
                    </div>
                    <div className="lps__button">
                        <ChatBubbleOutlineOutlinedIcon />
                        Comment
                    </div>
                    <div className="lps__button">
                        <ReplyAllOutlinedIcon />
                        Share
                    </div>

                    <div className="lps__button lps__button--diff">
                        <Avatar alt="Remy Sharp" src="/images/index.jpg" />
                        <ArrowDropDownIcon />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewsFeed
