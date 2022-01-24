import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Table from '@components/Table';

const Categories: NextPage = () => {
	return (
		<Layout>
			<div className='Page-home container'>
				<Table />
			</div>
		</Layout>
	);
};

export default Categories;
