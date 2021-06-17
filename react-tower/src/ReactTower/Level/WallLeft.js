import '../ReactTower.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function WallLeft({ color, children }) {
	console.log(children);
	return (
		<div className="WallLeft" style={{ backgroundColor: color }}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>{children()}</ErrorBoundary>
		</div>
	);
}

export default WallLeft;
