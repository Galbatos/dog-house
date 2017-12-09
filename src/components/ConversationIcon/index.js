import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const wrapSvgPath = (path, viewBox="0 0 80.7 60.8") => (props) => (
    <SvgIcon {...props} viewBox={viewBox}>{path}</SvgIcon>
);


const conversationPath = (<path d="M10.5 31.3V10.9L4.4 5.2a.6.6 0 0 1 .4-1h37.6a4 4 0 0 1 4 4v7.6h4.2V8.2A8.2 8.2 0 0 0 42.4 0H4.8a4.8 4.8 0 0 0-3.3 8.2l4.9 4.6v18.5a8.2 8.2 0 0 0 8.2 8.2h8.8v-4.3h-8.9a4 4 0 0 1-4-4m24.7-14.8H19.4a2.1 2.1 0 1 1 0-4.2h15.8a2.1 2.1 0 1 1 0 4.2m-13.4 9.7h-2.4a2.1 2.1 0 1 1 0-4.2h2.4a2.1 2.1 0 0 1 0 4.2m16.6.8a4 4 0 0 0-4 4v21.8a4 4 0 0 0 4 4h27.9a4 4 0 0 0 4-4V33.6l6.2-5.8a.5.5 0 0 0 .1-.6.5.5 0 0 0-.6-.3zm27.9 34H38.4a8.2 8.2 0 0 1-8.2-8.2V30.8a8.2 8.2 0 0 1 8.2-8.2H76a4.7 4.7 0 0 1 3.4 8.1l-4.9 4.6v17.4a8.2 8.2 0 0 1-8.2 8.2zM43.2 39a2.1 2.1 0 0 1 0-4.2h18.3a2.1 2.1 0 0 1 0 4.2zm13.4 9.7H43.2a2.1 2.1 0 0 1 0-4.2h13.4a2.1 2.1 0 1 1 0 4.2" />
);

const ConversationIcon = wrapSvgPath(conversationPath);

export default ConversationIcon;
