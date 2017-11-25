// Components
import Junction from '../app/Junction.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Junction,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};