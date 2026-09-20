import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvatarGroup } from './AvatarGroup';
import { Avatar } from '../Avatar';

describe('AvatarGroup Suite', () => {
  it('renders avatars and calculates excess badge', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="Alice" />
        <Avatar name="Bob" />
        <Avatar name="Charlie" />
        <Avatar name="David" />
      </AvatarGroup>
    );

    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});
