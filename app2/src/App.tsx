import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  background: '#fff',
  color: '#000',
  padding: 20,
  borderRadius: 11,
  boxShadow: '0 1px 5px rgba(0,0,0,.8)',
};

export const App: FC = () => (
  <div style={style}>App2</div>
);
