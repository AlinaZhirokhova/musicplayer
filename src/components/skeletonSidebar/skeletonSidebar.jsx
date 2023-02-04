import ContentLoader from 'react-content-loader'

export const SkeletonSidebar = () => {
    return (
        <ContentLoader 
        speed={2}
        width={250}
        height={510}
        viewBox="0 0 250 510"
        backgroundColor="#1f1f1f"
        foregroundColor="#404040"
      >
        <rect x="0" y="0" rx="0" ry="0" width="250" height="150" />
        <rect x="0" y="180" rx="0" ry="0" width="250" height="150" />
        <rect x="0" y="360" rx="0" ry="0" width="250" height="150" />
      </ContentLoader>
    )
}