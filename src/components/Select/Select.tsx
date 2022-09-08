import { useState } from "react"
import { Button, Container, Option, List } from "./Select.styles"
import { Item, SelectProps } from "./Select.types";

export const Select = ({ items }: SelectProps) => {
    const [value, setValue] = useState<Item>({});
    const [open, setOpen] = useState<boolean>(false);

    const pickItem = (item: Item) => {
        setValue(item);
        setOpen(false)
    }

    return (
        <Container>
            <Button onClick={_ => setOpen(!open)}>
                <span>{value.text ? value.text : "Select One"}</span>
                <span style={{ width: '10px' }}>{open ? '^' : 'v'}</span>
            </Button>
            <List visible={open}>
                {items.length && items.map(item => (
                    <Option key={item.id} onClick={_ => pickItem(item)}>{item.text}</Option>
                ))}
            </List>
        </Container>
    )
}