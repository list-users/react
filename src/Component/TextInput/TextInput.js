import './Input.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const TextInput = (props) => {
    return (
        <>
            <div style={props.style}>
                <Form.Group>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control
                        type={props.type}
                        placeholder={props.placeholder}
                    />
                </Form.Group>
            </div>
        </>
    )
}
export default TextInput;

