import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
        if(keyword.length === 0) {
            swal(<h2>Escribe algo...</h2>)
        } else if(keyword.length < 4) {
            swal(<h2>Escribe al menos 4 caracteres...</h2>)
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`);
        }
    }
    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <input className="form-control mx-2" type="text" name="keyword" placeholder="Palabra clave" />
            <button className="btn btn-info my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    )
}

export default Buscador