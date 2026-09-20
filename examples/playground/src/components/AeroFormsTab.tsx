import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Grid,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Badge,
  Slider,
  Divider,
  Dropzone,
  SegmentedControl,
  Field,
  Label,
  HelperText,
  ErrorMessage,
  IconSparkles,
  IconLeaf,
  IconWater,
  useToast,
} from '@frutiger.js/react';
import { playAeroClick, playAeroChime } from '../utils/aeroAudio';

export interface AeroFormsTabProps {
  sliderGainVal: number;
  onGainChange: (v: number) => void;
}

export const AeroFormsTab: React.FC<AeroFormsTabProps> = React.memo(
  ({ sliderGainVal, onGainChange }) => {
    const [inputVal, setInputVal] = useState('frutiger.aero@web2007.net');
    const [radioVal, setRadioVal] = useState('sky');
    const [switchChecked, setSwitchChecked] = useState(true);
    const [checkboxChecked, setCheckboxChecked] = useState(true);
    const [sliderAquaVal, setSliderAquaVal] = useState(68);
    const [segmentedMode, setSegmentedMode] = useState('glass');
    const [uploadedFiles, setUploadedFiles] = useState<
      Array<{ name: string; size: string; type: string }>
    >([
      { name: 'vista_aurora_4k.png', size: '14.2 MB', type: 'image/png' },
      { name: 'aqua_orb_gloss.c4d', size: '38.4 MB', type: 'model/c4d' },
    ]);

    const { toast } = useToast();

    return (
      <Card
        variant="glass"
        style={{
          transition: 'all 0.4s ease',
          background:
            radioVal === 'ocean'
              ? 'linear-gradient(135deg, rgba(224, 242, 254, 0.9) 0%, rgba(186, 230, 253, 0.6) 100%)'
              : radioVal === 'meadow'
                ? 'linear-gradient(135deg, rgba(240, 253, 244, 0.9) 0%, rgba(220, 252, 231, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.6) 100%)',
          boxShadow: checkboxChecked
            ? radioVal === 'meadow'
              ? '0 16px 48px rgba(34, 197, 94, 0.25), inset 0 2px 2px #fff, 0 0 24px rgba(74, 222, 128, 0.4)'
              : '0 16px 48px rgba(2, 132, 199, 0.3), inset 0 2px 2px #fff, 0 0 24px rgba(56, 189, 248, 0.45)'
            : '0 10px 30px rgba(2, 132, 199, 0.12), inset 0 1px 1px #fff',
        }}
      >
        <CardHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div>
              <CardTitle>Aero Form Controls & Realtime Theme Engine</CardTitle>
              <CardDescription>
                Accessible inputs with focus rings, dynamic ecosystem skins, and sound feedback.
              </CardDescription>
            </div>
            <Badge
              variant={radioVal === 'meadow' ? 'nature' : radioVal === 'ocean' ? 'info' : 'primary'}
            >
              Theme: {radioVal.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Grid columns="repeat(auto-fit, minmax(min(100%, 280px), 1fr))" gap="1.5rem">
            <Input
              label="User Email"
              value={inputVal}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
              helperText="We will never share your email."
            />
            <Input
              label="Validated Field"
              defaultValue="Clean Input"
              success="Username available."
            />
            <Input
              label="Error State"
              defaultValue="invalid-syntax"
              error="Please enter a valid format."
            />
            <Select
              label="Select Environment (Live Theme)"
              value={radioVal}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setRadioVal(e.target.value);
                playAeroClick(sliderGainVal);
                toast({
                  title: `Theme: ${e.target.value.toUpperCase()} 🎨`,
                  description: `Environment background and accents updated to ${e.target.value}.`,
                  variant: e.target.value === 'meadow' ? 'success' : 'info',
                });
              }}
              options={[
                { value: 'sky', label: 'Sky & Atmosphere (Azure)' },
                { value: 'ocean', label: 'Deep Ocean (Cerulean)' },
                { value: 'meadow', label: 'Nature Meadow (Emerald)' },
              ]}
            />
          </Grid>

          <div style={{ marginTop: '1.5rem' }}>
            <Textarea
              label="User Feedback"
              placeholder="Write your impressions of the Frutiger Aero design system..."
              rows={3}
            />
          </div>

          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.45)',
              borderRadius: 'var(--fj-radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
            }}
          >
            <Checkbox
              label="Enable Specular Glow"
              checked={checkboxChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCheckboxChecked(e.target.checked);
                playAeroClick(sliderGainVal);
                toast({
                  title: e.target.checked ? 'Specular Glow: ON ✨' : 'Specular Glow: OFF ⚪',
                  description: e.target.checked
                    ? 'Luminous halo shaders enabled.'
                    : 'Standard matte reflections.',
                  variant: 'info',
                });
              }}
            />
            <Switch
              label="Atmospheric Ambient Audio"
              checked={switchChecked}
              onChange={(checked: boolean) => {
                setSwitchChecked(checked);
                if (checked) {
                  playAeroChime(sliderGainVal);
                  toast({
                    title: 'Ambient Audio: Active 🎵',
                    description: 'Audio synthesis calibrated to master gain.',
                    variant: 'success',
                  });
                } else {
                  toast({
                    title: 'Ambient Audio: Muted 🔇',
                    description: 'Environmental audio paused.',
                    variant: 'info',
                  });
                }
              }}
            />
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: 'var(--fj-font-size-xs)', fontWeight: 700 }}>Accent:</span>
              <Radio
                name="env"
                label="Sky"
                checked={radioVal === 'sky'}
                onChange={() => {
                  setRadioVal('sky');
                  playAeroClick(sliderGainVal);
                }}
              />
              <Radio
                name="env"
                label="Ocean"
                checked={radioVal === 'ocean'}
                onChange={() => {
                  setRadioVal('ocean');
                  playAeroClick(sliderGainVal);
                }}
              />
              <Radio
                name="env"
                label="Meadow"
                checked={radioVal === 'meadow'}
                onChange={() => {
                  setRadioVal('meadow');
                  playAeroClick(sliderGainVal);
                }}
              />
            </div>
          </div>

          <Divider
            label="Aero Segmented Switcher & Accessible Form Fields"
            style={{ margin: '2rem 0 1.5rem 0' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                View Mode Selector:
              </span>
              <SegmentedControl
                value={segmentedMode}
                onChange={mode => {
                  setSegmentedMode(mode);
                  playAeroClick(sliderGainVal);
                  toast({
                    title: `Ecosystem: ${mode.toUpperCase()} ✨`,
                    description: `Loaded dedicated shaders for ${mode}.`,
                    variant: mode === 'nature' ? 'success' : 'info',
                  });
                }}
                fullWidth
                options={[
                  {
                    value: 'glass',
                    label: 'Aero Glass',
                    icon: <IconSparkles size={14} />,
                    variant: 'glass',
                  },
                  {
                    value: 'nature',
                    label: 'Biosphere',
                    icon: <IconLeaf size={14} />,
                    variant: 'nature',
                  },
                  {
                    value: 'water',
                    label: 'Hydrosphere',
                    icon: <IconWater size={14} />,
                    variant: 'water',
                  },
                ]}
              />
            </div>

            {/* Interactive Form Controls Container reacting to Mode Switch */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--fj-radius-lg, 12px)',
                transition: 'all 0.35s ease',
                background:
                  segmentedMode === 'nature'
                    ? 'linear-gradient(135deg, rgba(240, 253, 244, 0.85) 0%, rgba(220, 252, 231, 0.5) 100%)'
                    : segmentedMode === 'water'
                      ? 'linear-gradient(135deg, rgba(224, 242, 254, 0.85) 0%, rgba(186, 230, 253, 0.5) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.5) 100%)',
                border:
                  segmentedMode === 'nature'
                    ? '1.5px solid rgba(74, 222, 128, 0.7)'
                    : segmentedMode === 'water'
                      ? '1.5px solid rgba(56, 189, 248, 0.7)'
                      : '1.5px solid rgba(186, 230, 253, 0.9)',
                boxShadow:
                  segmentedMode === 'nature'
                    ? '0 8px 24px rgba(34, 197, 94, 0.15), inset 0 1px 1px #fff'
                    : segmentedMode === 'water'
                      ? '0 8px 24px rgba(2, 132, 199, 0.18), inset 0 1px 1px #fff'
                      : '0 8px 24px rgba(2, 132, 199, 0.1), inset 0 1px 1px #fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    color:
                      segmentedMode === 'nature'
                        ? '#065f46'
                        : segmentedMode === 'water'
                          ? '#0369a1'
                          : 'var(--fj-color-sky-950)',
                  }}
                >
                  {segmentedMode === 'nature'
                    ? '🌿 Active Ecosystem: Biosphere Green'
                    : segmentedMode === 'water'
                      ? '💧 Active Ecosystem: Deep Hydrosphere'
                      : '✨ Active Ecosystem: Luminous Aero Glass'}
                </div>
                <Badge
                  variant={
                    segmentedMode === 'nature'
                      ? 'nature'
                      : segmentedMode === 'water'
                        ? 'info'
                        : 'primary'
                  }
                >
                  {segmentedMode.toUpperCase()}
                </Badge>
              </div>

              <Grid columns="repeat(auto-fit, minmax(min(100%, 260px), 1fr))" gap="1.25rem">
                <Field>
                  <Label isRequired htmlFor="vault-field">
                    {segmentedMode === 'nature'
                      ? 'Biosphere Access Key'
                      : segmentedMode === 'water'
                        ? 'Hydrosphere Hydro-Lock'
                        : 'Aqua Security Passcode'}
                  </Label>
                  <Input id="vault-field" type="password" defaultValue="secret-aero" />
                  <HelperText>
                    {segmentedMode === 'nature'
                      ? 'Authenticates flora environmental monitors.'
                      : segmentedMode === 'water'
                        ? 'Unlocks subsea aquatic data pipelines.'
                        : 'Used to decrypt glass desktop memory banks.'}
                  </HelperText>
                </Field>

                <Field>
                  <Label isRequired htmlFor="error-field">
                    {segmentedMode === 'nature'
                      ? 'Forest Canopy Allocation'
                      : segmentedMode === 'water'
                        ? 'Ocean Depth Quota'
                        : 'Resource Allocation'}
                  </Label>
                  <Input
                    id="error-field"
                    defaultValue="99999"
                    error="Value exceeds allocated biosphere quota."
                  />
                  <ErrorMessage>Allocation must be between 10 and 1000.</ErrorMessage>
                </Field>
              </Grid>
            </div>
          </div>

          <Divider
            label="Aero Range Sliders & Tactile Controls"
            style={{ margin: '2rem 0 1.5rem 0' }}
          />

          <Grid columns="repeat(auto-fit, minmax(min(100%, 280px), 1fr))" gap="1.5rem">
            <Slider
              label="Aqua Ambient Luminescence"
              value={sliderAquaVal}
              onChange={e => setSliderAquaVal(Number(e.target.value))}
              valueFormat={v => `${v}% Lumens`}
            />
            <Slider
              label="Audio Synthesis Gain"
              value={sliderGainVal}
              onChange={e => onGainChange(Number(e.target.value))}
              valueFormat={v => `${v} dB`}
            />
          </Grid>

          <Divider
            label="Skeuomorphic File Upload & Dropzone"
            style={{ margin: '2rem 0 1.5rem 0' }}
          />

          <Dropzone
            title="Drag & drop Frutiger Aero assets or click to browse"
            subtitle="Supports wallpapers, 3D icons, audio stems, and vector packages up to 50MB"
            onFilesSelected={(files: FileList) => {
              const newFiles = Array.from(files).map(f => ({
                name: f.name,
                size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
                type: f.type || 'binary/asset',
              }));
              setUploadedFiles(prev => [...prev, ...newFiles]);
              playAeroChime(sliderGainVal);
              toast({
                title: `Asset${files.length > 1 ? 's' : ''} Uploaded! 💧`,
                description: `Added ${files.length} file(s) to system cache.`,
                variant: 'success',
                icon: <IconSparkles size={18} />,
              });
            }}
          />

          {uploadedFiles.length > 0 && (
            <div
              style={{
                marginTop: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--fj-font-size-xs)',
                  fontWeight: 700,
                  color: 'var(--fj-color-sky-900)',
                }}
              >
                Uploaded Media Vault ({uploadedFiles.length} file
                {uploadedFiles.length > 1 ? 's' : ''}):
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(186, 230, 253, 0.8)',
                      borderRadius: 'var(--fj-radius-pill)',
                      fontSize: 'var(--fj-font-size-xs)',
                      fontWeight: 600,
                      boxShadow: '0 2px 6px rgba(2, 132, 199, 0.08)',
                    }}
                  >
                    <IconWater size={14} color="var(--fj-color-sky-600)" />
                    <span
                      style={{
                        maxWidth: '160px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {file.name}
                    </span>
                    <Badge variant="primary">{file.size}</Badge>
                    <button
                      type="button"
                      onClick={() => {
                        setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
                        playAeroClick(sliderGainVal);
                        toast({
                          title: 'File Removed',
                          description: `Removed ${file.name} from cache.`,
                          variant: 'warning',
                        });
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0 2px',
                        color: '#ef4444',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                      title="Delete file"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);
AeroFormsTab.displayName = 'AeroFormsTab';
