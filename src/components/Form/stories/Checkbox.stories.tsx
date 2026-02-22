import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../Form';
import { Checkbox } from '../Checkbox';
import { Button } from '../../Button/Button';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form defaultValues={{ field: false }} onSubmit={() => {}}>
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
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'field',
    label: 'I agree to the terms',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'field',
    label: 'Subscribe to newsletter',
    helperText: 'Get updates about new features and promotions',
  },
};

export const Required: Story = {
  args: {
    name: 'field',
    label: 'I agree to the terms and conditions',
    required: 'You must accept the terms to continue',
  },
};

export const WithRichLabel: Story = {
  args: {
    name: 'field',
    label: (
      <span>
        I agree to the{' '}
        <a href="#" style={{ color: '#1890ff', textDecoration: 'underline' }}>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" style={{ color: '#1890ff', textDecoration: 'underline' }}>
          Privacy Policy
        </a>
      </span>
    ),
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'field',
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'field',
    label: 'Small checkbox',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'field',
    label: 'Large checkbox',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  args: {
    name: 'field',
    label: 'Checkbox',
  },
  render: () => (
    <Form defaultValues={{ sm: false, md: false, lg: false }} onSubmit={() => {}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Checkbox name="sm" label="Small checkbox" size="sm" />
        <Checkbox name="md" label="Medium checkbox" size="md" />
        <Checkbox name="lg" label="Large checkbox" size="lg" />
      </div>
    </Form>
  ),
};

export const MultipleCheckboxes: Story = {
  args: {
    name: 'field',
    label: 'Option',
  },
  render: () => (
    <Form 
      defaultValues={{ 
        option1: false, 
        option2: false, 
        option3: false,
        option4: false,
      }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '350px' }}>
        <Checkbox name="option1" label="Option 1" />
        <Checkbox name="option2" label="Option 2" />
        <Checkbox name="option3" label="Option 3" />
        <Checkbox name="option4" label="Option 4 (disabled)" disabled />
        <Button type="submit" style={{ marginTop: '0.5rem' }}>Submit</Button>
      </div>
    </Form>
  ),
};

export const WithFormSubmit: Story = {
  args: {
    name: 'field',
    label: 'Terms',
  },
  render: () => (
    <Form 
      defaultValues={{ terms: false, newsletter: false }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px' }}>
        <Checkbox 
          name="terms" 
          label="I agree to the terms and conditions"
          required="You must accept the terms"
        />
        <Checkbox 
          name="newsletter" 
          label="Subscribe to newsletter"
          helperText="Optional"
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};
