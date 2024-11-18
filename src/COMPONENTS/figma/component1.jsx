import './Header.css'
function Header() {
    let a = 'hello'
    console.log(a);

    return (
        <header className="header">
            <div><div className="ikonka"><img className="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIICBKSnYHepzFqZu2TfjNE-YsELZIlzq6A&s" /></div></div>
            <div className="p">
                <h3 >Главная</h3>
                <h3>О нас</h3>
                <h3>Корзина</h3>
                <h3 >Магазин</h3>
            </div>
            <button className="batton-blue">Войти</button>
        </header>
    )
}

export default Header