import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../Form';
import { TextArea } from '../TextArea';
import { Button } from '../../Button/Button';

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form defaultValues={{ field: '' }} onSubmit={() => {}}>
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      </Form>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'field',
    label: 'Description',
    placeholder: 'Enter description...',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'field',
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'This will be displayed on your profile',
  },
};

export const Required: Story = {
  args: {
    name: 'field',
    label: 'Message',
    placeholder: 'Enter your message...',
    required: 'Message is required',
  },
};

export const WithCharacterCount: Story = {
  args: {
    name: 'field',
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    showCount: true,
    maxCount: 200,
    maxLength: 200,
  },
};

export const WithMinLength: Story = {
  args: {
    name: 'field',
    label: 'Feedback',
    placeholder: 'Please provide detailed feedback...',
    required: true,
    minLength: { value: 50, message: 'Please provide at least 50 characters' },
  },
};

export const Disabled: Story = {
  args: {
    name: 'field',
    label: 'Disabled',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'field',
    label: 'Small TextArea',
    placeholder: 'Small',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'field',
    label: 'Large TextArea',
    placeholder: 'Large',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  args: {
    name: 'field',
    label: 'TextArea',
  },
  render: () => (
    <Form defaultValues={{ sm: '', md: '', lg: '' }} onSubmit={() => {}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <TextArea name="sm" label="Small" placeholder="Small textarea" size="sm" />
        <TextArea name="md" label="Medium" placeholder="Medium textarea" size="md" />
        <TextArea name="lg" label="Large" placeholder="Large textarea" size="lg" />
      </div>
    </Form>
  ),
};

export const WithFormSubmit: Story = {
  args: {
    name: 'field',
    label: 'Message',
  },
  render: () => (
    <Form 
      defaultValues={{ message: '' }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <TextArea 
          name="message" 
          label="Message" 
          placeholder="Enter your message..."
          required="Message is required"
          minLength={{ value: 10, message: 'At least 10 characters' }}
          showCount
          maxCount={500}
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};
