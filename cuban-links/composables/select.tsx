import React from 'react';
// import {render} from 'ink';
import SelectInput from 'ink-select-input';

export const Select = () => {
	const handleSelect = (item: any) => {
		console.log(item)
		// `item` = { label: 'First', value: 'first' }
	};

	const items = [
		{
			label: 'First',
			value: 'first'
		},
		{
			label: 'Second',
			value: 'second'
		},
		{
			label: 'Third',
			value: 'third'
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

// render(<Demo />);