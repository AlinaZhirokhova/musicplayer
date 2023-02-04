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
    // <ContentLoader
    //   speed={2}
    //   width={1100}
    //   height={160}
    //   viewBox="0 0 1100 160"
    //   backgroundColor="#1f1f1f"
    //   foregroundColor="#858585"
    // >
    //   <rect x="50" y="6" rx="4" ry="4" width="1000" height="38" />
    //   <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
    //   <rect x="50" y="55" rx="4" ry="4" width="1000" height="38" />
    //   <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
    //   <rect x="50" y="104" rx="4" ry="4" width="1000" height="38" />
    //   <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
    // </ContentLoader>
  )
}
