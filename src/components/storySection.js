import Avatar from '@material-ui/core/Avatar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import StoryCard from "./ui/storyCard"

const StorySection = () => {
    return (
        <div className="stories">

            <Avatar className="navBar__icon">
                <ArrowRightIcon className="sv" style={{ fontSize: '2rem' }} />
            </Avatar>
            <StoryCard imageAvatar={<Avatar src="/images/index.jpg" />} image={<img src={"/images/index.jpg"} alt={"story images"}></img>} name={"Rahul dotel"} />
            <StoryCard imageAvatar={<Avatar src="/images/index5.jpg" />} image={<img src={"/images/index5.jpg"} alt={"story images"}></img>} name={"Nihang Lama"} />
            <StoryCard imageAvatar={<Avatar src="/images/index2.jpg" />} image={<img src={"/images/index2.jpg"} alt={"story images"}></img>} name={"Subash tamang"} />
            <StoryCard imageAvatar={<Avatar src="/images/index3.jpg" />} image={<img src={"/images/index3.jpg"} alt={"story images"}></img>} name={"Milan dhamala"} />
            <StoryCard imageAvatar={<Avatar src="/images/index4.jpg" />} image={<img src={"/images/index4.jpg"} alt={"story images"}></img>} name={"sanjay rijal"} />

        </div>
    )
}

export default StorySection
