const themes = {
  light: {
    background: "bg-[#F7F9FC]", // Soft, light grayish-blue background (soothing but not too bright)
    secondaryBackground: "bg-[#E1E8F0]", // Slightly lighter gray for secondary elements (cards, containers)
    primary: "text-[#1F2937]", // Dark blue-gray for primary buttons and links (professional)
    secondary: "text-[#3B82F6]", // Vibrant blue for secondary elements and links
    accent: "text-[#FFD700]", // Gold accent (for royal luxury)
    textPrimary: "text-[#2C3E50]", // Dark gray text for main content (high readability)
    textSecondary: "text-[#7F8C8D]", // Muted gray for secondary text (helpful descriptions)
    border: "border-[#D1D5DB]", // Subtle border to separate elements
    codeBackground: "bg-[#F1F3F6]", // Light off-white background for code blocks
    codeText: "text-[#34495E]", // Dark gray-blue for code text (perfect contrast for code)
    error: "text-[#E74C3C]", // Classic red for errors
    warning: "text-[#F39C12]", // Yellow for warnings
    success: "text-[#28A745]", // Green for success messages
  },
  dark: {
    background: "bg-[#1A1A1A]", // Dark slate gray, not pure black but very deep (perfect for dark mode)
    secondaryBackground: "bg-[#23272A]", // Slightly lighter dark gray for secondary elements
    primary: "text-[#3B82F6]", // Vibrant blue for primary actions (buttons/links)
    secondary: "text-[#6D28D9]", // Deep purple for secondary actions and elements (royal touch)
    accent: "text-[#FFD700]", // Soft gold for accents and highlights (luxurious and elegant)
    textPrimary: "text-[#ECF0F1]", // Light gray for text on dark background (good contrast)
    textSecondary: "text-[#AAB7B8]", // Lighter gray for secondary content
    border: "border-[#374151]", // Darker border color to separate elements on dark background
    codeBackground: "bg-[#2C2F38]", // Darker background for code blocks (reduces glare)
    codeText: "text-[#ECF0F1]", // Light gray text for code (readable on dark background)
    error: "text-[#E74C3C]", // Red for errors (classic and high visibility)
    warning: "text-[#F39C12]", // Yellow for warnings (clear and eye-catching)
    success: "text-[#2ECC71]", // Green for success (distinct against dark background)
  },
};

export default themes;
