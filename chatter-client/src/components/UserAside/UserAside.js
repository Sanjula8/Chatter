import React from "react";
import DefaultProfileImg from "../../images/profile-image.png";

const UserAside = ({ profileImageUrl, username }) => (
	<aside>
		<div>
			<div>
				<img
					src={profileImageUrl || DefaultProfileImg}
					alt={username}
					width="200"
					height="200"
					className="img-thumbnail"
				/>
			</div>
		</div>
	</aside>
);

export default UserAside;
