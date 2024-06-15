interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

interface Comments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

interface PostProps {
	params: {
		id: string;
	};
}

const PostwId = async ({ params }: PostProps) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const data: Post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`,
	).then((response) => response.json());

	if (Object.keys(data).length === 0) {
		return (
			<div>
				<div>No post was found</div>
			</div>
		);
	}

	const commentData: Comments[] = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`,
	).then((response) => response.json());

	return (
		<div className="flex w-screen flex-col items-center max-w-fit px-6 pt-10">
			<div className="w-full p-6 border-2 border-black rounded overflow-hidden">
				<div className="text-2xl font-bold">{data.title}</div>
				<div className="text-md">{data.body}</div>
			</div>
			<div className="w-full p-6 border-2 border-black rounded overflow-y-auto">
				<div className="text-xl font-bold">Comments</div>
				{commentData.length > 0 ? (
					<div className="flex flex-col gap-4 w-full">
						{commentData.map((comment) => (
							<div key={comment.id}>
								<div className="font-bold">{comment.name}</div>
								<div className="">{comment.body}</div>
							</div>
						))}
					</div>
				) : (
					<div>No comments found</div>
				)}
			</div>
		</div>
	);
};
export default PostwId;
