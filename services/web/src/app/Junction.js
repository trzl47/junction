//Libs
import React, { Component } from 'react';
// Components
// styles
import css from './junction.css';

class Junction extends Component {
	render() {
		return(
			<div className={[css.junction].join(' ')}>
				<div className={[css.header].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['row'].join(' ')}>
							<img alt='' className={[css.logo].join(' ')} src={require('./assets/logo.svg')} height="36" width="36" />
							<ul className={[css.nav].join(' ')}>
								<a href="/">
									<li>About</li>
								</a>
								<a href="/">
									<li>Blog</li>
								</a>
								<a href="/">
									<li>Help</li>
								</a>
								<a href="/">
									<li>Contact</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
				<div className={[css.jumbotron, 'jumbotron'].join(' ')}>
					<div className={['container'].join(' ')}>
						<h1>Meet Junction</h1>
					</div>
				</div>
				<div className={[css.supporting].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['row'].join(' ')}>
							<div className={['col-md-4',css['col-md-4']].join(' ')}>
								<img alt='' className={[css.read].join(' ')} src={require('./assets/read.svg')} height="128" width="128" />
								<h2>Read</h2>
								<p>Discover new stories and follow your favorite writers.</p>
							</div>
							<div className={['col-md-4',css['col-md-4']].join(' ')}>
								<img alt='' className={[css.write].join(' ')} src={require('./assets/write.svg')} height="128" width="128" />
								<h2>Write</h2>
								<p>Create stories about our world, or entirely new worlds.</p>
							</div>
							<div className={['col-md-4',css['col-md-4']].join(' ')}>
								<img alt='' className={[css.talk].join(' ')} src={require('./assets/talk.svg')} height="128" width="128" />
								<h2>Talk</h2>
								<p>Join the conversation by talking with your favorite readers and your fans.</p>
							</div>
						</div>
					</div>
				</div>
				<div className={[css.download].join(' ')}>
					<div className={['container'].join(' ')}>
						<a href="/" className={['btn','btn-default', css['btn-default']].join(' ')}><span>Join</span></a>
					</div>
				</div>
			</div>
		);
	}
}
export default Junction;
