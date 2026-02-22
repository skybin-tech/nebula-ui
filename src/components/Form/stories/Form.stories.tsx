import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../Form';
import { TextBox } from '../TextBox';
import { TextArea } from '../TextArea';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { RadioGroup } from '../Radio';
import { Switch } from '../Switch';
import { Button } from '../../Button/Button';

const meta = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicForm: Story = {
  args: {
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert(JSON.stringify(data, null, 2));
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <TextBox 
          name="username" 
          label="Username" 
          placeholder="Enter username"
          required="Username is required"
          minLength={{ value: 3, message: "Username must be at least 3 characters" }}
        />
        <TextBox 
          name="email" 
          label="Email" 
          type="email"
          placeholder="Enter email"
          required
          email="Please enter a valid email"
        />
        <TextBox 
          name="password" 
          label="Password" 
          type="password"
          placeholder="Enter password"
          required
          minLength={8}
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};

export const WithValidation: Story = {
  args: {
    defaultValues: {
      email: '',
      age: '',
      website: '',
    },
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert(JSON.stringify(data, null, 2));
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <TextBox 
          name="email" 
          label="Email" 
          type="email"
          required
          email
          helperText="We'll never share your email"
        />
        <TextBox 
          name="age" 
          label="Age" 
          type="number"
          required
          minValue={{ value: 18, message: "You must be at least 18 years old" }}
          maxValue={{ value: 120, message: "Please enter a valid age" }}
        />
        <TextBox 
          name="website" 
          label="Website" 
          url="Please enter a valid URL"
          helperText="Optional"
        />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  ),
};

export const CompleteForm: Story = {
  args: {
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      bio: '',
      gender: '',
      newsletter: false,
      terms: false,
    },
    config: {
      size: 'md',
      colon: false,
    },
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert(JSON.stringify(data, null, 2));
    },
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '500px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <TextBox name="firstName" label="First Name" required />
          <TextBox name="lastName" label="Last Name" required />
        </div>
        
        <TextBox 
          name="email" 
          label="Email" 
          type="email"
          required
          email
        />
        
        <Select 
          name="country" 
          label="Country" 
          required
          placeholder="Select a country"
          options={[
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Australia', value: 'au' },
            { label: 'Germany', value: 'de' },
          ]}
        />
        
        <TextArea 
          name="bio" 
          label="Bio" 
          placeholder="Tell us about yourself..."
          showCount
          maxCount={200}
          maxLength={200}
        />
        
        <RadioGroup 
          name="gender" 
          label="Gender"
          required
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
          direction="horizontal"
        />
        
        <Switch 
          name="newsletter" 
          label="Subscribe to newsletter"
        />
        
        <Checkbox 
          name="terms" 
          label="I agree to the terms and conditions"
          required="You must accept the terms"
        />
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="outline">Reset</Button>
        </div>
      </div>
    </Form>
  ),
};

export const SmallSize: Story = {
  args: {
    defaultValues: { name: '', email: '' },
    config: { size: 'sm' },
    onSubmit: (data) => alert(JSON.stringify(data, null, 2)),
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '300px' }}>
        <TextBox name="name" label="Name" required />
        <TextBox name="email" label="Email" type="email" required />
        <Button type="submit" size="sm">Submit</Button>
      </div>
    </Form>
  ),
};

export const LargeSize: Story = {
  args: {
    defaultValues: { name: '', email: '' },
    config: { size: 'lg' },
    onSubmit: (data) => alert(JSON.stringify(data, null, 2)),
  },
  render: (args) => (
    <Form {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '500px' }}>
        <TextBox name="name" label="Name" required />
        <TextBox name="email" label="Email" type="email" required />
        <Button type="submit" size="lg">Submit</Button>
      </div>
    </Form>
  ),
};
