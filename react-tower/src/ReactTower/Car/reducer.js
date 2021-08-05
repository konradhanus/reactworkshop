import {GET_CAR_TO_FLOOR_6, FARAWAY_CAR_FROM_FLOOR_6, SHOW_CAR} from "./action";

const initialVisibility = [{
    id: 1, 
    showCar: false
},
{
    id: 2, 
    showCar: false
},
{
    id: 3, 
    showCar: false
},
{
    id: 4, 
    showCar: false
},
{
    id: 5, 
    showCar: false
},
{
    id: 6, 
    showCar: false
},
{
    id: 7, 
    showCar: false
},
{
    id: 8, 
    showCar: false
},
{
    id: 9, 
    showCar: false
}];

const reducer = (state = initialVisibility, action) => {
    switch (action.type) {
    
        case SHOW_CAR:
            const car = state[action.payload];
            car.showCar = true;

            const newState = [...state];
            newState[action.payload] = car;

            return newState;

        default: {
            return state;
        }
    }
};

export default reducer;