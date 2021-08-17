import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          defaultChecked={state === 'TASk_ACHIVED'}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="checkbox-custom">
        <input type="text" value={title} readOnly={true} />
      </div>
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a href="/#">
            <span className={`icon-start`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** titulo da task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** event to change the task to pinned */
  onPingTask: PropTypes.func,
};
