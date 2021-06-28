import { Avatar } from "@material-ui/core"
import Divider from "./ui/divider"

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const CreatePost = () => {
    return (
        <div className={"postCreate"}>

            <div className={"input__section"}>
                <Avatar src="/images/index.jpg" />
                <input type="text" placeholder={"What's on your mind ?"}></input>
            </div>

            <Divider />

            <div className="postCreate__options">
                <div className={"postCreate__option"}>
                    <VideocamIcon className={"vid"} />
                    Live Video
                </div>
                <div className={"postCreate__option"}>
                    <PhotoLibraryIcon className={"phot"} />
                    Photo/Video
                </div>
                <div className={"postCreate__option"}>
                    <InsertEmoticonIcon className={"emot"} />
                    Feeling/Activity
                </div>
            </div>

        </div>
    )
}

export default CreatePost
