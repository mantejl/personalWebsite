"use client";   

import React from "react";  
import { Button, Modal, Card } from "flowbite-react";

const campusInvolvements = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className="flex flex-col items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Card>
            <Card.Header>Modal Header</Card.Header>
            <Card.Body>
                <p>Modal Body</p>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
            </Card.Footer>
            </Card>
        </Modal>
        </div>
    );
};

export default campusInvolvements;