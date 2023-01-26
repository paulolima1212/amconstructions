import { keyframes, styled } from '@/styles'

const ScaleUpSkeleton = keyframes({
  to: {
    backgroundPositionX: '-20%',
  },
})

export const SkeletonContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  color: '$gray100',
  background: '$gray800',
  backgroundSize: '200% 100%',
  backgroundPositionX: '180%',
  animation: `${ScaleUpSkeleton} 1000ms ease-in-out infinite`,
})
