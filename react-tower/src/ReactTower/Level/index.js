import '../ReactTower.css';
import WallLeft from './WallLeft';
import WallRight from './WallRight';
import Floor from './Floor';

function Level({ floor }) {
	return (
		<div className="Level" style={{ zIndex: floor.level }}>
			<WallLeft color={floor.leftWall.color}>{floor.components.Left}</WallLeft>
			<WallRight color={floor.rightWall.color}>{floor.components.Right}</WallRight>
			<Floor color={floor.floor.color}>{floor.components.Floor}</Floor>
		</div>
	);
}

export default Level;
