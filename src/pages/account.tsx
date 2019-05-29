import React from 'react';
import { Textarea, TextInput, Select } from 'react-materialize';


function Account() {
	return (
		<div className='container'>
			<h4>Create your user account; make sure to select some activities...</h4>
			<TextInput label="First Name" />
			<TextInput email validate label="Email" />
			<Textarea placeholder="Short blurb about yourself" />
			<Select multiple value={['']}>
				<option value="" disabled>
					Select home activities
				</option>
				<option value="1">
					reading
</option>
				<option value="2">
					cookiing
</option>
				<option value="3">
					baking
</option>
			</Select>
			<Select multiple value={['']}>
				<option value="" disabled>
					Select music preferences
</option>
				<option value="1">
					Option 1
</option>
				<option value="2">
					Option 2
</option>
				<option value="3">
					Option 3
</option>
			</Select>
			<Select multiple value={['']}>
				<option value="" disabled>
					Outdoor activities
</option>
				<option value="1">
					Option 1
</option>
				<option value="2">
					Option 2
</option>
				<option value="3">
					Option 3
</option>
			</Select>
			<Select multiple value={['']}>
				<option value="" disabled>
					Sports
</option>
				<option value="1">
					Option 1
</option>
				<option value="2">
					Option 2
</option>
				<option value="3">
					Option 3
</option>
			</Select>
		


		</div>
	);
}

export default Account;
