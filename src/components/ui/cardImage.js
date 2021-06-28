const CardImage = (props) => {
    return (
        <div className="cardAvatar">
            {props.ico}
            <p>{props.name}</p>
        </div>
    )
}

export default CardImage;


