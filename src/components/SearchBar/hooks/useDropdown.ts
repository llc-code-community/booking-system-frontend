import { useState } from "react";

interface useDropdownProps {
    initialValue: boolean;
}


export const useDropdown = (initialValue: boolean) => {
    const [isOpen, setIsOpen] = useState(initialValue);
    return {isOpen, setIsOpen}
}