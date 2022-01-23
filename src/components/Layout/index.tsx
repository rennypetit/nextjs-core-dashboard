import { NextComponentType } from 'next';
import Sidebars from './Sidebars';
import Navbar from './Navbar';
export const Layout: NextComponentType = ({ children }) => {
	return (
		<section className='Layout d-flex vh-100'>
			<Sidebars />
			<div className='container-fluid p-0'>
				<Navbar />
				{children}
			</div>
		</section>
	);
};

export default Layout;
