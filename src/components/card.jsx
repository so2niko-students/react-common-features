const Card = ({user}) => {
    return (
        <div className='container p-3 border-2 border-slate-100'>
            <h2 className="text-lg">{user.name} {user.surname}</h2>
            <div className="text-sm">
                <p>login: {user.login}</p>
                <p>password: {user.password}</p>
                <p>id: {user.id}</p>
            </div>
        </div>
    );
}

export default Card;