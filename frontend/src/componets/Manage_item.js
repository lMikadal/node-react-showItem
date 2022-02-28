import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";

function Item(props) {

    const { item } = props;

    return (
        <div className="w-auto">
            <Card>
                <CardBody>
                    <Paragraph color="gray">
                        <h1 className="font-medium">{item.name}</h1>
                        {item.description}
                    </Paragraph>
                </CardBody>
                <CardFooter>
                    <Paragraph>
                        <div className="text-right">
                            {item.price} บาท
                        </div>
                    </Paragraph>
                </CardFooter>
            </Card> 
        </div> 
    );
}

export default Item;