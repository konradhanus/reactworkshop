import Flat1 from './Flats/Flat1';
import Flat2 from './Flats/Flat2';
import Flat3 from './Flats/Flat3';
import Flat4 from './Flats/Flat4';
import Flat5 from './Flats/Flat5';
import Flat6 from './Flats/Flat6';
import Flat7 from './Flats/Flat7';
import Flat8 from './Flats/Flat8';
import Flat9 from './Flats/Flat9';
const floors = [
	{
		owner: '',
		level: 1,
		leftWall: {
			color: '#727475'
		},
		rightWall: {
			color: '#04040C'
		},
		floor: {
			color: '#60748A'
		},
		components: {
			Left: Flat1.Left,
			Right: Flat1.Right,
			Floor: Flat1.Floor,
		}
	},
	{
		level: 2,
		leftWall: {
			color: '#7A5342'
		},
		rightWall: {
			color: '#441C0B'
		},
		floor: {
			color: '#996043'
		},
		components: {
			Left: Flat2.Left,
			Right: Flat2.Right,
			Floor: Flat2.Floor,
		}
	},
	{
		owner: '',
		level: 3,
		leftWall: {
			color: '#E4B733'
		},
		rightWall: {
			color: '#B15006'
		},
		floor: {
			color: '#EDB814'
		},
		components: {
			Left: Flat3.Left,
			Right: Flat3.Right,
			Floor: Flat3.Floor,
		}
	},
	{
		owner: '',
		level: 4,
		leftWall: {
			color: '#E63d26'
		},
		rightWall: {
			color: '#F38480'
		},
		floor: {
			color: '#F52934'
		},
		components: {
			Left: Flat4.Left,
			Right: Flat4.Right,
			Floor: Flat4.Floor,
		}
	},
	{
		owner: '',
		level: 5,
		leftWall: {
			color: '#F4B808'
		},
		rightWall: {
			color: '#F1D72C'
		},
		floor: {
			color: '#F5C80F'
		},
		components: {
			Left: Flat5.Left,
			Right: Flat5.Right,
			Floor: Flat5.Floor,
		}
	},
	{
		owner: '',
		level: 6,
		leftWall: {
			color: '#4FA640'
		},
		rightWall: {
			color: '#446926'
		},
		floor: {
			color: '#62BC43'
		},
		components: {
			Left: Flat6.Left,
			Right: Flat6.Right,
			Floor: Flat6.Floor,
		}
	},
	{
		owner: 'Grzegorz Byrka',
		level: 7,
		leftWall: {
			color: '#1D70B8'
		},
		rightWall: {
			color: '#208CB3'
		},
		floor: {
			color: '#3D858D'
		},
		components: {
			Left: Flat7.Left,
			Right: Flat7.Right,
			Floor: Flat7.Floor,
		}
	},
	{
		owner: 'Remigiusz Kolanko',
		level: 8,
		leftWall: {
			color: '#a46e81'
		},
		rightWall: {
			color: '#7a5c95'
		},
		floor: {
			color: '#cd816d'
		},
		components: {
			Left: Flat8.Left,
			Right: Flat8.Right,
			Floor: Flat8.Floor,
		}
	},
	{
		owner: 'Konad Hanus',
		level: 9,
		leftWall: {
			color: 'black'
		},
		rightWall: {
			color: 'black'
		},
		floor: {
			color: 'black'
		},
		components: {
			Left: Flat9.Left,
			Right: Flat9.Right,
			Floor: Flat9.Floor,
		}
	}
];

export default floors;
