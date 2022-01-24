import { NextComponentType } from 'next';

export const Pagination: NextComponentType = () => {
	return (
		<div className='Pagination'>
			<nav aria-label='Page navigation example'>
				<ul className='pagination m-0'>
					<li className='page-item disabled'>
						<a className='page-link'>Previous</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							1
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							2
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							3
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
