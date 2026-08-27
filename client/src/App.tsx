
import Landing from '@/Pages/Landing'

function App() {

  return (
    <>
      <div
        className='flex h-screen w-full flex-col items-start justify-start overflow-x-hidden overflow-y-auto font-poppins'
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <Landing />
      </div>
    </>
  )
}

export default App
