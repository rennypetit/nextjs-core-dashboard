import { NextComponentType } from 'next';
import Image from 'next/image';

export const Navbar: NextComponentType = () => {
	return (
		<>
			<nav className='Navbar navbar w-100 p-3 text-white bg-dark'>
				<div className='container-fluid justify-content-between p-0'>
					<h1 className='m-0'>Categories</h1>
					<a className='navbar-brand m-0 d-flex gap-2' href='#'>
						<Image
							src='/image/sign-out.svg'
							alt='sign-out'
							width='25'
							height='25'
						/>
						<span>Sign Out</span>
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
