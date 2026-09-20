import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Stack,
  Divider,
  Alert,
  AlertVariant,
  IconWater,
  IconLeaf,
  IconSun,
  IconSparkles,
  IconGlobe,
  useToast,
} from '@frutiger.js/react';
import { playAeroClick, playAeroChime } from '../utils/aeroAudio';

export interface AeroFeedbackTabProps {
  onOpenDrawer: () => void;
  sliderGainVal?: number;
}

export const AeroFeedbackTab: React.FC<AeroFeedbackTabProps> = React.memo(
  ({ onOpenDrawer, sliderGainVal = 74 }) => {
    const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);
    const { toast } = useToast();

    return (
      <Stack spacing="lg">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Aero Toast Notifications & Slide Drawers</CardTitle>
            <CardDescription>
              Non-intrusive acrylic toast pills and full slide-over glass sheets with specular
              highlights.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
              }}
            >
              <Button
                variant="primary"
                leftIcon={<IconWater size={16} />}
                onClick={() =>
                  toast({
                    title: 'Hydrosphere Synchronized',
                    description: 'Water flow physics calibrated to 60fps.',
                    variant: 'info',
                    icon: <IconWater size={18} />,
                  })
                }
              >
                Spawn Info Toast
              </Button>
              <Button
                variant="success"
                leftIcon={<IconLeaf size={16} />}
                onClick={() =>
                  toast({
                    title: 'Biosphere Online',
                    description: 'Natural foliage shaders enabled successfully.',
                    variant: 'success',
                    icon: <IconLeaf size={18} />,
                  })
                }
              >
                Spawn Success Toast
              </Button>
              <Button
                variant="secondary"
                leftIcon={<IconSun size={16} />}
                onClick={() =>
                  toast({
                    title: 'Solar Flare Warning',
                    description: 'Atmospheric specular intensity at 94%.',
                    variant: 'warning',
                    icon: <IconSun size={18} />,
                  })
                }
              >
                Spawn Warning Toast
              </Button>
              <Button
                variant="danger"
                leftIcon={<IconSparkles size={16} />}
                onClick={() =>
                  toast({
                    title: 'Memory Overflow',
                    description: 'Specular cache exceeds 2048 MB.',
                    variant: 'danger',
                  })
                }
              >
                Spawn Danger Toast
              </Button>
              <Button
                variant="aero"
                leftIcon={<IconGlobe size={16} />}
                onClick={onOpenDrawer}
              >
                Open Slide Drawer ➔
              </Button>
            </div>
          </CardContent>
        </Card>

        <Divider label="Static Frosted Alert Banners" />

        {(['info', 'success', 'warning', 'danger'] as AlertVariant[])
          .filter(av => !dismissedAlerts.includes(av))
          .map(av => (
            <Alert
              key={av}
              variant={av}
              title={`${av.charAt(0).toUpperCase() + av.slice(1)} Notification`}
              onClose={() => {
                setDismissedAlerts(prev => [...prev, av]);
                playAeroClick(sliderGainVal);
                toast({
                  title: `Dismissed ${av.toUpperCase()} Alert`,
                  description: 'Alert container dismissed and removed.',
                  variant: 'info',
                });
              }}
            >
              This is an authentic Frutiger Aero alert with translucent frosted backing.
            </Alert>
          ))}

        {dismissedAlerts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <Button
              variant="glass"
              size="sm"
              onClick={() => {
                setDismissedAlerts([]);
                playAeroChime(sliderGainVal);
                toast({
                  title: 'Alert Banners Restored ✨',
                  description: 'All 4 alert banners restored.',
                  variant: 'success',
                });
              }}
            >
              Reset Dismissed Alerts ({dismissedAlerts.length})
            </Button>
          </div>
        )}
      </Stack>
    );
  }
);
AeroFeedbackTab.displayName = 'AeroFeedbackTab';
