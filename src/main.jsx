import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy,Suspense } from 'react';
import { Spin,ConfigProvider } from 'antd';
import './index.css'

const App=lazy(()=>import('./App'));
const Load=()=>{
  return(<Spin style={{height:'100vh',display:"flex",alignItems:'center',justifyContent:"center"}}/>)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <Suspense fallback={Load()}>
      <App/>
    </Suspense>
    </ConfigProvider>
  </StrictMode>,
)
