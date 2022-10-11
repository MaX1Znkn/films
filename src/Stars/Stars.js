import Star from "./Star/Star";
import shortid from "shortid";

function Stars({ count }) {
	const arrStars = [];
	if (count <= 5 && count > 0) {
		for (let i = 0; i < count; i++) {
			arrStars.push("</Star>");
		}
	}

	const starsIndex = arrStars.map((star) => ({ id: shortid.generate() }));

	return (
		<ul className="card-body-stars">
			<li>
				{starsIndex.map((star) => {
					return <Star key={star.id} />;
				})}
			</li>
		</ul>
	);
}

Stars.defaultProps = {
	count: 0,
};

export default Stars;
