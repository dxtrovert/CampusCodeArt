import { MotionConfig } from 'framer-motion';

export default function MotionConfigProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
