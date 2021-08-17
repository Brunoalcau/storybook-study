import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
//Locals
import * as TaskListStories from '../TaskList/TaskList.stories';
import { PureInboxScreen } from './InboxScreen';


export default {
    component: PureInboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'InboxScreen',
};

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something',
};