type actions = "tried" | "not yet" | "soon";

interface Food {
	id: number;
	name: string;
	local_name: string | null;
	details: string | null;
	isVegan: boolean;
	actions: actions;
}

const foods: Array<Food> = [
	{
		id: 1,
		name: "Chicken Rice",
		local_name: "Khao Man Gai",
		details:
			"A dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes.",
		isVegan: false,
		actions: "tried",
	},
	{
		id: 2,
		name: "Caesar salad",
		local_name: null,
		details:
			"A dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes.",
		isVegan: true,
		actions: "not yet",
	},
];

const ConditionalRendering = () => {
	if (!foods || !foods.length) {
		return <div>food list not found</div>;
	}
	return (
		<div>
			<div>Conditional Rendering</div>
			{foods.map((item) => (
				<div key={item.id}>
					<div>Name : {item.name}</div>
					<div>{item.isVegan && "Vegaterian food"}</div>
					<div>
						{item.local_name ? (
							<div>Local name : {item.local_name}</div>
						) : (
							<div>local name not found</div>
						)}
					</div>
					<div>Details : {item.details}</div>
					<div>
						<Actions {...item.actions} />
					</div>
				</div>
			))}
		</div>
	);
};

const Actions = (actionValue: actions) => {
	switch (actionValue) {
		case "tried":
			return <div>Already tried</div>;
		case "not yet":
			return <div>not yet try</div>;

		case "soon":
			return <div>soon to try</div>;

		default:
			break;
	}
};

export default ConditionalRendering;

export { foods };
