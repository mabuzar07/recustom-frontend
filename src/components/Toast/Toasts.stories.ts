// Toast.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from './Toast';
import bellSvg from '../../../public/bell.svg'; // Adjust the path as needed
import avatarSvg from '../../../public/avatar.svg'; // Adjust the path as needed
import tickSvg from '../../../public/tick.svg'; // Adjust the path as needed

const meta: Meta = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Success: Story = {
  args: {
    message: 'The action that you have done was a success! Well done',
    borderColor: '#66E7C6',
    headerTextColor: '#66E7C6',
    fontWeight: 400,
    fontSize: 14,
    containerWidth: 640,
    iconUrl: tickSvg
  }

};

export const Error: Story = {
  args: {
    message: 'The file flowbite-figma-pro was permanently deleted.',
    borderColor: '#FFA2A2',
    headerTextColor: '#FFA2A2',
    fontWeight: 400,
    fontSize: 14,
    containerWidth: 640,
    iconUrl: bellSvg

  }

};

export const Info: Story = {
  args: {
    layout: 'flex',
    message: 'Bonnie Green',
    headerTextColor: '#111928',
    bodyTextColor: '#6B7280',
    closeIconColor: '#6B7280',
    fontWeight: 400,
    fontSize: 14,
    isShowBody: true,
    body: 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.',
    isShowButton: true,
    buttonBackgroundColor: '#FFFF00',
    buttonText: 'Button Text',
    buttonBorderColor: '#000',
    buttonTextColor: '#000',
    iconUrl: avatarSvg
  }

};

