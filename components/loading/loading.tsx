import { Stack, Center, Loader, Title } from '@mantine/core';

export const Loading: React.FC = () => {
	return (
		<Center my={60}>
			<Stack gap='md' justify='center'>
				<Center>
					<Loader size='xl' />
				</Center>
				<Title order={2}>Ładowanie...</Title>
			</Stack>
		</Center>
	);
};
