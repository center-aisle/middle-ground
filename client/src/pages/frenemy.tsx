import React from 'react';
interface displayMatches {
	id: string;
	picture: string;
	name: string;
	summary: string;
}

interface ComponentState {
	allMatches: displayMatches[];
}

const allMatchesFromServer: displayMatches[] = [
	{
		id: '1',
		picture: 'https://images.unsplash.com/photo-1519275181730-e5b6cdfe9530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
		name: 'Jane Doe',
		summary: 'I am a Project Manager for fashion design firm. ',
	},
	{
		id: "2",
		picture: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
		name: 'Fergus Jones',
		summary: `I'm a founder of a fortune 500 company and I LOVE to knit!`,
	},
	{
		id: '3',
		picture: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
		name: 'Damian Gimers',
		summary: 'Huge theatre nerd here!  Hit me up and we can go for a hike or rock climbing?',
	},
	{
		id: '4',
		picture: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s21-ae-5266.jpg?w=400&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-1.1.1&s=a729ffcf7516767b60f5d953675c59c2',
		name: 'Angela Done',
		summary: 'I like running, yoga, and football.',
	},
];

export default class Matches extends
React.Component<any, ComponentState> {
	state: ComponentState = {
		allMatches: [],
	};

	componentDidMount(): void {
		setTimeout(() => {
			this.setState({
				allMatches: [...allMatchesFromServer],
			});
		}, 0);
	}

	render(): JSX.Element {
		return (this.state.allMatches.length === 0)
		? (
			<div>Loading your Frenemies!</div>
		)
		: (
			<div className='container'>
						<div className='row'>

				{this.state.allMatches.map(match => (
					<div key={match.id}>

			{/* <div className='col m1'></div> */}
				<div className='col s12 m6'>
					<h2 className='header'>{match.name}</h2>

						<div className='card horizontal'>
							<div className='card-image'>
								<img src={match.picture} title={match.name} alt={match.name} />
							</div>

							<div className='card-stacked'>
								<div className='card-content'>
									<p>{match.summary}</p>
								</div>
								<div className='card-action'>
									<a href='/user/account'>Go make a friend!</a>
								</div>
							</div>
					</div>
				</div>
			{/* <div className='col m1'></div> */}
			</div>
			))}

			</div>

		</div>
		);
	}
}
