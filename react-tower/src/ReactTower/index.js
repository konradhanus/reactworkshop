import './ReactTower.css';
import Level from './Level';
import floors from './floors';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Level/ErrorFallback';
import Counter from './Counter';
import Lift from './Lift';
import Parking from './Parking/Parking';

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
			<Lift/>
			<Counter/>
			<Parking>
				{/* <Car /> */}
			</Parking>
		</div>
	);
}

export default ReactTower;
