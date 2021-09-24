import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const TimerLengthControl = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="btn-level rounded-pill "
        id={props.minId}
        onClick={props.decrement}
      >
        <BsFillCaretLeftFill />
      </button>
      <div
        id={props.lengthId}
        className="rounded-pill m-3 input text-center d-flex justify-content-center align-items-center"
      >
        {props.length}
      </div>
      <button
        className="btn-level rounded-pill"
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
