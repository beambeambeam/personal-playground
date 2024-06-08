import { useNavigate, useParams } from "react-router-dom";
import { foods } from "../conditional_render";

const FoodWrapper = () => {
	const { foodId } = useParams();
	const food_data = foods.filter((w) => w.id === Number(foodId))[0];
	const navigate = useNavigate();

	if (food_data) {
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						navigate("/");
					}}
				>
					go home
				</button>
				<div>Name : {food_data.name}</div>
				<div>{food_data.isVegan && "Vegaterian food"}</div>
				<div>
					{food_data.local_name ? (
						<div>Local name : {food_data.local_name}</div>
					) : (
						<div>local name not found</div>
					)}
				</div>
				<div>Details : {food_data.details}</div>
			</div>
		);
	}

	return <div>not found</div>;
};
export default FoodWrapper;
