import PropTypes from 'prop-types';

const Input = props => (
  <div className={`row-${props.size}`}>
    {props.label && (
      <label htmlFor={props.name}>
        <p>
          {props.label} {props.optional && <strong>&nbsp;(Optional)</strong>}
        </p>
      </label>
    )}
    <input
      type={props.type}
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className={props.error ? 'error' : ''}
    />
    {props.error && <p className="error">{props.error}</p>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  optional: PropTypes.bool,
  size: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
