import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const TimerLengthControl = (props) => {
  return (
    <div className="d-flex my-1 justify-content-center align-items-center">
      <button
        className="btn-level rounded-circle py-1 px-2 py-sm-2 px-sm-3"
        id={props.minId}
        onClick={props.decrement}
      >
        <BsFillCaretLeftFill />
      </button>
      <div
        id={props.lengthId}
        className="tx-resp rounded-pill m-2 py-2 px-3 py-sm-3 px-sm-4 input text-center d-flex justify-content-center align-items-center"
      >
        {props.length}
      </div>
      <button
        className="btn-level rounded-circle py-1 px-2 py-sm-2 px-sm-3"
        id={props.addId}
        onClick={props.increment}
      >
        <BsFillCaretRightFill />
      </button>
    </div>
  );
};

TimerLengthControl.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  lengthId: PropTypes.elementType.isRequired,
  addId: PropTypes.string.isRequired,
  minId: PropTypes.string.isRequired,
};

export default TimerLengthControl;
