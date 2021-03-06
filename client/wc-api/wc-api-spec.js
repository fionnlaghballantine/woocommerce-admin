/** @format */

/**
 * Internal dependencies
 */
import reportExport from './export';
import items from './items';
import imports from './imports';
import notes from './notes';
import onboarding from './onboarding';
import options from './options';
import reportItems from './reports/items';
import reportStats from './reports/stats';
import reviews from './reviews';
import settings from './settings';
import user from './user';

function createWcApiSpec() {
	return {
		name: 'wcApi',
		mutations: {
			...reportExport.mutations,
			...items.mutations,
			...notes.mutations,
			...onboarding.mutations,
			...options.mutations,
			...settings.mutations,
			...user.mutations,
		},
		selectors: {
			...imports.selectors,
			...items.selectors,
			...notes.selectors,
			...onboarding.selectors,
			...options.selectors,
			...reportItems.selectors,
			...reportStats.selectors,
			...reviews.selectors,
			...settings.selectors,
			...user.selectors,
		},
		operations: {
			read( resourceNames ) {
				if ( document.hidden ) {
					// Don't do any read updates while the tab isn't active.
					return [];
				}

				return [
					...imports.operations.read( resourceNames ),
					...items.operations.read( resourceNames ),
					...notes.operations.read( resourceNames ),
					...onboarding.operations.read( resourceNames ),
					...options.operations.read( resourceNames ),
					...reportItems.operations.read( resourceNames ),
					...reportStats.operations.read( resourceNames ),
					...reviews.operations.read( resourceNames ),
					...settings.operations.read( resourceNames ),
					...user.operations.read( resourceNames ),
				];
			},
			update( resourceNames, data ) {
				return [
					...reportExport.operations.update( resourceNames, data ),
					...items.operations.update( resourceNames, data ),
					...notes.operations.update( resourceNames, data ),
					...onboarding.operations.update( resourceNames, data ),
					...options.operations.update( resourceNames, data ),
					...settings.operations.update( resourceNames, data ),
					...user.operations.update( resourceNames, data ),
				];
			},
			updateLocally( resourceNames, data ) {
				return [ ...items.operations.updateLocally( resourceNames, data ) ];
			},
		},
	};
}

export default createWcApiSpec();
