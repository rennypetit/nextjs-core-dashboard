import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Table from '@components/Table';

const Categories: NextPage = () => {
	return (
		<Layout>
			<div className='Page-home container p-4'>
				<Table />
			</div>
		</Layout>
	);
};

export default Categories;
