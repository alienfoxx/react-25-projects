import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnabelFlags] = useState(null);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();

      setEnabelFlags(response);
      setLoading(false)
    } catch (error) {
      console.log(error);
      throw new Error(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ loading,enableFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
