import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardVariant,
  Grid,
  Badge,
} from '@frutiger.js/react';

export const AeroCardsTab: React.FC = React.memo(() => {
  return (
    <Grid columns="repeat(auto-fit, minmax(min(100%, 240px), 1fr))" gap="1rem">
      {(['default', 'glass', 'gloss', 'floating', 'nature'] as CardVariant[]).map(v => (
        <Card key={v} variant={v}>
          <CardHeader>
            <CardTitle>{v.charAt(0).toUpperCase() + v.slice(1)} Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ fontSize: 'var(--fj-font-size-sm)' }}>
              Surface rendered with {v} preset and tactile highlights.
            </p>
          </CardContent>
          <CardFooter>
            <Badge variant="primary">Active</Badge>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
});
AeroCardsTab.displayName = 'AeroCardsTab';
