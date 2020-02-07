/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';

class HeaderLogo extends Component {
	render() {
		const { isJetpackConnected } = this.props;

		const ariaLabel = ! isJetpackConnected
			? __( 'Jetpack + WooCommerce', 'woocommerce-admin' )
			: __( 'WooCommerce', 'woocommerce-admin' );
		const classes = classNames( 'woocommerce-profile-wizard__header-logo', {
			'woocommerce-profile-wizard__header-logo-with-jetpack': ! isJetpackConnected,
		} );

		return (
			<svg
				role="img"
				aria-label={ ariaLabel }
				width="200"
				viewBox="0 0 1270 170"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				className={ classes }
			>
				<g fill="none" fillRule="evenodd">
					<g>
						<g>
							{ ! isJetpackConnected && (
								<g
									transform="translate(219 35.082353)"
									className="woocommerce-profile-wizard__plus"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										height="72"
										width="72"
										fill="#2B2D2F"
									>
										<g xmlns="http://www.w3.org/2000/svg">
											<path d="M18 11h-5V6h-2v5H6v2h5v5h2v-5h5" />
										</g>
									</svg>
								</g>
							) }
							<g fillRule="nonzero" transform="translate(360)">
								<path
									d="M23.7,0.2 L222.8,0.2 C235.4,0.2 245.6,10.4 245.6,23
											L245.6,99 C245.6,111.6 235.4,121.8 222.8,121.8 L151.4,121.8
											L161.2,145.8 L118.1,121.8 L23.8,121.8 C11.2,121.8 1,111.6 1,99
											L1,23 C0.9,10.5 11.1,0.2 23.7,0.2 Z"
									id="Shape"
									fill="#2B2D2F"
								/>
								<path
									d="M13.2,20.9 C14.6,19 16.7,18 19.5,17.8 C24.6,17.4 27.5,19.8 28.2,25
											C31.3,45.9 34.7,63.6 38.3,78.1 L60.2,36.4 C62.2,32.6 64.7,30.6 67.7,30.4
											C72.1,30.1 74.8,32.9 75.9,38.8 C78.4,52.1 81.6,63.4 85.4,73 C88,47.6 92.4,29.3
											98.6,18 C100.1,15.2 102.3,13.8 105.2,13.6 C107.5,13.4 109.6,14.1 111.5,15.6
											C113.4,17.1 114.4,19 114.6,21.3 C114.7,23.1 114.4,24.6 113.6,26.1 C109.7,33.3
											106.5,45.4 103.9,62.2 C101.4,78.5 100.5,91.2 101.1,100.3 C101.3,102.8
											100.9,105 99.9,106.9 C98.7,109.1 96.9,110.3 94.6,110.5 C92,110.7 89.3,109.5
											86.7,106.8 C77.4,97.3 70,83.1 64.6,64.2 C58.1,77 53.3,86.6 50.2,93 C44.3,104.3
											39.3,110.1 35.1,110.4 C32.4,110.6 30.1,108.3 28.1,103.5 C23,90.4 17.5,65.1
											11.6,27.6 C11.3,25 11.8,22.7 13.2,20.9 Z"
									id="Shape"
									fill="#F6F6F6"
									fillRule="nonzero"
								/>
								<path
									d="M228.2,36.6 C224.6,30.3 219.3,26.5 212.2,25 C210.3,24.6 208.5,24.4 206.8,24.4
											C197.2,24.4 189.4,29.4 183.3,39.4 C178.1,47.9 175.5,57.3 175.5,67.6 C175.5,75.3
											177.1,81.9 180.3,87.4 C183.9,93.7 189.2,97.5 196.3,99 C198.2,99.4 200,99.6
											201.7,99.6 C211.4,99.6 219.2,94.6 225.2,84.6 C230.4,76 233,66.6 233,56.3
											C233,48.5 231.4,42 228.2,36.6 Z M215.6,64.3 C214.2,70.9 211.7,75.8 208,79.1
											C205.1,81.7 202.4,82.8 199.9,82.3 C197.5,81.8 195.5,79.7 194,75.8 C192.8,72.7
											192.2,69.6 192.2,66.7 C192.2,64.2 192.4,61.7 192.9,59.4 C193.8,55.3 195.5,51.3
											198.2,47.5 C201.5,42.6 205,40.6 208.6,41.3 C211,41.8 213,43.9 214.5,47.8
											C215.7,50.9 216.3,54 216.3,56.9 C216.3,59.5 216,62 215.6,64.3 Z"
									id="Shape"
									fill="#F6F6F6"
									fillRule="nonzero"
								/>
								<path
									d="M165.5,36.6 C161.9,30.3 156.5,26.5 149.5,25 C147.6,24.6 145.8,24.4 144.1,24.4
											C134.5,24.4 126.7,29.4 120.6,39.4 C115.4,47.9 112.8,57.3 112.8,67.6 C112.8,75.3
											114.4,81.9 117.6,87.4 C121.2,93.7 126.5,97.5 133.6,99 C135.5,99.4 137.3,99.6
											139,99.6 C148.7,99.6 156.5,94.6 162.5,84.6 C167.7,76 170.3,66.6 170.3,56.3
											C170.3,48.5 168.7,42 165.5,36.6 Z M152.9,64.3 C151.5,70.9 149,75.8 145.3,79.1
											C142.4,81.7 139.7,82.8 137.2,82.3 C134.8,81.8 132.8,79.7 131.3,75.8 C130.1,72.7
											129.5,69.6 129.5,66.7 C129.5,64.2 129.7,61.7 130.2,59.4 C131.1,55.3 132.8,51.3
											135.5,47.5 C138.8,42.6 142.3,40.6 145.9,41.3 C148.3,41.8 150.3,43.9 151.8,47.8
											C153,50.9 153.6,54 153.6,56.9 C153.6,59.5 153.4,62 152.9,64.3 Z"
									id="Shape"
									fill="#F6F6F6"
									fillRule="nonzero"
								/>
							</g>
							{ ! isJetpackConnected && (
								<svg
									height="150"
									width="150"
									viewBox="0 0 32 32"
								>
									<path
										fill="#2B2D2F"
										d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z"
									/>
									<polygon
										fill="#F6F6F6"
										points="15,19 7,19 15,3 "
									/>
									<polygon
										fill="#F6F6F6"
										points="17,29 17,13 25,13 "
									/>
								</svg>
							) }
						</g>
					</g>
				</g>
			</svg>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const { isJetpackConnected } = select( 'wc-api' );
		return {
			isJetpackConnected: isJetpackConnected(),
		};
	} )
)( HeaderLogo );
