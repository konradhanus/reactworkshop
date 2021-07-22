import '../ReactTower.css';
import WallLeft from './WallLeft';
import WallRight from './WallRight';
import Floor from './Floor';
import { useState } from 'react';

function Level({ floor }) {
	const [tvOnFourthFloorIsOn, setTVOnFourthFloorIsOn] = useState(false);
	const toggleTVOnFourthFloor = () => setTVOnFourthFloorIsOn(!tvOnFourthFloorIsOn);
	const Left = floor.components.Left;
	const Right = floor.components.Right;

	return (
		<div className="Level" style={{ zIndex: floor.level }}>
			<WallLeft color={floor.leftWall.color}>{() => <Left tvOnFourthFloorIsOn={tvOnFourthFloorIsOn} />}</WallLeft>
			<WallRight color={floor.rightWall.color}>{() => <Right tvOnFourthFloorIsOn={tvOnFourthFloorIsOn} toggleTVOnFourthFloor={toggleTVOnFourthFloor} />}</WallRight>
			<Floor color={floor.floor.color}>{floor.components.Floor}</Floor>
		</div>
	);
}

export default Level;
