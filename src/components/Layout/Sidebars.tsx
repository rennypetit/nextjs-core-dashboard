import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const Sidebars: NextComponentType = () => {
	return (
		<div className='Sidebars h-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'>
			<a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
				<span className='fs-4'>Admin</span>
			</a>

			<hr />
			<ul className='nav nav-pills flex-column mb-auto'>
				<li className='nav-item'>
					<Link href='/'>
						<a
							className='nav-link active d-flex align-items-center gap-2 lh-1'
							aria-current='page'
						>
							<Image src='/image/home.svg' alt='Home' width='20' height='20' />
							<span>Dashboard</span>
						</a>
					</Link>
				</li>
				<li className='nav-item'>
					<Link href='/categories'>
						<a
							href='#'
							className='nav-link text-white d-flex align-items-center gap-2 lh-1'
							aria-current='page'
						>
							<Image
								src='/image/dashboard.svg'
								alt='dashboard'
								width='20'
								height='20'
							/>
							<span>Categories</span>
						</a>
					</Link>
				</li>
				<li className='nav-item'>
					<Link href='/posts'>
						<a
							className='nav-link text-white d-flex align-items-center gap-2 lh-1'
							aria-current='page'
						>
							<Image src='/image/post.svg' alt='post' width='20' height='20' />
							<span>Posts</span>
						</a>
					</Link>
				</li>
				<li className='nav-item'>
					<Link href='/users'>
						<a
							href='#'
							className='nav-link text-white d-flex align-items-center gap-2 lh-1'
							aria-current='page'
						>
							<Image
								src='/image/users.svg'
								alt='users'
								width='20'
								height='20'
							/>
							<span>Users</span>
						</a>
					</Link>
				</li>
				<hr />
				<li className='nav-item'>
					<Link href='/profile'>
						<a
							href='#'
							className='nav-link text-white d-flex align-items-center gap-2 lh-1'
							aria-current='page'
						>
							<Image
								src='/image/person.svg'
								alt='person'
								width='20'
								height='20'
							/>
							<span>Profile</span>
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebars;
