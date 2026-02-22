import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../Form';
import { RadioGroup } from '../Radio';
import { Button } from '../../Button/Button';

const meta = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form defaultValues={{ field: '' }} onSubmit={() => {}}>
        <div style={{ width: '350px' }}>
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
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const priorityOptions = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Critical', value: 'critical' },
];

export const Default: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
  },
};

export const Horizontal: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    name: 'field',
    label: 'Priority',
    options: priorityOptions,
    direction: 'vertical',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    helperText: 'Select your gender',
  },
};

export const Required: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    required: 'Please select a gender',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    name: 'field',
    label: 'Priority',
    options: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High (Unavailable)', value: 'high', disabled: true },
      { label: 'Critical (Unavailable)', value: 'critical', disabled: true },
    ],
  },
};

export const Disabled: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    size: 'sm',
    direction: 'horizontal',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
    size: 'lg',
    direction: 'horizontal',
  },
};

export const AllSizes: Story = {
  args: {
    name: 'field',
    label: 'Radio',
    options: genderOptions,
  },
  render: () => (
    <Form defaultValues={{ sm: '', md: '', lg: '' }} onSubmit={() => {}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RadioGroup name="sm" label="Small" options={genderOptions} size="sm" direction="horizontal" />
        <RadioGroup name="md" label="Medium" options={genderOptions} size="md" direction="horizontal" />
        <RadioGroup name="lg" label="Large" options={genderOptions} size="lg" direction="horizontal" />
      </div>
    </Form>
  ),
};

export const WithFormSubmit: Story = {
  args: {
    name: 'field',
    label: 'Gender',
    options: genderOptions,
  },
  render: () => (
    <Form 
      defaultValues={{ gender: '', priority: '' }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '350px' }}>
        <RadioGroup 
          name="gender" 
          label="Gender" 
          options={genderOptions}
          required="Please select a gender"
          direction="horizontal"
        />
        <RadioGroup 
          name="priority" 
          label="Priority" 
          options={priorityOptions}
          required="Please select a priority"
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};
