const Docs = ({ params }: { params: { slug: string } }) => {
	console.log(params.slug);
	return (
		<div>
			Docs
			<div>{params.slug}</div>
		</div>
	);
};
export default Docs;
