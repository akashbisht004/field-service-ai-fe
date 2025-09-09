import { ReactNode, useEffect, useState } from "react";

interface FadeInElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
interface AnimatedWordProps {
  word: string;
  delay: number;
  className?: string;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const FadeInElement = ({
  children,
  delay = 0,
  className = "",
}: FadeInElementProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

const AnimatedWord = ({ word, delay, className = "" }: AnimatedWordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`mr-2 inline-block transition-all duration-500 ${className} ${
        isVisible
          ? "opacity-100 blur-0 translate-y-0"
          : "opacity-0 blur-sm translate-y-2"
      }`}
    >
      {word}
    </span>
  );
};

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <AnimatedWord
          key={index}
          word={word}
          delay={index}
          className={className}
        />
      ))}
    </>
  );
};

export {FadeInElement,AnimatedText};