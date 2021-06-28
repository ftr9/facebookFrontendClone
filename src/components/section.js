import CardImage from "./ui/cardImage"
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from "./ui/divider";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Badge from '@material-ui/core/Badge';
import CreatePost from "./CreatePost";
import CrreateRooms from "./CrreateRooms";

import StorySection from "./storySection";
import NewsFeed from "./newsFeed";

import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        border: '2px solid black',
        height: '1rem',
        width: '1rem',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
    },
}))(Badge);

const Section = () => {
    return (
        <div className="body__section">

            <div className="body__section__left">


                <CardImage ico={<Avatar alt="Remy Sharp" src="/images/myProfile.jpg" className="chipAvatar__image" />} name="Rahul dotel" />
                <CardImage ico={<img src='/images/covid.png' alt="covid"></img>} name="Covid-19 information centre" />
                <CardImage ico={<img src='/images/friends.png' alt="covid"></img>} name={"friends"} />
                <CardImage ico={<img src='/images/groups.png' alt="covid"></img>} name={"Groups"} />
                <CardImage ico={<img src='/images/saved.png' alt="covid"></img>} name={"Saved"} />
                <CardImage ico={<img src='/images/marketplace.png' alt="covid"></img>} name={"Market place"} />
                <CardImage ico={<img src='/images/watch.png' alt="covid"></img>} name={"Watch"} />
                <CardImage ico={<img src='/images/events.png' alt="covid"></img>} name={"Events"} />
                <CardImage ico={<img src='/images/memory.png' alt="covid"></img>} name={"Memories"} />
                <CardImage ico={<Avatar className="navBar__icon"><ArrowDropDownIcon className="sv" /></Avatar>} name={"See more"} />
                <Divider />

                <h3>Your Shortcut</h3>
                <span className={"bottom__info"}>Privacy . </span><span className={"bottom__info"}>Terms . </span><span className={"bottom__info"}>Advertising . </span><span className={"bottom__info"}>Adchoices . </span>
                <span className={"bottom__info"}>Cookies . </span><span className={"bottom__info"}>More . </span><span className={"bottom__info"}>facebook &copy; 2021</span>


            </div>

            <div className="body__section__middle">

                <StorySection />
                <CreatePost />
                <CrreateRooms />
                <NewsFeed />
                <NewsFeed />
                <NewsFeed />
                <NewsFeed />

            </div>

            <div className="body__section__right">

                <div className="right__header">
                    <p>Contacts</p>
                    <div className={"right__header__icon"}>
                        <VideoCallIcon />
                        <SearchIcon />
                        <MoreHorizIcon />
                    </div>

                </div>

                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/index1.jpg" />
                </StyledBadge>}
                    name={"Sandesh basnet"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/index2.jpg" />
                </StyledBadge>}
                    name={"prabin gurung"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/index3.jpg" />
                </StyledBadge>}
                    name={"Rukesh ghimere"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/index4.jpg" />
                </StyledBadge>}
                    name={"Norgen sherpa"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/index5.jpg" />
                </StyledBadge>}
                    name={"Smaran sapkota"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/images6.jpg" />
                </StyledBadge>}
                    name={"Rakesh takur"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/images7.jpg" />
                </StyledBadge>}
                    name={"Sanjay rijal"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/images8.jpg" />
                </StyledBadge>}
                    name={"Ashis khatri"}
                />
                <CardImage ico={<StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/images9.jpg" />
                </StyledBadge>}
                    name={"Sushil bhattrai"}
                />

            </div>

        </div>
    )
}

export default Section
