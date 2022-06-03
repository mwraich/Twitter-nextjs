export default function utils() {
	return (
		<>
			<div className="mt-10 ml-20">
				<h2 className="mb-10 text-xl">Utils</h2>
				<div className="flex-1 mb-5"></div>
				<button
					className="border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-hover-dark"
					onClick=
					{async () => {
						await fetch('api/utils', {
							body: JSON.stringify({
								task: 'generate_users_and_tweets',
							}),
							headers: {
								'Content-Type': 'application/json',
							},
							method: 'POST',
						});
					}}>
					generate_users_and_tweets
				</button>
				<button
					className="border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-hover-dark"
					onClick=
					{async () => {
						await fetch('api/utils', {
							body: JSON.stringify({
								task: 'generate_one_tweet',
							}),
							headers: {
								'Content-Type': 'application/json',
							},
							method: 'POST',
						});
					}}>
					generate_one_tweet
				</button>
				<button
					className="border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-hover-dark"
					onClick=
					{async () => {
						await fetch('api/utils', {
							body: JSON.stringify({
								task: 'clean_database',
							}),
							headers: {
								'Content-Type': 'application/json',
							},
							method: 'POST',
						});
					}}
                    >
					clean_database
				</button>
			</div>
		</>
	);
}
