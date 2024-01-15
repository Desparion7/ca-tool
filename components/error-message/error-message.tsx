import { Center, Text } from '@mantine/core';
import React from 'react';

type ErrorMessagePropsType = {
	text: string;
};

const ErrorMessage = ({ text }: ErrorMessagePropsType) => {
	return (
		<Center>
			<Text size="xl" fw={600} c='red'>{text}</Text>
		</Center>
	);
};

export default ErrorMessage;
