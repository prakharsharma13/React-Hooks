import EffectCount from "./components/useEffect/EffectCount"
import UseMemo from "./components/UseMemo/UseMemo"
import UseRef from "./components/useRef/UseRef"
import Car from "./components/useState/Car"
import Count from "./components/useState/Count"
import UseState from "./components/useState/UseState"



function App() {

  return (
    <>
      <UseState />
      <Car />
      <Count />

      <h1>Use Effect</h1>
      <EffectCount />

      <h1>Use Ref</h1>
      <UseRef />

      <h1>Use Memo</h1>
      <UseMemo />
    </>
  )
}

export default App
