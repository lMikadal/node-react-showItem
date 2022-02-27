import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Paragraph from "@material-tailwind/react/Paragraph";

function Item(props) {

    const { item } = props
    
    return (
        <div className="w-auto">
            <Card>
                <CardBody>
                    <h1 color="gray">{item.name}</h1>
                    <Paragraph color="gray">
                        {item.description}
                    </Paragraph>
                </CardBody>
            </Card> 
        </div> 
    );
}

export default Item;