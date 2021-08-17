import React from 'react';

// Locals
import { PureTaskList } from './TaskList';
import * as TaskStories from '../Task/Task.stories';


export default {
    component: PureTaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>]
};


const Template = args => <PureTaskList {...args} />;



export const Default = Template.bind({});

Default.args = {
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    ]
};


export const WithPinnedTask = Template.bind({});
WithPinnedTask.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 4),
        { id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' },
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
};