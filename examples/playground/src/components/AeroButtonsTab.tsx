import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  ButtonVariant,
  ButtonSize,
  Checkbox,
  Divider,
  IconButton,
  IconWater,
  IconLeaf,
  IconSparkles,
  IconStar,
  IconSun,
  useToast,
} from '@frutiger.js/react';
import { playAeroClick, playAeroChime } from '../utils/aeroAudio';

export interface AeroButtonsTabProps {
  sliderGainVal?: number;
}

export const AeroButtonsTab: React.FC<AeroButtonsTabProps> = React.memo(
  ({ sliderGainVal = 74 }) => {
    const [selectedBtnSize, setSelectedBtnSize] = useState<ButtonSize>('md');
    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const { toast } = useToast();

    return (
      <Card variant="glass">
        <CardHeader>
          <CardTitle>Button Matrix & Live Playground</CardTitle>
          <CardDescription>Explore all 7 glossy variants and sizes.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: 'var(--fj-radius-lg)',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--fj-font-size-sm)', fontWeight: 600 }}>Size:</span>
              {(['sm', 'md', 'lg'] as ButtonSize[]).map(s => (
                <Button
                  key={s}
                  size="sm"
                  variant={selectedBtnSize === s ? 'aero' : 'glass'}
                  onClick={() => setSelectedBtnSize(s)}
                >
                  {s}
                </Button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Checkbox
                label="Loading"
                checked={isBtnLoading}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setIsBtnLoading(e.target.checked)}
              />
              <Checkbox
                label="Disabled"
                checked={isBtnDisabled}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setIsBtnDisabled(e.target.checked)}
              />
            </div>
          </div>

          {/* All Variant Showcase */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {(
              [
                'aero',
                'primary',
                'secondary',
                'success',
                'danger',
                'glass',
                'ghost',
              ] as ButtonVariant[]
            ).map(variant => (
              <Button
                key={variant}
                variant={variant}
                size={selectedBtnSize}
                isLoading={isBtnLoading}
                disabled={isBtnDisabled}
                onClick={() => {
                  playAeroClick(sliderGainVal);
                  toast({
                    title: `${variant.toUpperCase()} Button Clicked ✨`,
                    description: `Triggered interactive tactile click with size "${selectedBtnSize}".`,
                    variant:
                      variant === 'danger'
                        ? 'danger'
                        : variant === 'success'
                          ? 'success'
                          : variant === 'secondary'
                            ? 'warning'
                            : 'info',
                  });
                }}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>

          <Divider
            label="Aero IconButtons (Circle & Rounded)"
            style={{ margin: '2rem 0 1.25rem 0' }}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <IconButton
              aria-label="Water Drop"
              icon={<IconWater size={18} />}
              variant="aero"
              size={selectedBtnSize}
              shape="circle"
              isLoading={isBtnLoading}
              disabled={isBtnDisabled}
              onClick={() => {
                playAeroClick(sliderGainVal);
                toast({
                  title: 'Water Droplet Action',
                  description: 'Hydrosphere animation triggered.',
                  variant: 'info',
                });
              }}
            />
            <IconButton
              aria-label="Nature Leaf"
              icon={<IconLeaf size={18} />}
              variant="success"
              size={selectedBtnSize}
              shape="circle"
              isLoading={isBtnLoading}
              disabled={isBtnDisabled}
              onClick={() => {
                playAeroClick(sliderGainVal);
                toast({
                  title: 'Biosphere Foliage Action',
                  description: 'Ecosystem calibrated.',
                  variant: 'success',
                });
              }}
            />
            <IconButton
              aria-label="Sparkles Action"
              icon={<IconSparkles size={18} />}
              variant="glass"
              size={selectedBtnSize}
              shape="rounded"
              isLoading={isBtnLoading}
              disabled={isBtnDisabled}
              onClick={() => {
                playAeroChime(sliderGainVal);
                toast({
                  title: 'Specular Sparkles',
                  description: 'Crystal refraction sheen engaged.',
                  variant: 'info',
                });
              }}
            />
            <IconButton
              aria-label="Favorite Star"
              icon={<IconStar size={18} />}
              variant="secondary"
              size={selectedBtnSize}
              shape="rounded"
              isLoading={isBtnLoading}
              disabled={isBtnDisabled}
              onClick={() => {
                playAeroClick(sliderGainVal);
                toast({
                  title: 'Favorited to Vault ⭐',
                  description: 'Saved to session bookmarks.',
                  variant: 'warning',
                });
              }}
            />
            <IconButton
              aria-label="Sun Energy Indicator"
              icon={<IconSun size={18} />}
              variant="primary"
              size={selectedBtnSize}
              shape="circle"
              isLoading={isBtnLoading}
              disabled={isBtnDisabled}
              onClick={() => {
                playAeroClick(sliderGainVal);
                toast({
                  title: 'Solar Radiance Action ☀️',
                  description: 'Photosphere intensity calibrated.',
                  variant: 'info',
                });
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
);
AeroButtonsTab.displayName = 'AeroButtonsTab';
