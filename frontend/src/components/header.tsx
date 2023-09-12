export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <h1>Motivational To-Do</h1>
            <nav aria-label="Main Menu">
                <ul>
                    <li><a href="#"><h4>Home</h4></a></li>
                    <li><a href="#"><h4>To-Do</h4></a></li>
                    <li><a href="#"><h4>Events</h4></a></li>
                    <li><a href="#"><h4>Quotes</h4></a></li>
                    <li><a href="#"><h4>Images</h4></a></li>
                    <li><a href="#"><h4>Login</h4></a></li>
                </ul>
            </nav>
        </header>
    )
};