import React from "react";

// This component displays a disclaimer message for Crown Internation Travels.
// It uses the provided Tailwind CSS theme for styling, including custom fonts and colors.
const DisclaimerPage = () => {
  return (
    // Main container for the disclaimer page.
    // Uses a gradient background for visual appeal, min-h-screen for full height,
    // and centers content using flexbox. The gradient colors are kept, but the card
    // will now provide a clearer separation.
    <div
      className="h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8
                    bg-gradient-to-br from-[var(--color-primary1)] to-[var(--color-primary7)] text-foreground"
    >
      {/* Content wrapper with max-w, padding, rounded corners, and shadow. */}
      {/* Changed background to solid 'bg-background' to reduce color intensity and
          removed 'glass-effect' and 'hover-glow' for a cleaner look.
          Border color is now more subtle using 'border-border'. */}
      <div
        className="max-w-3xl w-full bg-background text-card-foreground p-8 md:p-12 rounded-2xl shadow-xl
                      animate-fade-in-up transition-all duration-500
                      border border-solid border-border"
      >
        {/* Heading for the disclaimer. Uses 'heading-secondary' for consistent styling
            and applies a gradient text effect for a premium look. */}
        <h1 className="heading-secondary text-center mb-6 md:mb-8 gradient-text font-playfair animate-scale-in">
          Disclaimer
        </h1>

        {/* The actual disclaimer message. Text size is enlarged for better readability
            and made responsive with 'text-xl' for small screens and 'lg:text-2xl' for larger ones.
            Uses 'poppins' font and 'text-[var(--color-primary6)]' for color. */}
        <p className="text-xl lg:text-2xl text-center leading-relaxed font-poppins text-[var(--color-primary6)] animate-fade-in-up animate-delay-200">
          Crown International Travels is a private travel consultancy and is not
          affiliated with government. We provide assistance with travel planning
          and documentation.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
