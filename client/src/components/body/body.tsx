import React from 'react';
import { Slider, Caption, Slide} from 'react-materialize';
import './body.css';

// Images from rawpixel.com

function Body() {
	return (
		// <div className='container'>
		// 	<div className='row'>
		// 		<div className='col s12'>
		// 			<div className='card'>
		// 				<div className='card-content'>
		// 					<p className= "center">You're here because you're ready to build a bridge between the severely divided sides. You'll answer some questions, then select some of your favorite activities, and finally be connected with your new best Frenemy(s)!</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<Slider  >
			<Slide image={<img id="firstSlide"/>} >
				<Caption>
					<h3>
						Welcome to Frenemy!
	</h3>
					<h5 className="light grey-text text-lighten-3">
						So you're ready to bridge the gap...
						<img src='/noun_bridge_2303977.png'></img>
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm42-360-minty-22-socialmedia.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=9b07aadc28ea81b8c916202a448bdb4f" className="image"/>}>
				<Caption placement="left">
					<h3 className="white-text">
						First take a short quiz.
	</h3>
					<h5 className="black-text ">
						No sweat, you won't be graded!
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img  src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v119-02-hobbies.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=cab333121e31de4538612ded9396f98a" className="image" />}>
				<Caption placement="right">
					<h3 className="white-text ">
						Then you'll create a user account.
	</h3>
					<h5 className="black-text ">
						Select some of your favorite things!
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s48-eye-00019.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1800&s=5455e3fa88085f9889646f43dfec9d26" className="image"/>}>
				<Caption>
					<h3 className="white-text">
						Finally, you'll make a few frenemys!
						</h3>
					<h5 className="black-text">
						Use the navigation buttons to the right to get started...
	</h5>
				</Caption>
			</Slide>
		</Slider>


	);
}

export default Body;
