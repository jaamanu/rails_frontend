import { useEffect } from 'react';
// import { getGreetings } from './redux/greeting/greeting';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greeting/greeting';

const Greeting = () => {
    const {greetings} = useSelector(state => state.greetings)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getGreetings());
  },[])
  return(
<div>
{greetings.greeting}
</div>
  )
}
export default Greeting