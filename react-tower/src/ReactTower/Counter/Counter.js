import niedotykac from './niedotykac.png';

function Counter({counter}) {
    return (
      <div class="counter-container">
        <div class="counter-left" ><img src={niedotykac} className="niedotykac" /></div>
        <div class="counter-right" ><br />{counter}<br />kWH</div>
        <div class="counter-top" />
      </div>
    );
  }

  export default Counter;