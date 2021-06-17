import './ReactTower.css';
import Level from './Level';
import floors from './floors';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Level/ErrorFallback';

function ReactTower() {
	return (
		<div className="ReactTower">
			{floors.reverse().map((floor) => (
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
				>
					<Level floor={floor} />
				</ErrorBoundary>
			))}
		</div>
	);
}

export default ReactTower;
