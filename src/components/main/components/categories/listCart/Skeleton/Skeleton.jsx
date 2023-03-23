import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Skeleton.module.scss';

const Skeleton = (props) => (
  <div className={styles.skeleton}>
    <ContentLoader
      speed={2}
      width={325}
      height={385}
      viewBox="0 0 325 385"
      backgroundColor="#3d3d3d"
      foregroundColor="#303030"
      {...props}>
      <rect x="0" y="0" rx="10" ry="10" width="325" height="385" />
    </ContentLoader>
  </div>
);

export default Skeleton;
