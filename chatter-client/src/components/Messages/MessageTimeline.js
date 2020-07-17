import React from "react";
import Messagelist from "../../containers/MessageList";
import UserAside from "../UserAside/UserAside";

const MessageTimeline = (props) => {
	return (
		<div className="m-timeline">
			<UserAside
				profileImageUrl={props.profileImageUrl}
				username={props.username}
			/>

			<Messagelist />
		</div>
	);
};

export default MessageTimeline;
