import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../Form';
import { Switch } from '../Switch';
import { Button } from '../../Button/Button';

const meta = {
  title: 'Form/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'field',
    label: 'Enable notifications',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'field',
    label: 'Dark mode',
    helperText: 'Toggle between light and dark theme',
  },
};

export const WithCheckedText: Story = {
  args: {
    name: 'field',
    label: 'Status',
    checkedText: 'Active',
    uncheckedText: 'Inactive',
  },
};

export const Required: Story = {
  args: {
    name: 'field',
    label: 'Accept terms',
    required: 'You must accept the terms',
  },
};

export const Disabled: Story = {
  args: {
    name: 'field',
    label: 'Disabled switch',
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'field',
    label: 'Small switch',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'field',
    label: 'Large switch',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  args: {
    name: 'field',
    label: 'Switch',
  },
  render: () => (
    <Form defaultValues={{ sm: false, md: false, lg: false }} onSubmit={() => {}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Switch name="sm" label="Small switch" size="sm" />
        <Switch name="md" label="Medium switch" size="md" />
        <Switch name="lg" label="Large switch" size="lg" />
      </div>
    </Form>
  ),
};

export const MultipleSwitches: Story = {
  args: {
    name: 'field',
    label: 'Setting',
  },
  render: () => (
    <Form 
      defaultValues={{ 
        notifications: true, 
        emails: false, 
        sms: false,
        darkMode: false,
      }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Notification Settings</h3>
        <Switch name="notifications" label="Push notifications" />
        <Switch name="emails" label="Email notifications" />
        <Switch name="sms" label="SMS notifications" />
        <hr style={{ margin: '0.5rem 0', border: 'none', borderTop: '1px solid #e5e5e5' }} />
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Appearance</h3>
        <Switch name="darkMode" label="Dark mode" checkedText="On" uncheckedText="Off" />
        <Button type="submit" style={{ marginTop: '0.5rem' }}>Save Settings</Button>
      </div>
    </Form>
  ),
};

export const WithFormSubmit: Story = {
  args: {
    name: 'field',
    label: 'Setting',
  },
  render: () => (
    <Form 
      defaultValues={{ terms: false, newsletter: false }} 
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px' }}>
        <Switch 
          name="terms" 
          label="Accept terms and conditions"
          required="You must accept the terms"
        />
        <Switch 
          name="newsletter" 
          label="Subscribe to newsletter"
          helperText="Optional - receive updates about new features"
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};
