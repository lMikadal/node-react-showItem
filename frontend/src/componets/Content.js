import Item from "./Content_item";

function Content() {
    return (
        <div className='max-w-7xl mx-auto px-4 py-4'>
            <div className="grid grid-cols-4 gap-4">
                <Item/>
            </div>
        </div>
        
    );
}

export default Content;