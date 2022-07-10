import ContentLoader from 'react-content-loader';

export const PizzaSkelet = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="128" y="425" rx="0" ry="0" width="1" height="0" />
    <rect x="144" y="289" rx="0" ry="0" width="1" height="0" />
    <circle cx="140" cy="122" r="121" />
    <rect x="0" y="260" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="304" rx="10" ry="10" width="280" height="88" />
    <rect x="126" y="413" rx="30" ry="30" width="150" height="45" />
    <rect x="2" y="420" rx="5" ry="5" width="100" height="30" />
  </ContentLoader>
);
