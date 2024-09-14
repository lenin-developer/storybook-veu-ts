import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
//import Button from '../components/form/VButton/VButton.vue';
import Button from '@/components/form/VButton/VButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Ui/Form/Button',
  component: Button,
  tags: ['autodocs'],
  parameters:{
    layout: 'centered'
  },
  argTypes: {
    shape: { control: 'select', options: ["default" , "circle" , "round"] },
    size: { control: 'select', options: ["xs" , "sm" , "md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'click',
    shape: 'default',
    size: 'md',
  },
};