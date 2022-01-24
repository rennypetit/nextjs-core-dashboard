import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Order from './Order';
import Pagination from './Pagination';

export const Table: NextComponentType = () => {
	const color = 'text-success';
	return (
		<section className='All-context container'>
			<div className='container-fluid d-flex justify-content-between p-0 mt-4 mb-4'>
				<h2 className='m-0'>All</h2>
				<div className='form-check form-switch'>
					<input
						className='form-check-input'
						type='checkbox'
						role='switch'
						id='flexSwitchCheckChecked'
					/>
					<label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
						Publish
					</label>
				</div>
			</div>
			<div className='Table'>
				<table className='table table-responsive table-bordered table-hover text-center'>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Name</th>
							<th scope='col'>Date Created</th>
							<th scope='col'>User</th>
							<th scope='col'>Publish</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>

						<tr>
							<th className={color} scope='row'>
								3
							</th>
							<td className={color}>Mark</td>
							<td className={color}>02-08-1993</td>
							<td className={color}>Renny Petit</td>
							<td className={color}>true</td>
							<td>
								<Link href='/show'>
									<a className='m-1' title='Show'>
										<Image
											src='/image/show.svg'
											alt='show'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/edit'>
									<a className='m-1' title='edit'>
										<Image
											src='/image/edit.svg'
											alt='Edit'
											width='16'
											height='16'
										/>
									</a>
								</Link>

								<Link href='/remove'>
									<a className='m-1' title='Remove'>
										<Image
											src='/image/remove.svg'
											alt='remove'
											width='16'
											height='16'
										/>
									</a>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='container-fluid d-flex justify-content-between align-items-center p-0'>
				<Order />
				<Pagination />
			</div>
		</section>
	);
};

export default Table;
