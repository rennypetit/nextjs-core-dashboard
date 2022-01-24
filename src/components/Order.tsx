import { NextComponentType } from 'next';

export const Order: NextComponentType = () => {
	return (
		<section className='Order d-flex gap-2'>
			<div className='d-flex align-items-center gap-2'>
				<span className='text-primary'>Order:</span>
				<select className='form-select form-select-sm'>
					<option defaultValue={'DESC'}>Desc</option>
					<option value={'ASC'}>ASC</option>
				</select>
			</div>
			<div className='d-flex align-items-center gap-2'>
				<span className='text-primary'>Pagination:</span>
				<select className='form-select form-select-sm'>
					<option defaultValue={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={50}>100</option>
				</select>
			</div>
		</section>
	);
};

export default Order;
