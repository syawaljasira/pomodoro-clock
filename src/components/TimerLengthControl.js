import { Fragment } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

const TimerLengthControl = (props) => {
  return (
    <Fragment>
      <div className="d-block text-gray pb-2" id={props.labelId}>
        {props.label}
      </div>
      <div
        id={props.lengthId}
        className="rounded-pill m-auto input text-center d-flex justify-content-center align-items-center"
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
      >
        {props.length}
      </div>
      <div className="length-control">
        <button
          className="btn-level"
          id={props.minId}
          onClick={props.onClick}
          value="-"
        >
          <BsFillCaretLeftFill />
        </button>
        <button
          className="btn-level"
          id={props.addId}
          onClick={props.onClick}
          value="+"
        >
          <BsFillCaretRightFill />
        </button>
      </div>
    </Fragment>
  );
};

export default TimerLengthControl;
