import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a fugiat sit alias officiis, mollitia dignissimos praesentium eius ipsam quis, deleniti, reprehenderit ipsum modi consectetur! Eaque quasi praesentium consequatur libero.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a fugiat sit alias officiis, mollitia dignissimos praesentium eius ipsam quis, deleniti, reprehenderit ipsum modi consectetur! Eaque quasi praesentium consequatur libero.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
