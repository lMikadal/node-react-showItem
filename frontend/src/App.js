import Content from './componets/Content';
import Navbar from './componets/Navbar';
import './index.css';
import "@material-tailwind/react/tailwind.css";

function App() {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 py-4'>
                <Content />
            </div>
        </div>
    );
}

export default App;
