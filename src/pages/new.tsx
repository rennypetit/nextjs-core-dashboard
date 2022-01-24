import type { NextPage } from 'next';
import Layout from '@components/Layout';
import FormSeo from '@components/FormSeo';

const New: NextPage = () => {
	return (
		<Layout>
			<div className='container p-4'>
				<h2 className=''>New</h2>
				<form>
					<div className='row g-2 mb-3'>
						<div className='col-md'>
							<div className='form-floating'>
								<input
									type='text'
									className='form-control'
									id='Title'
									placeholder='Title'
								/>
								<label htmlFor='Title'>Title</label>
							</div>
						</div>
						<div className='col-md'>
							<div className='form-floating'>
								<input
									type='text'
									className='form-control'
									id='slug'
									placeholder='Description'
								/>
								<label htmlFor='slug'>slug</label>
							</div>
						</div>
					</div>
				</form>
				<div className='row'>
					<div className='col-12'>
						<div className='shadow rounded p-4'>
							<div className='accordion mb-4' id='accordionSeo'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingSeo'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseSeo'
											aria-expanded='true'
											aria-controls='collapseSeo'
										>
											SEO
										</button>
									</h2>
									<div
										id='collapseSeo'
										className='accordion-collapse collapse show'
										aria-labelledby='headingSeo'
										data-bs-parent='#accordionSeo'
									>
										<div className='accordion-body'>
											<FormSeo />
										</div>
									</div>
								</div>
							</div>

							<div className='accordion' id='accordionContent'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingContent'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseContent'
											aria-expanded='true'
											aria-controls='collapseContent'
										>
											Content
										</button>
									</h2>
									<div
										id='collapseContent'
										className='accordion-collapse collapse show'
										aria-labelledby='headingContent'
										data-bs-parent='#accordionContent'
									>
										<div className='accordion-body'>
											<FormSeo />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default New;
