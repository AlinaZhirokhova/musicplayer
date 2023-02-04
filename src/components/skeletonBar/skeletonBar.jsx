import ContentLoader from 'react-content-loader'

export const SkeletonBar = () => {
  return (
    <ContentLoader
      speed={2}
      width={163}
      height={80}
      viewBox="0 0 163 80"
      backgroundColor="#1f1f1f"
      foregroundColor="#404040"
    >
      <rect x="0" y="0" rx="0" ry="0" width="80" height="80" />
      <rect x="100" y="9" rx="0" ry="0" width="63" height="25" />
      <rect x="100" y="45" rx="0" ry="0" width="80" height="25" />
    </ContentLoader>
  )
}
