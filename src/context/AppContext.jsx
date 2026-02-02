import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([7.8731, 80.7718]); // Default to Sri Lanka center
  const [mapZoom, setMapZoom] = useState(8);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const value = {
    isDrawerOpen,
    setIsDrawerOpen,
    toggleDrawer,
    openDrawer,
    closeDrawer,
    selectedLocation,
    setSelectedLocation,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
