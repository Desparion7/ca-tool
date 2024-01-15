import axios from 'axios';
import config from '@/config';

export const getMemberList = async () => {
	const response = await axios.get(`${config.apiUrl}/ClickUp/GetAllMembers`);
	return response.data;
};
