import '../ReactTower.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function ReactTower({color, children}) {
  return (
    <div className="Floor" style={{backgroundColor: color, opacity:0.5}}>
      	<ErrorBoundary FallbackComponent={ErrorFallback}>
        {children()}
        </ErrorBoundary>
    </div>
  );
}

export default ReactTower;
