import React from 'react';
import Login from '../components/login/login';

interface DisplayUser {
	id: string;
	picture: string;
	name: string;
	summary: string;
}

interface ComponentState {
	currentUser: DisplayUser[];
}

const currentUserFromServer: DisplayUser[] = [
	{
		id: '1',
		picture: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s21-ae-5266.jpg?w=400&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-1.1.1&s=a729ffcf7516767b60f5d953675c59c2',
		name: 'Jane Doe',
		summary: 'I like running, yoga, and football.',
	},
];

export default class User extends
React.Component<any, ComponentState> {
	state: ComponentState = {
		currentUser: [],
	};

	componentDidMount(): void {
		setTimeout(() => {
			this.setState({
				currentUser: [...currentUserFromServer],
			});
		}, 0);
	}

	render(): JSX.Element {
		return (this.state.currentUser.length === 0)
		? (
			<div>Loading your Frenemies!</div>
		)
		: (
			<div className='main-container'>

			<Login/>

				{this.state.currentUser.map(match => (
					<div key={match.id}>

			<div className='row'>
			<div className='col m1'></div>
				<div className='col s12 m5'>
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
			<div className='col m1'></div>
			</div>
			</div>
			))}
		</div>
		);
	}
}
