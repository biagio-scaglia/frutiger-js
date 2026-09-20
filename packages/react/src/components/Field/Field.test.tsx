import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Field, Label, HelperText, ErrorMessage } from './Field';

describe('Field Suite', () => {
  it('renders label with required asterisk and helper text', () => {
    render(
      <Field>
        <Label isRequired htmlFor="email-input">
          Email Address
        </Label>
        <input id="email-input" type="email" />
        <HelperText>We will never share your email.</HelperText>
      </Field>
    );

    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('We will never share your email.')).toBeInTheDocument();
  });

  it('renders error message with alert role', () => {
    render(
      <Field>
        <Label htmlFor="pass-input">Password</Label>
        <input id="pass-input" type="password" />
        <ErrorMessage>Password must be at least 8 characters.</ErrorMessage>
      </Field>
    );

    const errorAlert = screen.getByRole('alert');
    expect(errorAlert).toBeInTheDocument();
    expect(errorAlert).toHaveTextContent('Password must be at least 8 characters.');
  });
});
