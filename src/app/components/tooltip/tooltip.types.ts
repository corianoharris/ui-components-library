export type ArrowPositionProps = 'left-center' | 'left-top' | 'left-bottom' | 'top-center' | 'top-left' | 'top-right' | 'right-top' | 'right-center' | 'right-bottom' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'none';

export type TooltipProps = {
  title?: string;
  content?: string;
  boxShadow?: boolean;
  isVisible: boolean;
  arrowPosition: ArrowPositionProps;
}; 