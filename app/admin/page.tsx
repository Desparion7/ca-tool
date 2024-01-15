'use client';
import React, { useMemo } from 'react';
import { columnList } from '../admin/_lib/tempMember';
import KanbanBoard from './_components/kanban-board/kanban-board';
import SearchMember from './_components/search-member/search-member';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Divider } from '@mantine/core';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { MemberType } from './_types/member-type';
import { getMemberList } from './_lib/api-admin-panel';

const Page = () => {
	const {
		data,
		isLoading,
		isSuccess,
		isError,
	}: UseQueryResult<MemberType[]> = useQuery({
		queryKey: ['memberList'],
		queryFn: getMemberList,
	});
	const memberList = useMemo(() => {
		return data;
	}, [data]);

	return (
		<DndProvider backend={HTML5Backend}>
			<SearchMember />
			<Divider py={5} />
			<KanbanBoard
				kanbanMemberList={memberList as MemberType[]}
				columnList={columnList}
				isProjectBoard={false}
				isSuccess={isSuccess}
				isLoading={isLoading}
				isError={isError}
			/>
		</DndProvider>
	);
};

export default Page;
