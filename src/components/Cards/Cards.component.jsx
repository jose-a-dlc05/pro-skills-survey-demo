import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';
import ReactPaginate from 'react-paginate';

const Cards = ({ skills, updateSkills }) => {
	const [skillsObject, setSkillsObject] = useState(skills);
	const [pageNumber, setPageNumber] = useState(0);

	const handleSkillsChange = (skills) => {
		let objectName = skills.skillName;
		const { deptRange, orgRange, importanceRange } = skills;
		let updatedData = {
			...skillsObject,
			[objectName]: {
				department: deptRange,
				organization: orgRange,
				self: importanceRange,
			},
		};
		setSkillsObject(updatedData);
		updateSkills(updatedData);
	};

	const usersPerPage = 6;
	const pagesVisited = pageNumber * usersPerPage;
	const displayCards = Object.entries(skillsObject)
		.slice(pagesVisited, pagesVisited + usersPerPage)
		.map(([key, value]) => {
			return (
				<Card
					key={key}
					skill={[key, value]}
					handleSkillsChange={handleSkillsChange}
				/>
			);
		});

	const pageCount = Math.ceil(
		Object.entries(skillsObject).length / usersPerPage
	);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			<Stack gap={3}>
				<div
					className='bg-light border'
					style={{
						width: '90%',
						margin: '0 auto',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
					}}
				>
					{displayCards}
				</div>
			</Stack>
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'paginationBttns'}
				previousLinkClassName={'previousBttn'}
				nextLinkClassName={'nextBttn'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'paginationActive'}
			/>
		</>
	);
};

export default Cards;
