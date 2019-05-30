import React from 'react';
import {Textarea, TextInput, Select} from 'react-materialize';

function Account() {
    return (
        <div className='container'>
            <h5>Create your user account; make sure to select some activities...</h5>
            <TextInput label="First Name"/>
            <TextInput email validate label="Email"/>
            <Textarea placeholder="Tell us about you!"/>

			<label>Home Activities</label>
            <Select multiple>
                <option value="" disabled selected>
                    Select Home Activities
                </option>
                <option value="1">
                    reading
                </option>
                <option value="2">
                    cooking
                </option>
                <option value="3">
                    baking
                </option>
            </Select>
			<label>Music Activities</label>
            <Select multiple>
                <option value="" disabled selected>
                    Select Music Activities
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
			<label>Outdoor Activities</label>
            <Select multiple>
                <option value="" disabled selected>
                    Select Outdoor Activities
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
			<label>Sport Activities</label>
            <Select multiple>
                <option value="" disabled selected>
                    Select Sport Activities
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
