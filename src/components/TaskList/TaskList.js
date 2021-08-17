import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Locals
import Task from '../Task';
import { archiveTask, pinTask } from '../../lib/redux';

export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask
    };
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (!tasks || tasks?.length === 0) {
        return <div className="list-items">
            <div className="wrapper-message">
                <span className="icon-check" />
                <div className="title-message">You have no tasks</div>
                <div className="subtitle-message">Sit back and relax</div>
            </div>
        </div>;
    }
    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    )
}

PureTaskList.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    /** The list of task */
    tasks: PropTypes.arrayOf(Task.propTypes.task),
    /** Event to change the task to archived */
    onPinTask: PropTypes.func,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
};

PureTaskList.defaultProps = {
    loading: false
};

export default connect(({ tasks }) => ({
    tasks: tasks?.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
}), dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id))
}))(PureTaskList)

// export default TaskList;