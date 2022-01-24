/* eslint-disable @next/next/no-sync-scripts */
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
				crossOrigin='anonymous'
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
