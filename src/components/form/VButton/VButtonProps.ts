import type { ButtonHTMLAttributes } from 'vue';
export type VButtonProps = {
  text: string;
  shape?: 'default' | 'circle' | 'round';
  size?: 'xs' | 'sm' | 'md' | 'lg';
} & /* @vue-ignore */ ButtonHTMLAttributes;
