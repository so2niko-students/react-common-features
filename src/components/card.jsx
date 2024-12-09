import './style.css';

const Card = ({user}) => {
    return (
        <div className='card'>
            <h2>{user.name} {user.surname}</h2>
            <div>
                <p>login: {user.login}</p>
                <p>password: {user.password}</p>
                <p>id: {user.id}</p>
            </div>
        </div>
    );
}

export default Card;