// import Button from 'react-bootstrap/Button';
// or less ideally
import { Button } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button1() {
    return (
        <div>
            <Button>Default</Button>
            <br />
            <br />
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </div>
    );
}

export default Button1;
