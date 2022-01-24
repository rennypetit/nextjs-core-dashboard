import { NextComponentType } from 'next';

export const FormSeo: NextComponentType = () => {
	return (
		<section className='Seo'>
			<form>
				<div className='row g-2 mb-3'>
					<div className='col-md'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='seoTitle'
								placeholder='Title'
							/>
							<label htmlFor='seoTitle'>Title</label>
						</div>
					</div>
					<div className='col-md'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='seoDescription'
								placeholder='Description'
							/>
							<label htmlFor='seoDescription'>Description</label>
						</div>
					</div>
				</div>

				<div className='row g-2 mb-3'>
					<div className='col-md'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='seoKeywords'
								placeholder='Keywords'
							/>
							<label htmlFor='seoKeywords'>Keywords</label>
						</div>
					</div>
					<div className='col-md'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='seoCanonical'
								placeholder='Canonical'
							/>
							<label htmlFor='seoCanonical'>Canonical</label>
						</div>
					</div>
				</div>

				<div className='row g-2'>
					<div className='col-md'>
						<div className='input-group mb-3'>
							<input
								type='file'
								className='form-control'
								id='inputGroupFile02'
							/>
							<label className='input-group-text' htmlFor='inputGroupFile02'>
								Upload
							</label>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default FormSeo;
