import auto1 from './CarStable/modre_auto_blue.png';
import auto2 from './CarStable/modre_auto_green.png';
import auto3 from './CarStable/modre_auto_pink.png';
import auto4 from './CarStable/modre_auto_police.png';
import auto5 from './CarStable/modre_auto_red.png';
import auto6 from './CarStable/modre_auto_turquoise.png';
import auto7 from './CarStable/modre_auto_violet.png';
import auto8 from './CarStable/modre_auto_yellow.png';

function Car(props) {

    const getCar = (id) => {

        switch(id)
        {
            case '1':
            return auto1;
            case '2':
            return auto2;
            case '3':
            return auto3;
            case '4':
            return auto4;
            case '5':
            return auto5;
            case '6':
            return auto6;
            case '7':
            return auto7;
            default:
            return auto8;
        }
    }

    return (
      props.isVisible && <div style={{width: 100, height: 200, margin: 20}}><img src={getCar(props.id)} width="100" height="200"></img></div> 
    );
  }

export default Car;