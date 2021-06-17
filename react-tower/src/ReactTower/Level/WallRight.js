import '../ReactTower.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function WallRight({color, children}) {
  return (
    <div className="WallRight" style={{backgroundColor: color}}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children()}
      </ErrorBoundary>
    </div>
  );
}

export default WallRight;
