"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line
    kakao: any;
  }
}

interface KakaoMapProps {
  className?: string;
}

const KakaoMap = ({ className }: KakaoMapProps) => {
  const { isDarkMode } = useDarkMode();
  const mapContainer = useRef<HTMLDivElement>(null);

  const DEFAULT_LOCATION = { lat: 37.3499, lng: 127.108 };

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps API not loaded");
        return;
      }

      if (!mapContainer.current) return;

      const options = {
        center: new window.kakao.maps.LatLng(
          DEFAULT_LOCATION.lat,
          DEFAULT_LOCATION.lng
        ),
        level: 5,
      };

      const map = new window.kakao.maps.Map(mapContainer.current, options);

      const markerPosition = new window.kakao.maps.LatLng(
        DEFAULT_LOCATION.lat,
        DEFAULT_LOCATION.lng
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">여기서 만나요!</div>',
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;

      script.onload = () => {
        window.kakao.maps.load(() => {
          initializeMap();
        });
      };

      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div
      className={`rounded-lg overflow-hidden ${
        isDarkMode ? "border border-gray-700" : "border border-gray-300"
      } ${className || ""}`}
    >
      <div
        ref={mapContainer}
        className="w-full h-96"
        style={{ background: isDarkMode ? "#1f2937" : "#f9fafb" }}
      />
    </div>
  );
};

export default KakaoMap;
