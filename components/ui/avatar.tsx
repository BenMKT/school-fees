import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/app/lib/utils';

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = 'Avatar';

type AvatarImageProps = Omit<ImageProps, 'fill' | 'width' | 'height'> & {
  alt?: string;
};

const AvatarImage = ({ className, alt = '', ...props }: AvatarImageProps) => (
  <Image
    alt={alt}
    fill
    sizes="40px"
    className={cn('aspect-square h-full w-full object-cover', className)}
    unoptimized
    {...props}
  />
);

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
