import React from 'react';
import StyledSpinner from './LoadingSpinner.components';

export const LoadingSpinner = () => (
	<StyledSpinner viewBox="0 0 50 50">
		<circle
			className="path"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			strokeWidth="5"
		/>
	</StyledSpinner>
);

export default LoadingSpinner;
