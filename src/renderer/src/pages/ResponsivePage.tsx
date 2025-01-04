import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import themes from "../constants/theme";
import Header from "../components/responsivePage/Header";
import Body from "../components/responsivePage/Body";
import DevConsole from "../components/responsivePage/DevConsole";
import { debounce } from "../utils/debounce";

function ResponsivePage() {
  const { currentTheme } = useTheme();
  const theme = themes[currentTheme] || themes.light;

  const [url, setUrl] = useState("https://example.com");
  const [isConsoleVisible, setConsoleVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resizePercentage, setResizePercentage] = useState(100);

  return (
    <main
      className={`w-full h-screen p-5 ${theme.secondaryBackground} flex flex-col`}
    >
      <section
        className={`w-full h-full rounded-xl p-3 ${theme.background} flex flex-col overflow-hidden`}
      >
        <Header
          setUrl={setUrl}
          url={url}
          setConsoleVisible={setConsoleVisible}
          resizePercentage={resizePercentage}
          setResizePercentage={setResizePercentage}
        />
        <section className="w-full h-full flex flex-row mt-3">
          <Body url={url} theme={theme} resizePercentage={resizePercentage} />
          <DevConsole theme={theme} isVisible={isConsoleVisible} />
        </section>
      </section>

      {loading && (
        <div className="absolute top-1/2 left-1/2 text-center">
          <p className="text-lg text-blue-600">Loading...</p>
        </div>
      )}
      {error && (
        <div className="absolute top-1/2 left-1/2 text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )}
    </main>
  );
}

export default ResponsivePage;
