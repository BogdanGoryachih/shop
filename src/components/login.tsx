
const Login = () => {
    return(
        
        <div className="module-login">
            <div className="container-login">
                <div className="btn-create">
                    <label htmlFor="">Название Товара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Цена Товара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Описание Товара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Название Товара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Фото Тоавара</label>
                    <input type="file" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Количество Тоавара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <label htmlFor="">Характеристика Тоавара</label>
                    <input type="text" id="text" className='input-log' />
                </div>
                <div className="btn-create">
                    <button>Создать </button>
                </div>
            </div>
        </div>
       
    )
}
export default Login
