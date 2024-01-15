'use client';
import React from 'react';
import KanbanColumn from '../kanban-column/kanban-column';
import KanbanColumnProject from '../kanban-column-project/kanban-column-project';
import { Flex, ScrollArea } from '@mantine/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MemberType } from '../../_types/member-type';
import { KanbanColumnType } from '../../_types/kanban-column-type';
import { Loading } from '@/components/loading/loading';
import ErrorMessage from '@/components/error-message/error-message';

type KanbanBoardType = {
	kanbanMemberList: MemberType[];
	columnList: KanbanColumnType[];
	isProjectBoard: boolean;
	isSuccess?: boolean;
	isLoading?: boolean;
	isError?: boolean;
};

const KanbanBoard = ({
	kanbanMemberList,
	columnList,
	isProjectBoard,
	isSuccess,
	isLoading,
	isError,
}: KanbanBoardType) => {
	return (
		<DndProvider backend={HTML5Backend}>
			{isLoading && <Loading />}
			{isSuccess && (
				<ScrollArea scrollbarSize={10}>
					<Flex
						direction={{ base: 'column', sm: 'row' }}
						gap={'xl'}
						px={50}
						mb={50}
					>
						{!isProjectBoard &&
							columnList.map((col) => (
								<KanbanColumn
									key={col.id}
									title={col.title}
									column={col}
									members={kanbanMemberList.filter(
										(member) => member.columnId === col.id
									)}
								/>
							))}
						{isProjectBoard &&
							columnList.map((col) => (
								<KanbanColumnProject
									key={col.id}
									title={col.title}
									column={col}
									members={kanbanMemberList.filter(
										(member) =>
											member.assignedToProjectId ===
											col.id
									)}
								/>
							))}
					</Flex>
				</ScrollArea>
			)}
			{isError && (
				<ErrorMessage
					text={
						'Nie udało się pobrać listy uczestników. Spróbuj ponownie później.'
					}
				/>
			)}
		</DndProvider>
	);
};

export default KanbanBoard;
