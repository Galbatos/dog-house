import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const wrapSvgPath = (path, viewBox="0 0 105.2 80.3") => (props) => (
    <SvgIcon {...props} viewBox={viewBox}>{path}</SvgIcon>
);


const dogBallonPath = (<path d="M61.7 42.6a10 10 0 0 1-6.4-2.8 2.1 2.1 0 1 0-3.1 2.9 11.5 11.5 0 0 0 2.1 1.8l-2.6 5.9a2.1 2.1 0 0 0 .2 2 2.1 2.1 0 0 0 1.8.9 37.6 37.6 0 0 1 11.8 2.2c-9.1 5.7-15.1 5.1-16.2 4.9a2.1 2.1 0 0 0-2.4.9c-2.1 3.4-8.3 10.9-20.2 7.1l-1.4-.4a33.3 33.3 0 0 1-4-1.8 2.1 2.1 0 0 0-2.1.1L4.8 75.5a3.4 3.4 0 0 1-.5-2.4c.3-2 2.5-4.1 6.2-6a2.1 2.1 0 0 0 1.1-1.5c.1-.5 1.2-4.6 3.2-6.4a2.1 2.1 0 0 0 .7-1.6 2.1 2.1 0 0 0-.8-1.6 14.6 14.6 0 0 1-4.2-6.2l3 1c4.6 1.5 8.5 2.1 11.3 1.8h.2c16.9-2.6 19.5-9.1 20-11.1a2.1 2.1 0 0 0-.5-1.8c-4.2-4.7-5.3-8.9-5.5-11.5V28a21.6 21.6 0 0 1 4.5 2.3 2.1 2.1 0 0 0 2.1.1l.8-.3a2.1 2.1 0 0 0 1.4-2.3V27a12.3 12.3 0 0 1-.3-3.5 9.5 9.5 0 0 1 3.6 3.6 2.1 2.1 0 0 0 1.8 1c8.8.2 13.8 1.1 16.4 2 1.2.3 1.2.6 1.2.9a12.3 12.3 0 0 1-1.5 7.6c-1.7 2.9-4 4.3-7.2 4.2M70.2 26c-2.7-.8-7.8-1.9-16.4-2.1-1-1.3-3.8-4.7-6.9-4.6a3.7 3.7 0 0 0-2.9 1.4 6.4 6.4 0 0 0-1 4.6c-3-1.5-4.7-1.8-6.2-1.1s-2 3.1-2.1 3.9a1.8 1.8 0 0 0 0 .3c.2 3.1 1.4 8 5.7 13.2-2.1 3.8-11.5 6.3-16.3 7-2.1.2-5.5-.4-9.5-1.7s-5-1.9-5.7-2.2l-.7-.3a2.1 2.1 0 0 0-2.1.2 2.1 2.1 0 0 0-.9 1.9 20.8 20.8 0 0 0 5.2 11.3 21.3 21.3 0 0 0-2.7 6C3.2 66.3.6 69.2.1 72.4A7.5 7.5 0 0 0 2 78.8l.9.9a2.1 2.1 0 0 0 1.2.6h.4a2.1 2.1 0 0 0 1-.3l14.9-9.5 3.3 1.5 1.5.5c13.7 4.4 21.5-3.8 24.4-7.8 3.2.2 11-.2 21.4-7.9a2.1 2.1 0 0 0 .9-1.9 2.1 2.1 0 0 0-1.2-1.7 44.7 44.7 0 0 0-14-3.9l1.3-3a13.1 13.1 0 0 0 3.5.6c4.7.1 8.4-2 10.9-6.2a16.5 16.5 0 0 0 2.1-10.2c-.3-2.3-1.7-3.8-4.3-4.5m-1.3 5.8a1.7 1.7 0 0 0-1.1-.9c-1.4-.4-4.5-.2-5.7 1a1.8 1.8 0 0 0-.5 1.9s1.2 3 3.1 3.6h1.1a5.3 5.3 0 0 0 2.8-2.5 3.8 3.8 0 0 0 .3-3.2m-14.7-2a2.7 2.7 0 0 0-3.4 1.8 2.7 2.7 0 0 0 1.7 3.4h.8a2.7 2.7 0 0 0 .8-5.3m27.2-8.2a13.2 13.2 0 0 1-4.7-4.1 8 8 0 0 1 2-11.1l1.7-.9a7.8 7.8 0 0 1 2.5-.5 12.1 12.1 0 0 0-1.5 2.5c-2 4.5-1.2 10 0 14.1m5.8 3.6c-.9-2.1-4.5-10.5-2-16a8.2 8.2 0 0 1 6.5-4.8H94l1.1.3.9.3a8.2 8.2 0 0 1 4.3 4.6 8.1 8.1 0 0 1-.2 6.3c-2.8 6.3-9.7 8.6-13 9.3m17.2-17a12.3 12.3 0 0 0-6.5-6.9L96.5.6a12.3 12.3 0 0 0-9.4.8 11.9 11.9 0 0 0-8.2.1 12.8 12.8 0 0 0-2.5 1.3 12.2 12.2 0 0 0-3.1 16.9 18.7 18.7 0 0 0 10.2 7.1l.9 1.8a2.1 2.1 0 0 0 1.2.8 7.5 7.5 0 0 1 3.8 3.9c.8 2.2-.4 4.3-1.6 5.8a24.5 24.5 0 0 1-3 2.9 26 26 0 0 0-3.7 3.7 13.9 13.9 0 0 0-2.8 9.8 18.2 18.2 0 0 0 3.4 8.8 2.1 2.1 0 0 0 1.4.9h.4a2.1 2.1 0 0 0 1.2-.4 2.1 2.1 0 0 0 .9-1.4 2.1 2.1 0 0 0-.3-1.6 14 14 0 0 1-2.7-6.9 9.6 9.6 0 0 1 2-6.7 23.4 23.4 0 0 1 3.1-3.1 27.9 27.9 0 0 0 3.3-3.2c2.7-3.3 3.5-6.7 2.3-9.9a10.4 10.4 0 0 0-2.3-3.6c4.3-1.4 10.2-4.5 13-10.9a12.3 12.3 0 0 0 .3-9.5" />
);

const DogBallonIcon = wrapSvgPath(dogBallonPath);

export default DogBallonIcon;
