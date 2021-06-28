import Avatar from '@material-ui/core/Avatar';

const Chip = () => {
    return (
        <div className="chipAvatar">
            <Avatar alt="Remy Sharp" src="/images/myProfile.jpg" className="chipAvatar__image" />
            <h4>Rahul</h4>
        </div>
    )
}

export default Chip
