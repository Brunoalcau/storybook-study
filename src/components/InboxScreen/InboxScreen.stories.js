import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { PureInboxScreen } from './InboxScreen';

import * as TaskListStories from '../../components/TaskList/TaskList.stories';


// console.log(TaskListStories.Default.args.tasks);
const store = {
    getState: () => {
        return { tasks: TaskListStories.Default.args.tasks }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}


const addRedux = story => <Provider store={store}>{story()}</Provider>

export default {
    component: PureInboxScreen,
    decorators: [addRedux],
    title: 'InboxScreen'
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...TaskListStories.Empty.args
}

export const Error = Template.bind({});

Error.args = {
    error: 'Something'
};