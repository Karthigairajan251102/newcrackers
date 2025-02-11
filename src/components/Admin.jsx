import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showElement} from '../redux/CrackerSlice';
import { Button, Container } from 'react-bootstrap';

function Admin() {

    const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.visibility.isVisible);


  return (
    <>
    <a href='' onClick={()=> dispatch(showElement())}>Admin</a>
    {
        isVisible && (
            <Container >
                <input placeholder='password'></input>
                <Button type='submit'>Submit</Button>
            </Container>
        )
        
    }
    </>
  )
}

export default Admin