import { useState } from 'react';


export default (defaultValues) => {
	const [values, setValues] = useState(defaultValues);

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value
			});
		}
	];
};
