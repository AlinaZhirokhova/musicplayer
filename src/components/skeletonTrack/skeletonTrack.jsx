import ContentLoader from 'react-content-loader'

export const SkeletonTrack = () => {
  return (
    <ContentLoader 
    speed={2}
    width={1107}
    height={124}
    viewBox="0 0 1107 124"
    backgroundColor="#1f1f1f"
    foregroundColor="#404040"
  >
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" /> 
    <rect x="67" y="13" rx="0" ry="0" width="350" height="18" /> 
    <rect x="455" y="13" rx="0" ry="0" width="300" height="18" />
    <rect x="790" y="13" rx="0" ry="0" width="317" height="18" />
    <rect x="0" y="62" rx="0" ry="0" width="51" height="51" /> 
    <rect x="67" y="75" rx="0" ry="0" width="350" height="18" /> 
    <rect x="455" y="75" rx="0" ry="0" width="300" height="18" />
    <rect x="790" y="75" rx="0" ry="0" width="317" height="18" />

  </ContentLoader>
  )
}
