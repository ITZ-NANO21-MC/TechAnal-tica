'use client';

import { useRef, useEffect } from 'react';
import maplibregl, { Map as MapLibreMap, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialCoords = { longitude: -3.70379, latitude: 40.416775, zoom: 13 };
// This HSL value corresponds to the primary color in globals.css
const primaryColor = 'hsl(222 83% 54%)';

export function InteractiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  
  useEffect(() => {
    if (!apiKey || !mapContainerRef.current) return;
    if (mapRef.current) return; // initialize map only once
    
    const mapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${apiKey}`;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [initialCoords.longitude, initialCoords.latitude],
      zoom: initialCoords.zoom,
    });
    mapRef.current = map;
    
    new Marker({ color: primaryColor })
      .setLngLat([initialCoords.longitude, initialCoords.latitude])
      .addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [apiKey]);


  if (!apiKey) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Nuestra Ubicación</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTitle>Error de Configuración</AlertTitle>
            <AlertDescription>
              La API Key de Geoapify no está configurada. Por favor, añade
              NEXT_PUBLIC_GEOAPIFY_API_KEY a tu archivo .env.local.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Nuestra Ubicación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 w-full rounded-lg overflow-hidden relative">
          <div ref={mapContainerRef} style={{width: '100%', height: '100%'}} />
        </div>
      </CardContent>
    </Card>
  );
}
