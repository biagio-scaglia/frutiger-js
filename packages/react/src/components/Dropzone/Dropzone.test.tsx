import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('renders upload title and subtitle', () => {
    render(<Dropzone title="Upload Wallpaper" subtitle="PNG only" />);
    expect(screen.getByText('Upload Wallpaper')).toBeInTheDocument();
    expect(screen.getByText('PNG only')).toBeInTheDocument();
  });
});
