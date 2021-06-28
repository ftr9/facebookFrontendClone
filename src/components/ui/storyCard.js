const StoryCard = (props) => {
    return (
        <div className={"storyCard"}>

            {props.imageAvatar}
            {props.image}
            <p>{props.name}</p>

        </div>
    )
}

export default StoryCard
