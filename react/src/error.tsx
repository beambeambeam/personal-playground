import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div>
			<div>Oops! something went wrong!</div>
			<div>{error.statusText || error.message}</div>
		</div>
	);
};
export default ErrorPage;
